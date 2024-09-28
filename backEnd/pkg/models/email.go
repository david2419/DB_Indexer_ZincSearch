package models

import (
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"
	"strings"

	"github.com/gorilla/mux"
)

type jsonResponse struct {
	Response map[string]interface{}
}

func GetEmailResponse(user string, password string, db_index string, r *http.Request) (*jsonResponse, error) {

	params := mux.Vars(r)
	value := params["search"]

	query := fmt.Sprintf(`{
			"search_type": "match",
			"query": {
				"term": "%s"
			},
			"from": 0,
			"max_results": 20,
			"_source": []
		}`, value)

	//api de zincsearch
	url := fmt.Sprintf("http://localhost:4080/api/%v/_search", db_index)

	req, err := http.NewRequest("POST", url, strings.NewReader(query))
	if err != nil {
		log.Fatal(err)
	}

	req.SetBasicAuth(user, password)
	req.Header.Set("Content-Type", "application/json")

	resp, err := http.DefaultClient.Do(req)
	if err != nil {
		log.Fatal(err)
	}
	defer resp.Body.Close()
	log.Println(resp.StatusCode)
	body, err := io.ReadAll(resp.Body)
	if err != nil {
		return nil, fmt.Errorf("error linea 52: %v", err)
	}
	fmt.Println(string(body))

	var response jsonResponse
	err = json.Unmarshal(body, &response.Response) // Deserializa el JSON recibido
	if err != nil {
		return nil, fmt.Errorf("error haciendo unmarshall: %v", err)
	}

	return &response, nil
}
