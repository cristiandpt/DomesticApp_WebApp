package model

import (
	"time"
)

// Product structure
type Product struct {
	ID          int        `json:"ID"`
	CreatedAt   time.Time  `json:"CreatedAt"`
	UpdatedAt   time.Time  `json:"UpdatedAt"`
	DeletedAt   *time.Time `json:"DeletedAt"`
	Img         string     `json:"img"`
	SmallImg    string     `json:"small_img"`
	ImgAlt      string     `json:"imgalt"`
	Price       int        `json:"price"`
	Promotion   int        `json:"promotion"`
	ProductName string     `json:"productname"`
	Description string     `json:"Description"`
}

// Order structure
type Order struct {
	ID           int        `json:"ID"`
	CreatedAt    time.Time  `json:"CreatedAt"`
	UpdatedAt    time.Time  `json:"UpdatedAt"`
	DeletedAt    *time.Time `json:"DeletedAt"`
	Img          string     `json:"img"`
	SmallImg     string     `json:"small_img"`
	ImgAlt       string     `json:"imgalt"`
	Price        int        `json:"price"`
	Promotion    int        `json:"promotion"`
	ProductName  string     `json:"productname"`
	Description  string     `json:"Description"`
	Name         string     `json:"name"`
	FirstName    string     `json:"firstname"`
	LastName     string     `json:"lastname"`
	Email        string     `json:"email"`
	Password     string     `json:"password"`
	LoggedIn     bool       `json:"loggedin"`
	Orders       []Order    `json:"orders"`
	CustomerID   int        `json:"customer_id"`
	ProductID    int        `json:"product_id"`
	SellPrice    int        `json:"sell_price"`
	PurchaseDate time.Time  `json:"purchase_date"`
}

// Customer structure
type Customer struct {
	ID        int        `json:"ID"`
	CreatedAt time.Time  `json:"CreatedAt"`
	UpdatedAt time.Time  `json:"UpdatedAt"`
	DeletedAt *time.Time `json:"DeletedAt"`
	Name      string     `json:"name"`
	FirstName string     `json:"firstname"`
	LastName  string     `json:"lastname"`
	Email     string     `json:"email"`
	Password  string     `json:"password"`
	LoggedIn  bool       `json:"loggedin"`
	Orders    []Order    `json:"orders"`
}

type Payment struct {
	ClientID  string    `json:"client_id" binding:"required"`
	WorkerID  string    `json:"worker_id" binding:"required"`
	ServiceID string    `json:"service_id" binding:"required"`
	Quantity  float64   `json:"quantity" binding:"required"`
	Date      time.Time `json:"date" binding:"required"`
}
