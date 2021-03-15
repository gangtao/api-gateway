'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwaggerRouter = void 0;
const lodash_1 = require("lodash");
const fs = require("fs");
const helpers_1 = require("./helpers");
const path = require("path");
const debug_1 = require("debug");
const debug = debug_1.default("oas3-tools:routing");
class SwaggerRouter {
    handlerCacheFromDir(dirOrDirs) {
        const handlerCache = {};
        const jsFileRegex = /\.(coffee|js|ts)$/;
        var dirs = new Array();
        if (lodash_1.isArray(dirOrDirs)) {
            dirs = dirOrDirs;
        }
        else {
            dirs.push(dirOrDirs);
        }
        debug('  Controllers:');
        lodash_1.each(dirs, function (dir) {
            lodash_1.each(fs.readdirSync(dir), function (file) {
                const controllerName = file.replace(jsFileRegex, '');
                let controller;
                if (file.match(jsFileRegex) && file.indexOf(".test.js") === -1) {
                    controller = require(path.resolve(path.join(dir, controllerName)));
                    debug('    %s%s:', path.resolve(path.join(dir, file)), (lodash_1.isPlainObject(controller) ? '' : ' (not an object, skipped)'));
                    if (lodash_1.isPlainObject(controller)) {
                        lodash_1.each(controller, function (value, name) {
                            let handlerId = controllerName + '_' + name;
                            debug('      %s%s', handlerId, (lodash_1.isFunction(value) ? '' : ' (not a function, skipped)'));
                            if (lodash_1.isFunction(value) && !handlerCache[handlerId]) {
                                handlerCache[handlerId] = value;
                            }
                        });
                    }
                }
            });
        });
        return handlerCache;
    }
    initialize(options) {
        var handlerCache = {};
        debug('Initializing swagger-router middleware');
        // Set the defaults
        options = lodash_1.defaults(options || {}, {
            controllers: {},
            useStubs: false // not for now.
        });
        console.log('  Mock mode: %s', options.useStubs === true ? 'enabled' : 'disabled');
        if (lodash_1.isPlainObject(options.controllers)) {
            // Create the handler cache from the passed in controllers object
            lodash_1.each(options.controllers, function (func, handlerName) {
                console.log('    %s', handlerName);
                if (!lodash_1.isFunction(func)) {
                    throw new Error('options.controllers values must be functions');
                }
            });
            handlerCache = options.controllers;
        }
        else {
            // Create the handler cache from the modules in the controllers directory
            handlerCache = this.handlerCacheFromDir(options.controllers);
        }
        const getHandlerName = (req) => {
            if (req.openapi.schema['x-swagger-router-controller']) {
                let operationId = req.openapi.schema.operationId ? req.openapi.schema.operationId : req.method.toLowerCase();
                operationId = helpers_1.removeDashElementToCamelCase(operationId);
                return req.openapi.schema['x-swagger-router-controller'] + '_' + operationId;
            }
            else {
                return helpers_1.removeDashElementToCamelCase(req.openapi.schema.operationId);
            }
        };
        const send405 = (req, res, next) => {
            let err = new Error('Route defined in OpenAPI specification (' + req.openapi.openApiRoute + ') but there is no defined on' + req.method.toUpperCase() + ' operation.');
            res.statusCode = 405;
            return next(err);
        };
        return (req, res, next) => {
            let operation = req.openapi ? req.openapi.schema.operationId : undefined;
            let handler;
            let handlerName;
            let rErr;
            debug('%s %s', req.method, req.url);
            debug('  Will process: %s', lodash_1.isUndefined(operation) ? 'no' : 'yes');
            if (operation) {
                handlerName = getHandlerName(req);
                handler = handlerCache[handlerName];
                debug('  Route handler: %s', handlerName);
                debug('    Missing: %s', lodash_1.isUndefined(handler) ? 'yes' : 'no');
                debug('    Ignored: %s', options.ignoreMissingHandlers === true ? 'yes' : 'no');
                if (lodash_1.isUndefined(handler)) {
                    return send405(req, res, next);
                }
                if (!lodash_1.isUndefined(handler)) {
                    try {
                        return handler.apply(this, req.openapi.swaggerParameters);
                    }
                    catch (err) {
                        rErr = err;
                        debug('Handler threw an unexpected error: %s\n%s', err.message, err.stack);
                    }
                }
                else if (options.ignoreMissingHandlers !== true) {
                    rErr = new Error('Cannot resolve the configured swagger-router handler: ' + handlerName);
                    res.statusCode = 500;
                }
            }
            else {
                debug('  No handler for method: %s', req.method);
                return send405(req, res, next);
            }
            if (rErr) {
                helpers_1.debugError(rErr, debug);
            }
            return next(rErr);
        };
    }
    ;
}
exports.SwaggerRouter = SwaggerRouter;
//# sourceMappingURL=swagger.router.js.map