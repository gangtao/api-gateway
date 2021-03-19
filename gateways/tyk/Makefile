
addapi:
	curl -v -H "x-tyk-authorization: 352d20ee67be67f6340b4c0605b044b7" \
		-s \
		-H "Content-Type: application/json" \
		-X POST \
		-d '{
			"name": "Test API",
			"slug": "test-api",
			"api_id": "1",
			"org_id": "1",
			"auth": {
			"auth_header_name": "Authorization"
			},
			"definition": {
			"location": "header",
			"key": "x-api-version"
			},
			"version_data": {
			"not_versioned": true,
			"versions": {
				"Default": {
				"name": "Default",
				"use_extended_paths": true
				}
			}
			},
			"proxy": {
			"listen_path": "/test-api/",
			"target_url": "http://httpbin.org/",
			"strip_listen_path": true
			},
			"active": true
		}' http://localhost:8080/tyk/apis/ | python -mjson.tool