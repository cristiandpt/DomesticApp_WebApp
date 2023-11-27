package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"os"

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
	fileContent, err := os.ReadFile(filePath)
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


// 1. Entities

type User struct {
	ID   int    `json:"id"`
	Name string `json:"name"`
}

// 2. Use Cases (Interactors)

type UserUseCase struct {
	Repository UserRepository
}

func (uc *UserUseCase) GetUserByID(id int) (*User, error) {
	return uc.Repository.GetUserByID(id)
}

// 3. Interfaces (Protocols)

type UserRepository interface {
	GetUserByID(id int) (*User, error)
}

// 4. Adapters (Gateways)

type InMemoryUserRepository struct {
	Users []User
}

func NewInMemoryUserRepository(users []User) *InMemoryUserRepository {
	return &InMemoryUserRepository{Users: users}
}

func (r *InMemoryUserRepository) GetUserByID(id int) (*User, error) {
	for _, user := range r.Users {
		if user.ID == id {
			return &user, nil
		}
	}
	return nil, nil
}

// 5. Frameworks & Drivers

// ... (Same as previous code, just adapt to use the new structure)

// Main function

func main() {
	// Set up dependencies
	userRepository := NewInMemoryUserRepository(users)
	userUseCase := &UserUseCase{Repository: userRepository}

	// Set up GraphQL schema
	var schema, _ = graphql.NewSchema(
		graphql.SchemaConfig{
			Query: newUserQueryType(userUseCase),
		},
	)

	// Set up GraphQL handler
	http.HandleFunc("/graphql", graphqlHandler(schema))

	port := 8080
	log.Printf("Server is running on http://localhost:%d/graphql", port)
	log.Fatal(http.ListenAndServe(fmt.Sprintf(":%d", port), nil))
}

// New user query type with resolver
func newUserQueryType(userUseCase *UserUseCase) *graphql.Object {
	return graphql.NewObject(
		graphql.ObjectConfig{
			Name: "Query",
			Fields: graphql.Fields{
				"user": &graphql.Field{
					Type: userType,
					Args: graphql.FieldConfigArgument{
						"id": &graphql.ArgumentConfig{Type: graphql.Int},
					},
					Resolve: func(p graphql.ResolveParams) (interface{}, error) {
						id, ok := p.Args["id"].(int)
						if ok {
							user, err := userUseCase.GetUserByID(id)
							if err != nil {
								return nil, err
							}
							return user, nil
						}
						return nil, nil
					},
				},
			},
		},
	)
}


// main.go
package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/graphql-go/graphql"
)

func main() {
	// Set up dependencies
	userRepository := NewInMemoryUserRepository(users)
	userUseCase := &UserUseCase{Repository: userRepository}

	// Set up GraphQL schema
	var schema, _ = graphql.NewSchema(
		graphql.SchemaConfig{
			Query: newUserQueryType(userUseCase),
		},
	)

	// Set up GraphQL handler
	http.HandleFunc("/graphql", graphqlHandler(schema))

	port := 8080
	log.Printf("Server is running on http://localhost:%d/graphql", port)
	log.Fatal(http.ListenAndServe(fmt.Sprintf(":%d", port), nil))
}


// user_handler.go
package main

import (
	"github.com/graphql-go/graphql"
)

// UserUseCase contains business logic related to users.
type UserUseCase struct {
	Repository UserRepository
}

func (uc *UserUseCase) GetUserByID(id int) (*User, error) {
	return uc.Repository.GetUserByID(id)
}

// newUserQueryType creates the GraphQL query type with the corresponding resolver.
func newUserQueryType(userUseCase *UserUseCase) *graphql.Object {
	return graphql.NewObject(
		graphql.ObjectConfig{
			Name: "Query",
			Fields: graphql.Fields{
				"user": &graphql.Field{
					Type: userType,
					Args: graphql.FieldConfigArgument{
						"id": &graphql.ArgumentConfig{Type: graphql.Int},
					},
					Resolve: func(p graphql.ResolveParams) (interface{}, error) {
						id, ok := p.Args["id"].(int)
						if ok {
							user, err := userUseCase.GetUserByID(id)
							if err != nil {
								return nil, err
							}
							return user, nil
						}
						return nil, nil
					},
				},
			},
		},
	)
}




// graphql_handler.go
package main

import (
	"encoding/json"
	"net/http"

	"github.com/graphql-go/graphql"
)

// graphqlHandler handles incoming GraphQL requests.
func graphqlHandler(schema graphql.Schema) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		// Handle GraphQL queries here
		// ...
	}
}



// user_repository.go
package main

// UserRepository is an interface defining methods for user data access.
type UserRepository interface {
	GetUserByID(id int) (*User, error)
}

// InMemoryUserRepository implements the UserRepository interface, providing access to the in-memory data source.
type InMemoryUserRepository struct {
	Users []User
}

func NewInMemoryUserRepository(users []User) *InMemoryUserRepository {
	return &InMemoryUserRepository{Users: users}
}

func (r *InMemoryUserRepository) GetUserByID(id int) (*User, error) {
	for _, user := range r.Users {
		if user.ID == id {
			return &user, nil
		}
	}
	return nil, nil
}


// routes.go
package main

import (
	"net/http"

	"github.com/gorilla/mux"
)

// NewRouter creates a new router and configures routes.
func NewRouter(schema graphql.Schema) *mux.Router {
	router := mux.NewRouter()

	// GraphQL endpoint
	router.HandleFunc("/graphql", graphqlHandler(schema)).Methods("POST")

	return router
}



// main.go
package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/graphql-go/graphql"
	"github.com/gorilla/mux"
)

func main() {
	// Set up dependencies
	userRepository := NewInMemoryUserRepository(users)
	userUseCase := &UserUseCase{Repository: userRepository}

	// Set up GraphQL schema
	var schema, _ = graphql.NewSchema(
		graphql.SchemaConfig{
			Query: newUserQueryType(userUseCase),
		},
	)

	// Set up routes
	router := NewRouter(schema)

	port := 8080
	log.Printf("Server is running on http://localhost:%d", port)
	log.Fatal(http.ListenAndServe(fmt.Sprintf(":%d", port), router))
}

