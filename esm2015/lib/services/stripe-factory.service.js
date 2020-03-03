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
export class StripeFactoryService {
    /**
     * @param {?} baseKey
     * @param {?} baseOptions
     * @param {?} loader
     * @param {?} window
     */
    constructor(baseKey, baseOptions, loader, window) {
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
    create(key, options) {
        return new StripeInstance(this.loader, this.window, key, options);
    }
}
StripeFactoryService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StripeFactoryService.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [STRIPE_PUBLISHABLE_KEY,] }] },
    { type: String, decorators: [{ type: Inject, args: [STRIPE_OPTIONS,] }] },
    { type: LazyStripeAPILoader },
    { type: WindowRef }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaXBlLWZhY3Rvcnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1zdHJpcGUvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvc3RyaXBlLWZhY3Rvcnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5ELE9BQU8sRUFFTCxjQUFjLEVBQ2Qsc0JBQXNCLEVBQ3ZCLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0QsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUd6RCxNQUFNLE9BQU8sb0JBQW9COzs7Ozs7O0lBQy9CLFlBQ3lDLE9BQWUsRUFDdkIsV0FBbUIsRUFDM0MsTUFBMkIsRUFDM0IsTUFBaUI7UUFIZSxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ3ZCLGdCQUFXLEdBQVgsV0FBVyxDQUFRO1FBQzNDLFdBQU0sR0FBTixNQUFNLENBQXFCO1FBQzNCLFdBQU0sR0FBTixNQUFNLENBQVc7SUFDdkIsQ0FBQzs7Ozs7O0lBRUcsTUFBTSxDQUFDLEdBQVcsRUFBRSxPQUFpQjtRQUMxQyxPQUFPLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDcEUsQ0FBQzs7O1lBWEYsVUFBVTs7Ozt5Q0FHTixNQUFNLFNBQUMsc0JBQXNCO3lDQUM3QixNQUFNLFNBQUMsY0FBYztZQVJqQixtQkFBbUI7WUFDbkIsU0FBUzs7OztJQU1kLHVDQUFzRDs7SUFDdEQsMkNBQWtEOztJQUNsRCxzQ0FBa0M7O0lBQ2xDLHNDQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICBPcHRpb25zLFxuICBTVFJJUEVfT1BUSU9OUyxcbiAgU1RSSVBFX1BVQkxJU0hBQkxFX0tFWVxufSBmcm9tICcuLi9pbnRlcmZhY2VzL3N0cmlwZSc7XG5pbXBvcnQgeyBMYXp5U3RyaXBlQVBJTG9hZGVyIH0gZnJvbSAnLi9hcGktbG9hZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgV2luZG93UmVmIH0gZnJvbSAnLi93aW5kb3ctcmVmLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RyaXBlSW5zdGFuY2UgfSBmcm9tICcuL3N0cmlwZS1pbnN0YW5jZS5jbGFzcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJpcGVGYWN0b3J5U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoU1RSSVBFX1BVQkxJU0hBQkxFX0tFWSkgcHVibGljIGJhc2VLZXk6IHN0cmluZyxcbiAgICBASW5qZWN0KFNUUklQRV9PUFRJT05TKSBwdWJsaWMgYmFzZU9wdGlvbnM6IHN0cmluZyxcbiAgICBwdWJsaWMgbG9hZGVyOiBMYXp5U3RyaXBlQVBJTG9hZGVyLFxuICAgIHB1YmxpYyB3aW5kb3c6IFdpbmRvd1JlZlxuICApIHt9XG5cbiAgcHVibGljIGNyZWF0ZShrZXk6IHN0cmluZywgb3B0aW9ucz86IE9wdGlvbnMpOiBTdHJpcGVJbnN0YW5jZSB7XG4gICAgcmV0dXJuIG5ldyBTdHJpcGVJbnN0YW5jZSh0aGlzLmxvYWRlciwgdGhpcy53aW5kb3csIGtleSwgb3B0aW9ucyk7XG4gIH1cbn1cbiJdfQ==