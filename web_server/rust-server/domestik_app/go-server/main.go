package main

import (
	"fmt"
	"net/http"

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

// main is the entry point of the program.
func main() {
	fmt.Println("Dometika listening")
	r := gin.Default()
	r.GET("/ping", domestikaListHandler)
	r.POST("/recipes", newDomestikHandler)
	r.PUT("/recipes/:id", UpdateDomestikaHandler)
	r.DELETE("/recipes/:id", DeleteRecipeHandler)
	r.GET("/recipes/search", SearchDomestikHandler)
	r.Run() // listen and serve on 0.0.0.0:8080
}
