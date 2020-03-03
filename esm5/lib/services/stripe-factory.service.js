/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/stripe-factory.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable } from '@angular/core';
import { STRIPE_OPTIONS, STRIPE_PUBLISHABLE_KEY } from '../interfaces/stripe';
import { LazyStripeAPILoader } from './api-loader.service';
import { WindowRef } from './window-ref.service';
import { StripeInstance } from './stripe-instance.class';
var StripeFactoryService = /** @class */ (function () {
    function StripeFactoryService(baseKey, baseOptions, loader, window) {
        this.baseKey = baseKey;
        this.baseOptions = baseOptions;
        this.loader = loader;
        this.window = window;
    }
    /**
     * @param {?} key
     * @param {?=} options
     * @return {?}
     */
    StripeFactoryService.prototype.create = /**
     * @param {?} key
     * @param {?=} options
     * @return {?}
     */
    function (key, options) {
        return new StripeInstance(this.loader, this.window, key, options);
    };
    StripeFactoryService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StripeFactoryService.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [STRIPE_PUBLISHABLE_KEY,] }] },
        { type: String, decorators: [{ type: Inject, args: [STRIPE_OPTIONS,] }] },
        { type: LazyStripeAPILoader },
        { type: WindowRef }
    ]; };
    return StripeFactoryService;
}());
export { StripeFactoryService };
if (false) {
    /** @type {?} */
    StripeFactoryService.prototype.baseKey;
    /** @type {?} */
    StripeFactoryService.prototype.baseOptions;
    /** @type {?} */
    StripeFactoryService.prototype.loader;
    /** @type {?} */
    StripeFactoryService.prototype.window;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaXBlLWZhY3Rvcnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1zdHJpcGUvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvc3RyaXBlLWZhY3Rvcnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5ELE9BQU8sRUFFTCxjQUFjLEVBQ2Qsc0JBQXNCLEVBQ3ZCLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0QsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV6RDtJQUVFLDhCQUN5QyxPQUFlLEVBQ3ZCLFdBQW1CLEVBQzNDLE1BQTJCLEVBQzNCLE1BQWlCO1FBSGUsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUN2QixnQkFBVyxHQUFYLFdBQVcsQ0FBUTtRQUMzQyxXQUFNLEdBQU4sTUFBTSxDQUFxQjtRQUMzQixXQUFNLEdBQU4sTUFBTSxDQUFXO0lBQ3ZCLENBQUM7Ozs7OztJQUVHLHFDQUFNOzs7OztJQUFiLFVBQWMsR0FBVyxFQUFFLE9BQWlCO1FBQzFDLE9BQU8sSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNwRSxDQUFDOztnQkFYRixVQUFVOzs7OzZDQUdOLE1BQU0sU0FBQyxzQkFBc0I7NkNBQzdCLE1BQU0sU0FBQyxjQUFjO2dCQVJqQixtQkFBbUI7Z0JBQ25CLFNBQVM7O0lBZWxCLDJCQUFDO0NBQUEsQUFaRCxJQVlDO1NBWFksb0JBQW9COzs7SUFFN0IsdUNBQXNEOztJQUN0RCwyQ0FBa0Q7O0lBQ2xELHNDQUFrQzs7SUFDbEMsc0NBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gIE9wdGlvbnMsXG4gIFNUUklQRV9PUFRJT05TLFxuICBTVFJJUEVfUFVCTElTSEFCTEVfS0VZXG59IGZyb20gJy4uL2ludGVyZmFjZXMvc3RyaXBlJztcbmltcG9ydCB7IExhenlTdHJpcGVBUElMb2FkZXIgfSBmcm9tICcuL2FwaS1sb2FkZXIuc2VydmljZSc7XG5pbXBvcnQgeyBXaW5kb3dSZWYgfSBmcm9tICcuL3dpbmRvdy1yZWYuc2VydmljZSc7XG5pbXBvcnQgeyBTdHJpcGVJbnN0YW5jZSB9IGZyb20gJy4vc3RyaXBlLWluc3RhbmNlLmNsYXNzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cmlwZUZhY3RvcnlTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChTVFJJUEVfUFVCTElTSEFCTEVfS0VZKSBwdWJsaWMgYmFzZUtleTogc3RyaW5nLFxuICAgIEBJbmplY3QoU1RSSVBFX09QVElPTlMpIHB1YmxpYyBiYXNlT3B0aW9uczogc3RyaW5nLFxuICAgIHB1YmxpYyBsb2FkZXI6IExhenlTdHJpcGVBUElMb2FkZXIsXG4gICAgcHVibGljIHdpbmRvdzogV2luZG93UmVmXG4gICkge31cblxuICBwdWJsaWMgY3JlYXRlKGtleTogc3RyaW5nLCBvcHRpb25zPzogT3B0aW9ucyk6IFN0cmlwZUluc3RhbmNlIHtcbiAgICByZXR1cm4gbmV3IFN0cmlwZUluc3RhbmNlKHRoaXMubG9hZGVyLCB0aGlzLndpbmRvdywga2V5LCBvcHRpb25zKTtcbiAgfVxufVxuIl19