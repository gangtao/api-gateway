'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwaggerParameters = void 0;
const lodash_1 = require("lodash");
class SwaggerParameters {
    checkParameters() {
        const concatArrays = (array, arrayToAttach) => {
            if (lodash_1.isEmpty(arrayToAttach)) {
                return array;
            }
            return array.concat(arrayToAttach);
        };
        return (req, res, next) => {
            if (!req.openapi || !req.openapi.schema) {
                next();
                return;
            }
            let swaggerParameters = Array();
            const queryParams = Array();
            const headerParams = Array();
            const cookieParams = Array();
            const pathParams = Array();
            swaggerParameters.push(req);
            swaggerParameters.push(res);
            swaggerParameters.push(next);
            if (!lodash_1.isEmpty(req.body)) {
                swaggerParameters.push(req.body);
            }
            if (!lodash_1.isEmpty(req.openapi.pathParams)) {
                Object.keys(req.openapi.pathParams).forEach(function (key) {
                    pathParams.push(req.openapi.pathParams[key]);
                });
            }
            const parameters = req.openapi.schema.parameters || [];
            for (let i = 0; i < parameters.length; i++) {
                const parameter = parameters[i];
                if (parameter.in === 'query') {
                    queryParams.push(req.query[parameter.name]);
                }
                else if (parameter.in === 'cookie') {
                    cookieParams.push(req.cookies[parameter.name]);
                }
                else if (parameter.in === 'header') {
                    headerParams.push(req.headers[parameter.name]);
                }
            }
            swaggerParameters = concatArrays(swaggerParameters, queryParams);
            swaggerParameters = concatArrays(swaggerParameters, pathParams);
            swaggerParameters = concatArrays(swaggerParameters, headerParams);
            swaggerParameters = concatArrays(swaggerParameters, cookieParams);
            req.openapi.swaggerParameters = swaggerParameters;
            next();
        };
    }
}
exports.SwaggerParameters = SwaggerParameters;
//# sourceMappingURL=swagger.parameters.js.map