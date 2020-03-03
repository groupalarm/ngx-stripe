/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/document-ref.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
var DocumentRef = /** @class */ (function () {
    function DocumentRef(platformId) {
        this.platformId = platformId;
    }
    /**
     * @return {?}
     */
    DocumentRef.prototype.getNativeDocument = /**
     * @return {?}
     */
    function () {
        if (isPlatformBrowser(this.platformId)) {
            return document;
        }
        return (/** @type {?} */ ({}));
    };
    DocumentRef.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DocumentRef.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    return DocumentRef;
}());
export { DocumentRef };
if (false) {
    /** @type {?} */
    DocumentRef.prototype.platformId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jdW1lbnQtcmVmLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtc3RyaXBlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2RvY3VtZW50LXJlZi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXBEO0lBRUUscUJBQXdDLFVBQWU7UUFBZixlQUFVLEdBQVYsVUFBVSxDQUFLO0lBQUcsQ0FBQzs7OztJQUVwRCx1Q0FBaUI7OztJQUF4QjtRQUNFLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3RDLE9BQU8sUUFBUSxDQUFDO1NBQ2pCO1FBQ0QsT0FBTyxtQkFBQSxFQUFFLEVBQVksQ0FBQztJQUN4QixDQUFDOztnQkFURixVQUFVOzs7O2dEQUVJLE1BQU0sU0FBQyxXQUFXOztJQVFqQyxrQkFBQztDQUFBLEFBVkQsSUFVQztTQVRZLFdBQVc7OztJQUNWLGlDQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERvY3VtZW50UmVmIHtcbiAgY29uc3RydWN0b3IoQEluamVjdChQTEFURk9STV9JRCkgcHVibGljIHBsYXRmb3JtSWQ6IGFueSkge31cblxuICBwdWJsaWMgZ2V0TmF0aXZlRG9jdW1lbnQoKTogRG9jdW1lbnQge1xuICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQ7XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBEb2N1bWVudDtcbiAgfVxufVxuIl19