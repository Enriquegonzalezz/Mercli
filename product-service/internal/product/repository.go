package product

import (
	"product-service/internal/database"
	"database/sql"
	
)

// Obtener todos los productos
func GetAllProducts() ([]Product, error) {
	rows, err := database.DB.Query("SELECT id, name, description, price, stock FROM products")
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var products []Product
	for rows.Next() {
		var p Product
		err := rows.Scan(&p.ID, &p.Name, &p.Description, &p.Price, &p.Stock)
		if err != nil {
			return nil, err
		}
		products = append(products, p)
	}
	return products, nil
}

// Obtener un producto por ID
func GetProductByID(id int) (*Product, error) {
	var p Product
	err := database.DB.QueryRow("SELECT id, name, description, price, stock FROM products WHERE id = ?", id).
		Scan(&p.ID, &p.Name, &p.Description, &p.Price, &p.Stock)
	if err != nil {
		if err == sql.ErrNoRows {
			return nil, nil
		}
		return nil, err
	}
	return &p, nil
}

// Crear un nuevo producto
func CreateProduct(p Product) (int64, error) {
	result, err := database.DB.Exec("INSERT INTO products (name, description, price, stock) VALUES (?, ?, ?, ?)",
		p.Name, p.Description, p.Price, p.Stock)
	if err != nil {
		return 0, err
	}
	return result.LastInsertId()
}

// Actualizar un producto
func UpdateProduct(p Product) error {
	_, err := database.DB.Exec("UPDATE products SET name=?, description=?, price=?, stock=? WHERE id=?",
		p.Name, p.Description, p.Price, p.Stock, p.ID)
	return err
}

// Eliminar un producto
func DeleteProduct(id int) error {
	_, err := database.DB.Exec("DELETE FROM products WHERE id=?", id)
	return err
}
