add:
	curl --location --request PUT 'http://127.0.0.1:8080/apisix/admin/routes/1' \
		--header 'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1' \
		--header 'Content-Type: text/plain' \
		-d @goapi.json
	curl --location --request PUT 'http://127.0.0.1:8080/apisix/admin/routes/2' \
		--header 'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1' \
		--header 'Content-Type: text/plain' \
		-d @nodeapi.json
	curl --location --request PUT 'http://127.0.0.1:8080/apisix/admin/routes/3' \
		--header 'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1' \
		--header 'Content-Type: text/plain' \
		-d @flaskapi.json
	curl --location --request PUT 'http://127.0.0.1:8080/apisix/admin/routes/4' \
		--header 'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1' \
		--header 'Content-Type: text/plain' \
		-d @springapi.json