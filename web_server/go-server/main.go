package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"time"

	"github.com/cristiandpt/DomesticApp_WebApp/data/model"
	"github.com/gin-gonic/gin"
)

func domestikaListHandler(c *gin.Context) {
	c.JSON(
		200,
		gin.H{"message": "Hello pong"},
	)
}

func newDomestikHandler(c *gin.Context) {
	c.JSON(
		200,
		gin.H{"message": "Hello pong"},
	)
}

func UpdateDomestikaHandler(c *gin.Context) {
	id := c.Param("id")
	var recipe string
	if err := c.ShouldBindJSON(&recipe); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": err.Error()})
		return
	}
	index := -1
	for i := 0; i < len(recipe); i++ {
		if "recipe[i]" == id {
			index = i
		}
	}
	if index == -1 {
		c.JSON(http.StatusNotFound, gin.H{
			"error": "Recipe not found"})
		return
	}
	c.JSON(http.StatusOK, recipe)
}

func DeleteRecipeHandler(c *gin.Context) {
	c.JSON(
		200,
		gin.H{"message": "Hello pong"},
	)
}

func SearchDomestikHandler(c *gin.Context) {
	//tag := c.Query("tag")
	c.JSON(
		200,
		gin.H{"message": "Hello pong"},
	)
}

func NewPayment(c *gin.Context) {
	id := c.Param("id")
	var payment model.Payment
	// index := -1
	// for i := 0; i < len(recipe); i++ {
	// 	if "recipe[i]" == id {
	// 		index = i
	// 	}
	// }
	// if index == -1 {
	// 	c.JSON(http.StatusNotFound, gin.H{
	// 		"error": "Recipe not found"})
	// 	return
	// }

	// Bind the JSON data from the request body to the Payment struct
	if err := c.ShouldBindJSON(&payment); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Now 'payment' contains the data from the JSON request body

	// Example: Print the data
	fmt.Printf("Client ID: %s\n", payment.ClientID)
	fmt.Printf("Worker ID: %s\n", payment.WorkerID)
	fmt.Printf("Service ID: %s\n", payment.ServiceID)
	fmt.Printf("Quantity: %f\n", payment.Quantity)
	fmt.Printf("Date: %v\n", payment.Date)
	fmt.Printf("Date: %v\n", id)

	// ... Perform further actions with the 'payment' data

	c.JSON(http.StatusOK, gin.H{"message": "Payment created successfully"})
	//c.JSON(http.StatusOK, payment)
}

func registerPaymentInCLientEnterpise() {
	apiURL := "http://rust-app:8081/v1/payments"

	// Create a Payment instance
	payment := model.Payment{
		ClientID:  "client123",
		WorkerID:  "worker456",
		ServiceID: "service789",
		Quantity:  100.0,
		Date:      time.Now(),
	}

	// Marshal the Payment struct to JSON
	paymentJSON, err := json.Marshal(payment)
	if err != nil {
		fmt.Println("Error marshaling Payment to JSON:", err)
		return
	}

	// Make a POST request to the API
	response, err := http.Post(apiURL, "application/json", bytes.NewBuffer(paymentJSON))
	if err != nil {
		fmt.Println("Error making POST request:", err)
		return
	}
	defer response.Body.Close()

	// Read the response body
	body, err := ioutil.ReadAll(response.Body)
	if err != nil {
		fmt.Println("Error reading response body:", err)
		return
	}

	// Print the response body
	fmt.Println("API Response:", string(body))
}

// main is the entry point of the program.
func main() {
	fmt.Println("Dometika listening")
	r := gin.Default()
	r.GET("/ping", domestikaListHandler)
	r.POST("/recipes", newDomestikHandler)
	r.POST("/payments", newDomestikHandler)
	r.PUT("/recipes/:id", UpdateDomestikaHandler)
	r.DELETE("/recipes/:id", DeleteRecipeHandler)
	r.GET("/recipes/search", SearchDomestikHandler)
	r.Run() // listen and serve on 0.0.0.0:8080
}
