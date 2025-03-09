package product

import (
    
    "net/http"
    "strconv"

    "github.com/gin-gonic/gin"
)

// Endpoint: Obtener todos los productos
func GetAllProductsHandler(c *gin.Context) {
    products, err := GetAllProducts()
    if err != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"error": "Error al obtener productos"})
        return
    }
    c.JSON(http.StatusOK, products)
}

// Endpoint: Obtener un producto por ID
func GetProductByIDHandler(c *gin.Context) {
    id, err := strconv.Atoi(c.Param("id"))
    if err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": "ID no válido"})
        return
    }

    product, err := GetProductByID(id)
    if err != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"error": "Error al obtener producto"})
        return
    }
    if product == nil {
        c.JSON(http.StatusNotFound, gin.H{"error": "Producto no encontrado"})
        return
    }
    c.JSON(http.StatusOK, product)
}

// Endpoint: Crear un nuevo producto
func CreateProductHandler(c *gin.Context) {
    var p Product
    err := c.ShouldBindJSON(&p)
    if err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": "Datos inválidos"})
        return
    }

    id, err := CreateProduct(p)
    if err != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"error": "Error al crear producto"})
        return
    }

    c.JSON(http.StatusCreated, gin.H{"id": id})
}

// Endpoint: Actualizar un producto
func UpdateProductHandler(c *gin.Context) {
    var p Product
    err := c.ShouldBindJSON(&p)
    if err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": "Datos inválidos"})
        return
    }

    err = UpdateProduct(p)
    if err != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"error": "Error al actualizar producto"})
        return
    }

    c.JSON(http.StatusOK, gin.H{"message": "Producto actualizado"})
}

// Endpoint: Eliminar un producto
func DeleteProductHandler(c *gin.Context) {
    id, err := strconv.Atoi(c.Param("id"))
    if err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": "ID no válido"})
        return
    }

    err = DeleteProduct(id)
    if err != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"error": "Error al eliminar producto"})
        return
    }

    c.JSON(http.StatusOK, gin.H{"message": "Producto eliminado"})
}