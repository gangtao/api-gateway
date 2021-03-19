
add:
	curl -i -X POST http://localhost:8001/services \
  		--data name=goapi \
  		--data url='http://goapi:8080'
	curl -i -X POST http://localhost:8001/services/goapi/routes \
		--data 'paths[]=/goapi' \
  		--data name=goapi
	curl -i -X POST http://localhost:8001/services \
  		--data name=nodeapi \
  		--data url='http://nodeapi:8080'
	curl -i -X POST http://localhost:8001/services/nodeapi/routes \
		--data 'paths[]=/nodeapi' \
  		--data name=nodeapi
	curl -i -X POST http://localhost:8001/services \
  		--data name=flaskapi \
  		--data url='http://flaskapi:8080'
	curl -i -X POST http://localhost:8001/services/flaskapi/routes \
		--data 'paths[]=/flaskapi' \
  		--data name=flaskapi
	curl -i -X POST http://localhost:8001/services \
  		--data name=springapi \
  		--data url='http://springapi:8080'
	curl -i -X POST http://localhost:8001/services/flaskapi/routes \
		--data 'paths[]=/springapi' \
  		--data name=springapi

list:
	curl -i http://localhost:8001/services/goapi
	curl -i -X GET http://localhost:8000/goapi/v1/pets
