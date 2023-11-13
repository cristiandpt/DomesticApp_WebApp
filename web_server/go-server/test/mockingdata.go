package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"

	"github.com/graphql-go/graphql"
)

// User represents the structure of user data.
type User struct {
	ID       int    `json:"id"`
	Username string `json:"username"`
	Email    string `json:"email"`
}

// LoadUsers loads user data from a JSON file and returns a slice of User.
func LoadUsers(filePath string) ([]User, error) {
	fileContent, err := ioutil.ReadFile(filePath)
	if err != nil {
		return nil, err
	}

	var users []User
	err = json.Unmarshal(fileContent, &users)
	if err != nil {
		return nil, err
	}

	return users, nil
}

var userType = graphql.NewObject(graphql.ObjectConfig{
	Name: "User",
	Fields: graphql.Fields{
		"id":       &graphql.Field{Type: graphql.Int},
		"username": &graphql.Field{Type: graphql.String},
		"email":    &graphql.Field{Type: graphql.String},
	},
})

var queryType = graphql.NewObject(graphql.ObjectConfig{
	Name: "Query",
	Fields: graphql.Fields{
		"users": &graphql.Field{
			Type: graphql.NewList(userType),
			Resolve: func(params graphql.ResolveParams) (interface{}, error) {
				// Load user data from a JSON file (mock data)
				return LoadUsers("users.json")
			},
		},
	},
})

var schema, _ = graphql.NewSchema(graphql.SchemaConfig{
	Query: queryType,
})

func graphqlHandler(w http.ResponseWriter, r *http.Request) {
	result := graphql.Do(graphql.Params{
		Schema:        schema,
		RequestString: r.URL.Query().Get("query"),
	})
	if len(result.Errors) > 0 {
		http.Error(w, fmt.Sprintf("failed to execute graphql operation, errors: %+v", result.Errors), http.StatusInternalServerError)
		return
	}

	json.NewEncoder(w).Encode(result)
}

func main() {
	http.HandleFunc("/graphql", graphqlHandler)
	http.ListenAndServe(":8080", nil)
}


package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
)

// User represents the structure of user data.
type User struct {
	ID       int    `json:"id"`
	Username string `json:"username"`
	Email    string `json:"email"`
}

// LoadUsers loads user data from a JSON file and returns a slice of User.
func LoadUsers(filePath string) ([]User, error) {
	fileContent, err := ioutil.ReadFile(filePath)
	if err != nil {
		return nil, err
	}

	var users []User
	err = json.Unmarshal(fileContent, &users)
	if err != nil {
		return nil, err
	}

	return users, nil
}

func main() {
	// Load user data from a JSON file (mock data)
	users, err := LoadUsers("users.json")
	if err != nil {
		fmt.Println("Error loading users:", err)
		return
	}

	// Define a handler function to return the loaded users as JSON
	http.HandleFunc("/api/users", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		// Marshal the users slice into JSON
		response, err := json.Marshal(users)
		if err != nil {
			http.Error(w, "Error encoding JSON", http.StatusInternalServerError)
			return
		}
		// Write the JSON response
		w.Write(response)
	})

	// Start the HTTP server
	http.ListenAndServe(":8080", nil)
}
