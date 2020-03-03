/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/api-loader.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { WindowRef } from './window-ref.service';
import { DocumentRef } from './document-ref.service';
/**
 * @record
 */
export function Status() { }
if (false) {
    /** @type {?} */
    Status.prototype.loaded;
    /** @type {?} */
    Status.prototype.loading;
    /** @type {?} */
    Status.prototype.error;
}
var LazyStripeAPILoader = /** @class */ (function () {
    function LazyStripeAPILoader(platformId, window, document) {
        this.platformId = platformId;
        this.window = window;
        this.document = document;
        this.status = new BehaviorSubject({
            error: false,
            loaded: false,
            loading: false
        });
    }
    /**
     * @return {?}
     */
    LazyStripeAPILoader.prototype.asStream = /**
     * @return {?}
     */
    function () {
        this.load();
        return this.status.asObservable();
    };
    /**
     * @return {?}
     */
    LazyStripeAPILoader.prototype.isReady = /**
     * @return {?}
     */
    function () {
        return this.status.getValue().loaded;
    };
    /**
     * @return {?}
     */
    LazyStripeAPILoader.prototype.load = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (isPlatformServer(this.platformId)) {
            return;
        }
        /** @type {?} */
        var status = this.status.getValue();
        if (this.window.getNativeWindow().hasOwnProperty('Stripe')) {
            this.status.next({
                error: false,
                loaded: true,
                loading: false
            });
        }
        else if (!status.loaded && !status.loading) {
            this.status.next(tslib_1.__assign({}, status, { loading: true }));
            /** @type {?} */
            var script = this.document.getNativeDocument().createElement('script');
            script.type = 'text/javascript';
            script.async = true;
            script.defer = true;
            script.src = 'https://js.stripe.com/v3/';
            script.onload = (/**
             * @return {?}
             */
            function () {
                _this.status.next({
                    error: false,
                    loaded: true,
                    loading: false
                });
            });
            script.onerror = (/**
             * @return {?}
             */
            function () {
                _this.status.next({
                    error: true,
                    loaded: false,
                    loading: false
                });
            });
            this.document.getNativeDocument().body.appendChild(script);
        }
    };
    LazyStripeAPILoader.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LazyStripeAPILoader.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: WindowRef },
        { type: DocumentRef }
    ]; };
    return LazyStripeAPILoader;
}());
export { LazyStripeAPILoader };
if (false) {
    /** @type {?} */
    LazyStripeAPILoader.prototype.status;
    /** @type {?} */
    LazyStripeAPILoader.prototype.platformId;
    /** @type {?} */
    LazyStripeAPILoader.prototype.window;
    /** @type {?} */
    LazyStripeAPILoader.prototype.document;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLWxvYWRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXN0cmlwZS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9hcGktbG9hZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRW5ELE9BQU8sRUFBYyxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFbkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7OztBQUVyRCw0QkFJQzs7O0lBSEMsd0JBQWdCOztJQUNoQix5QkFBaUI7O0lBQ2pCLHVCQUFlOztBQUdqQjtJQVFFLDZCQUM4QixVQUFlLEVBQ3BDLE1BQWlCLEVBQ2pCLFFBQXFCO1FBRkEsZUFBVSxHQUFWLFVBQVUsQ0FBSztRQUNwQyxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ2pCLGFBQVEsR0FBUixRQUFRLENBQWE7UUFUdkIsV0FBTSxHQUE0QixJQUFJLGVBQWUsQ0FBUztZQUNuRSxLQUFLLEVBQUUsS0FBSztZQUNaLE1BQU0sRUFBRSxLQUFLO1lBQ2IsT0FBTyxFQUFFLEtBQUs7U0FDZixDQUFDLENBQUM7SUFNQSxDQUFDOzs7O0lBRUcsc0NBQVE7OztJQUFmO1FBQ0UsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ1osT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3BDLENBQUM7Ozs7SUFFTSxxQ0FBTzs7O0lBQWQ7UUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFFTSxrQ0FBSTs7O0lBQVg7UUFBQSxpQkF5Q0M7UUF4Q0MsSUFBSSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDckMsT0FBTztTQUNSOztZQUNLLE1BQU0sR0FBVyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtRQUM3QyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQzFELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUNmLEtBQUssRUFBRSxLQUFLO2dCQUNaLE1BQU0sRUFBRSxJQUFJO2dCQUNaLE9BQU8sRUFBRSxLQUFLO2FBQ2YsQ0FBQyxDQUFDO1NBQ0o7YUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7WUFDNUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLHNCQUNYLE1BQU0sSUFDVCxPQUFPLEVBQUUsSUFBSSxJQUNiLENBQUM7O2dCQUVHLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQztZQUN4RSxNQUFNLENBQUMsSUFBSSxHQUFHLGlCQUFpQixDQUFDO1lBQ2hDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLE1BQU0sQ0FBQyxHQUFHLEdBQUcsMkJBQTJCLENBQUM7WUFFekMsTUFBTSxDQUFDLE1BQU07OztZQUFHO2dCQUNkLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO29CQUNmLEtBQUssRUFBRSxLQUFLO29CQUNaLE1BQU0sRUFBRSxJQUFJO29CQUNaLE9BQU8sRUFBRSxLQUFLO2lCQUNmLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQSxDQUFDO1lBRUYsTUFBTSxDQUFDLE9BQU87OztZQUFHO2dCQUNmLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO29CQUNmLEtBQUssRUFBRSxJQUFJO29CQUNYLE1BQU0sRUFBRSxLQUFLO29CQUNiLE9BQU8sRUFBRSxLQUFLO2lCQUNmLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQSxDQUFDO1lBRUYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDNUQ7SUFDSCxDQUFDOztnQkFoRUYsVUFBVTs7OztnREFTTixNQUFNLFNBQUMsV0FBVztnQkFsQmQsU0FBUztnQkFDVCxXQUFXOztJQXlFcEIsMEJBQUM7Q0FBQSxBQWpFRCxJQWlFQztTQWhFWSxtQkFBbUI7OztJQUM5QixxQ0FJRzs7SUFHRCx5Q0FBMkM7O0lBQzNDLHFDQUF3Qjs7SUFDeEIsdUNBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybVNlcnZlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBXaW5kb3dSZWYgfSBmcm9tICcuL3dpbmRvdy1yZWYuc2VydmljZSc7XG5pbXBvcnQgeyBEb2N1bWVudFJlZiB9IGZyb20gJy4vZG9jdW1lbnQtcmVmLnNlcnZpY2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0YXR1cyB7XG4gIGxvYWRlZDogYm9vbGVhbjtcbiAgbG9hZGluZzogYm9vbGVhbjtcbiAgZXJyb3I6IGJvb2xlYW47XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMYXp5U3RyaXBlQVBJTG9hZGVyIHtcbiAgcHVibGljIHN0YXR1czogQmVoYXZpb3JTdWJqZWN0PFN0YXR1cz4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFN0YXR1cz4oe1xuICAgIGVycm9yOiBmYWxzZSxcbiAgICBsb2FkZWQ6IGZhbHNlLFxuICAgIGxvYWRpbmc6IGZhbHNlXG4gIH0pO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHB1YmxpYyBwbGF0Zm9ybUlkOiBhbnksXG4gICAgcHVibGljIHdpbmRvdzogV2luZG93UmVmLFxuICAgIHB1YmxpYyBkb2N1bWVudDogRG9jdW1lbnRSZWZcbiAgKSB7fVxuXG4gIHB1YmxpYyBhc1N0cmVhbSgpOiBPYnNlcnZhYmxlPFN0YXR1cz4ge1xuICAgIHRoaXMubG9hZCgpO1xuICAgIHJldHVybiB0aGlzLnN0YXR1cy5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIHB1YmxpYyBpc1JlYWR5KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnN0YXR1cy5nZXRWYWx1ZSgpLmxvYWRlZDtcbiAgfVxuXG4gIHB1YmxpYyBsb2FkKCkge1xuICAgIGlmIChpc1BsYXRmb3JtU2VydmVyKHRoaXMucGxhdGZvcm1JZCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc3RhdHVzOiBTdGF0dXMgPSB0aGlzLnN0YXR1cy5nZXRWYWx1ZSgpO1xuICAgIGlmICh0aGlzLndpbmRvdy5nZXROYXRpdmVXaW5kb3coKS5oYXNPd25Qcm9wZXJ0eSgnU3RyaXBlJykpIHtcbiAgICAgIHRoaXMuc3RhdHVzLm5leHQoe1xuICAgICAgICBlcnJvcjogZmFsc2UsXG4gICAgICAgIGxvYWRlZDogdHJ1ZSxcbiAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoIXN0YXR1cy5sb2FkZWQgJiYgIXN0YXR1cy5sb2FkaW5nKSB7XG4gICAgICB0aGlzLnN0YXR1cy5uZXh0KHtcbiAgICAgICAgLi4uc3RhdHVzLFxuICAgICAgICBsb2FkaW5nOiB0cnVlXG4gICAgICB9KTtcblxuICAgICAgY29uc3Qgc2NyaXB0ID0gdGhpcy5kb2N1bWVudC5nZXROYXRpdmVEb2N1bWVudCgpLmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgc2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiAgICAgIHNjcmlwdC5hc3luYyA9IHRydWU7XG4gICAgICBzY3JpcHQuZGVmZXIgPSB0cnVlO1xuICAgICAgc2NyaXB0LnNyYyA9ICdodHRwczovL2pzLnN0cmlwZS5jb20vdjMvJztcblxuICAgICAgc2NyaXB0Lm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zdGF0dXMubmV4dCh7XG4gICAgICAgICAgZXJyb3I6IGZhbHNlLFxuICAgICAgICAgIGxvYWRlZDogdHJ1ZSxcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIHNjcmlwdC5vbmVycm9yID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnN0YXR1cy5uZXh0KHtcbiAgICAgICAgICBlcnJvcjogdHJ1ZSxcbiAgICAgICAgICBsb2FkZWQ6IGZhbHNlLFxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgdGhpcy5kb2N1bWVudC5nZXROYXRpdmVEb2N1bWVudCgpLmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==