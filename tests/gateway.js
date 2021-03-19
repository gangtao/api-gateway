import http from "k6/http";
import { check, group, sleep } from "k6";
import { Rate } from "k6/metrics";

// A custom metric to track failure rates
var failureRate = new Rate("check_failure_rate");

export default function() {
    const routes = ["goapi","nodeapi","flaskapi","springapi"];
    const port = "8080"
    let params = {
        headers: { 'accept': 'application/json' },
    };

    routes.forEach( route=> {
        let response = http.get(`http://localhost:${port}/${route}/v1/pets`, params);
        let checkRes = check(response, {
            "status is 200": (r) => r.status === 200,
        })
        failureRate.add(!checkRes);
    })
};