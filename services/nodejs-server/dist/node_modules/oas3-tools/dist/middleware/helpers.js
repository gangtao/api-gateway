/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2014 Apigee Corporation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeDashElementToCamelCase = exports.debugError = void 0;
const lodash_1 = require("lodash");
function debugError(err, debug) {
    var reason = err.message.replace(/^.*validation failed: /, '');
    reason = reason.charAt(0).toUpperCase() + reason.substring(1);
    debug('  Reason: %s', reason);
    if (err.failedValidation === true) {
        if (err.results) {
            debug('  Errors:');
            lodash_1.each(err.results.errors, function (error, index) {
                debug('    %d:', index);
                debug('      code: %s', error.code);
                debug('      message: %s', error.message);
                debug('      path: %s', JSON.stringify(error.path));
            });
        }
    }
    if (err.stack) {
        debug('  Stack:');
        lodash_1.each(err.stack.split('\n'), function (line, index) {
            // Skip the first line since it's in the reasonx
            if (index > 0) {
                debug('  %s', line);
            }
        });
    }
}
exports.debugError = debugError;
;
function removeDashElementToCamelCase(str) {
    const pieces = lodash_1.split(str, '-');
    if (pieces.length <= 1) {
        return str;
    }
    let result = pieces[0];
    for (let index = 1; index < pieces.length; index++) {
        result += lodash_1.capitalize(pieces[index]);
    }
    return result;
}
exports.removeDashElementToCamelCase = removeDashElementToCamelCase;
//# sourceMappingURL=helpers.js.map