package database

import (
	"database/sql"
	"fmt"
	"log"
	"os"

	_ "github.com/go-sql-driver/mysql"
)

var DB *sql.DB

func ConnectDB() {
	// Obtener las variables de entorno
	dbUser := os.Getenv("DB_USER")
	dbPassword := os.Getenv("DB_PASSWORD")
	dbHost := os.Getenv("DB_HOST")
	dbPort := os.Getenv("DB_PORT")
	dbName := os.Getenv("DB_NAME")

	// Construir el DSN (Data Source Name)
	dsn := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?parseTime=true", dbUser, dbPassword, dbHost, dbPort, dbName)

	// Abrir la conexión con la base de datos
	var err error
	DB, err = sql.Open("mysql", dsn)
	if err != nil {
		log.Fatalf("Error al conectar con la base de datos: %v", err)
	}

	// Verificar la conexión
	err = DB.Ping()
	if err != nil {
		log.Fatalf("No se pudo establecer la conexión con la base de datos: %v", err)
	}

	log.Println("Conexión a la base de datos exitosa")
}
