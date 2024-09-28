package main

import (
	"fmt"
	"log"
	"net/http"
	"proyecto-emails/internal/config"
	"proyecto-emails/internal/handler"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
)

func main() {
	//Se cargan configuraciones
	cfg, err := config.ReadConfig()
	if err != nil {
		log.Fatal("error leyendo configuraciones")
	}
	//Inicio router y handler
	router := mux.NewRouter()
	handler.EmailHandler(router, cfg.User, cfg.Password, cfg.DB_Index)
	corsObj := handlers.AllowedOrigins([]string{cfg.Cors_Route}) //Se habilita cors
	fmt.Printf("Listening in port: %v", cfg.Port)
	http.ListenAndServe(cfg.Port, handlers.CORS(corsObj)(router))
}
