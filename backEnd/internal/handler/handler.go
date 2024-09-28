package handler

import (
	"encoding/json"
	"net/http"
	"proyecto-emails/pkg/models"

	"github.com/gorilla/mux"
)

func EmailHandler(router *mux.Router, user string, password string, db_index string) {
	router.HandleFunc("/api/email/{search}", GetEmail(user, password, db_index)).Methods("GET")
}

func GetEmail(user string, password string, db_index string) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {

		response, err := models.GetEmailResponse(user, password, db_index, r)
		if err != nil {
			http.Error(w, err.Error(), http.StatusBadRequest)
		}
		println(response.Response)

		json.NewEncoder(w).Encode(response.Response)
	}

}
