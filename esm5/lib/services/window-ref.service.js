/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/window-ref.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
var WindowRef = /** @class */ (function () {
    function WindowRef(platformId) {
        this.platformId = platformId;
    }
    /**
     * @return {?}
     */
    WindowRef.prototype.getNativeWindow = /**
     * @return {?}
     */
    function () {
        if (isPlatformBrowser(this.platformId)) {
            return window;
        }
        return (/** @type {?} */ ({}));
    };
    WindowRef.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    WindowRef.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    return WindowRef;
}());
export { WindowRef };
if (false) {
    /** @type {?} */
    WindowRef.prototype.platformId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2luZG93LXJlZi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXN0cmlwZS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy93aW5kb3ctcmVmLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFcEQ7SUFFRSxtQkFBd0MsVUFBZTtRQUFmLGVBQVUsR0FBVixVQUFVLENBQUs7SUFBRyxDQUFDOzs7O0lBRXBELG1DQUFlOzs7SUFBdEI7UUFDRSxJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN0QyxPQUFPLE1BQU0sQ0FBQztTQUNmO1FBQ0QsT0FBTyxtQkFBQSxFQUFFLEVBQVUsQ0FBQztJQUN0QixDQUFDOztnQkFURixVQUFVOzs7O2dEQUVJLE1BQU0sU0FBQyxXQUFXOztJQVFqQyxnQkFBQztDQUFBLEFBVkQsSUFVQztTQVRZLFNBQVM7OztJQUNSLCtCQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFdpbmRvd1JlZiB7XG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoUExBVEZPUk1fSUQpIHB1YmxpYyBwbGF0Zm9ybUlkOiBhbnkpIHt9XG5cbiAgcHVibGljIGdldE5hdGl2ZVdpbmRvdygpOiBXaW5kb3cge1xuICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICByZXR1cm4gd2luZG93O1xuICAgIH1cbiAgICByZXR1cm4ge30gYXMgV2luZG93O1xuICB9XG59XG4iXX0=