"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwaggerUiOptions = void 0;
class SwaggerUiOptions {
    constructor(apiDocsPath, swaggerUIPath, swaggerUiDir) {
        this.apiDocsPath = apiDocsPath;
        this.swaggerUIPath = swaggerUIPath;
        this.swaggerUiDir = swaggerUiDir;
        this.sanitize();
    }
    sanitize() {
        if (this.apiDocsPath.charAt(this.apiDocsPath.length - 1) === '/') {
            this.apiDocsPath = this.apiDocsPath.substring(0, this.apiDocsPath.length - 1);
        }
        if (this.swaggerUIPath.charAt(this.swaggerUIPath.length - 1) === '/') {
            this.swaggerUIPath = this.swaggerUIPath.substring(0, this.swaggerUIPath.length - 1);
        }
    }
}
exports.SwaggerUiOptions = SwaggerUiOptions;
//# sourceMappingURL=swagger.ui.options.js.map