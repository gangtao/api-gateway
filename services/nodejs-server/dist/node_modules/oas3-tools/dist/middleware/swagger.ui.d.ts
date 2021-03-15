import { SwaggerUiOptions } from './swagger.ui.options';
export declare class SwaggerUI {
    private readonly definition;
    private readonly options;
    private apiDocsCache;
    private apiDocsPaths;
    constructor(definition: any, options: SwaggerUiOptions);
    serveStaticContent(): (req: any, res: any, next: any) => any;
    private configurePaths;
    private getDefaultOptions;
}
