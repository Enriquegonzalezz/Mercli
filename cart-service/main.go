package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

type CartItem struct {
	ProductID int `json:"product_id"`
	Quantity  int `json:"quantity"`
}

var cart []CartItem

// Obtener el carrito de compras
func getCart(c *gin.Context) {
    cart := []string{"Producto 1", "Producto 2"}  // Datos de ejemplo
    c.JSON(http.StatusOK, cart)  // Devuelve el carrito con productos
}


// Agregar un producto al carrito
func addToCart(c *gin.Context) {
	var newItem CartItem
	if err := c.BindJSON(&newItem); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Datos inválidos"})
		return
	}
	cart = append(cart, newItem)
	c.JSON(http.StatusOK, gin.H{"message": "Producto agregado al carrito", "cart": cart})
}

// Eliminar un producto del carrito
func removeFromCart(c *gin.Context) {
	var itemToRemove CartItem
	if err := c.BindJSON(&itemToRemove); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Datos inválidos"})
		return
	}

	for i, item := range cart {
		if item.ProductID == itemToRemove.ProductID {
			cart = append(cart[:i], cart[i+1:]...)
			c.JSON(http.StatusOK, gin.H{"message": "Producto eliminado del carrito", "cart": cart})
			return
		}
	}
	c.JSON(http.StatusNotFound, gin.H{"error": "Producto no encontrado en el carrito"})
}

func main() {
	router := gin.Default()

	router.GET("/cart", getCart)
	router.POST("/cart", addToCart)
	router.DELETE("/cart", removeFromCart)

	router.Run(":8082") // Este servicio corre en el puerto 8082
}