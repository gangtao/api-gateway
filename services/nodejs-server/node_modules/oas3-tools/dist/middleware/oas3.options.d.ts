import { OpenApiValidatorOpts } from 'express-openapi-validator/dist/framework/types';
import { LoggingOptions } from './logging.options';
import { SwaggerUiOptions } from './swagger.ui.options';
export declare class Oas3AppOptions {
    routing: any;
    openApiValidator: OpenApiValidatorOpts;
    logging: LoggingOptions;
    swaggerUI: SwaggerUiOptions;
    constructor(routingOpts: any, openApiValidatorOpts: OpenApiValidatorOpts, logging: LoggingOptions, swaggerUI: SwaggerUiOptions);
}
