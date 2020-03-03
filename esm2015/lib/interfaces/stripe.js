/**
 * @fileoverview added by tsickle
 * Generated from: lib/interfaces/stripe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InjectionToken } from '@angular/core';
/** @type {?} */
export const STRIPE_PUBLISHABLE_KEY = new InjectionToken('Stripe Publishable Key');
/** @type {?} */
export const STRIPE_OPTIONS = new InjectionToken('Stripe Options');
/**
 * @record
 */
export function StripeJS() { }
if (false) {
    /**
     * @param {?=} options
     * @return {?}
     */
    StripeJS.prototype.elements = function (options) { };
    /**
     * @param {?} el
     * @param {?=} cardData
     * @return {?}
     */
    StripeJS.prototype.createToken = function (el, cardData) { };
    /**
     * @param {?} account
     * @param {?} accountData
     * @return {?}
     */
    StripeJS.prototype.createToken = function (account, accountData) { };
    /**
     * @param {?} account
     * @param {?} bankAccountData
     * @return {?}
     */
    StripeJS.prototype.createToken = function (account, bankAccountData) { };
    /**
     * @param {?} pii
     * @param {?} piiData
     * @return {?}
     */
    StripeJS.prototype.createToken = function (pii, piiData) { };
    /**
     * @param {?} el
     * @param {?=} sourceData
     * @return {?}
     */
    StripeJS.prototype.createSource = function (el, sourceData) { };
    /**
     * @param {?} sourceData
     * @return {?}
     */
    StripeJS.prototype.createSource = function (sourceData) { };
    /**
     * @param {?} source
     * @return {?}
     */
    StripeJS.prototype.retrieveSource = function (source) { };
    /**
     * @param {?} options
     * @return {?}
     */
    StripeJS.prototype.paymentRequest = function (options) { };
    /**
     * @param {?} clientSecret
     * @param {?} cardElement
     * @param {?=} data
     * @return {?}
     */
    StripeJS.prototype.handleCardPayment = function (clientSecret, cardElement, data) { };
    /**
     * @param {?} clientSecret
     * @param {?=} data
     * @return {?}
     */
    StripeJS.prototype.handleCardPayment = function (clientSecret, data) { };
    /**
     * @param {?} clientSecret
     * @return {?}
     */
    StripeJS.prototype.handleCardAction = function (clientSecret) { };
    /**
     * @param {?} clientSecret
     * @param {?=} data
     * @return {?}
     */
    StripeJS.prototype.confirmPaymentIntent = function (clientSecret, data) { };
    /**
     * @param {?} type
     * @param {?} cardElement
     * @param {?=} data
     * @return {?}
     */
    StripeJS.prototype.createPaymentMethod = function (type, cardElement, data) { };
    /**
     * @param {?} clientSecret
     * @param {?} element
     * @param {?=} data
     * @return {?}
     */
    StripeJS.prototype.handleCardSetup = function (clientSecret, element, data) { };
    /**
     * @param {?} clientSecret
     * @param {?=} data
     * @return {?}
     */
    StripeJS.prototype.handleCardSetup = function (clientSecret, data) { };
}
/**
 * @record
 */
export function Options() { }
if (false) {
    /** @type {?|undefined} */
    Options.prototype.stripeAccount;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXN0cmlwZS8iLCJzb3VyY2VzIjpbImxpYi9pbnRlcmZhY2VzL3N0cmlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBeUIvQyxNQUFNLE9BQU8sc0JBQXNCLEdBQUcsSUFBSSxjQUFjLENBQ3RELHdCQUF3QixDQUN6Qjs7QUFDRCxNQUFNLE9BQU8sY0FBYyxHQUFHLElBQUksY0FBYyxDQUFVLGdCQUFnQixDQUFDOzs7O0FBRTNFLDhCQXlDQzs7Ozs7O0lBeENDLHFEQUE4Qzs7Ozs7O0lBQzlDLDZEQUEyRTs7Ozs7O0lBQzNFLHFFQUE4RTs7Ozs7O0lBQzlFLHlFQUd3Qjs7Ozs7O0lBQ3hCLDZEQUE4RDs7Ozs7O0lBQzlELGdFQUEwRTs7Ozs7SUFDMUUsNERBQTREOzs7OztJQUM1RCwwREFBNEQ7Ozs7O0lBQzVELDJEQUFvRDs7Ozs7OztJQUNwRCxzRkFJZ0M7Ozs7OztJQUNoQyx5RUFHZ0M7Ozs7O0lBQ2hDLGtFQUFxRTs7Ozs7O0lBQ3JFLDRFQUdnQzs7Ozs7OztJQUNoQyxnRkFJZ0M7Ozs7Ozs7SUFDaEMsZ0ZBSTRCOzs7Ozs7SUFDNUIsdUVBRzRCOzs7OztBQUc5Qiw2QkFFQzs7O0lBREMsZ0NBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRWxlbWVudHMsIEVsZW1lbnRzT3B0aW9ucyB9IGZyb20gJy4vZWxlbWVudHMnO1xuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gJy4vZWxlbWVudCc7XG5pbXBvcnQge1xuICBBY2NvdW50LFxuICBBY2NvdW50RGF0YSxcbiAgQmFua0FjY291bnQsXG4gIEJhbmtBY2NvdW50RGF0YSxcbiAgQ2FyZERhdGFPcHRpb25zLFxuICBQaWksXG4gIFBpaURhdGEsXG4gIFRva2VuUmVzdWx0XG59IGZyb20gJy4vdG9rZW4nO1xuaW1wb3J0IHsgU291cmNlRGF0YSwgU291cmNlUGFyYW1zLCBTb3VyY2VSZXN1bHQgfSBmcm9tICcuL3NvdXJjZXMnO1xuaW1wb3J0IHsgUGF5bWVudFJlcXVlc3RPcHRpb25zIH0gZnJvbSAnLi9wYXltZW50LXJlcXVlc3QnO1xuaW1wb3J0IHtcbiAgSGFuZGxlQ2FyZFBheW1lbnRPcHRpb25zLFxuICBQYXltZW50SW50ZW50UmVzdWx0LFxuICBDb25maXJtUGF5bWVudEludGVudE9wdGlvbnMsXG4gIFBheW1lbnRNZXRob2REYXRhLFxuICBQYXltZW50TWV0aG9kUmVzdWx0XG59IGZyb20gJy4vcGF5bWVudC1pbnRlbnQnO1xuaW1wb3J0IHsgQ2FyZFNldHVwUmVzdWx0IH0gZnJvbSAnLi9jYXJkLXNldHVwJztcblxuZXhwb3J0IGNvbnN0IFNUUklQRV9QVUJMSVNIQUJMRV9LRVkgPSBuZXcgSW5qZWN0aW9uVG9rZW48c3RyaW5nPihcbiAgJ1N0cmlwZSBQdWJsaXNoYWJsZSBLZXknXG4pO1xuZXhwb3J0IGNvbnN0IFNUUklQRV9PUFRJT05TID0gbmV3IEluamVjdGlvblRva2VuPE9wdGlvbnM+KCdTdHJpcGUgT3B0aW9ucycpO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0cmlwZUpTIHtcbiAgZWxlbWVudHMob3B0aW9ucz86IEVsZW1lbnRzT3B0aW9ucyk6IEVsZW1lbnRzO1xuICBjcmVhdGVUb2tlbihlbDogRWxlbWVudCwgY2FyZERhdGE/OiBDYXJkRGF0YU9wdGlvbnMpOiBQcm9taXNlPFRva2VuUmVzdWx0PjtcbiAgY3JlYXRlVG9rZW4oYWNjb3VudDogQWNjb3VudCwgYWNjb3VudERhdGE6IEFjY291bnREYXRhKTogUHJvbWlzZTxUb2tlblJlc3VsdD47XG4gIGNyZWF0ZVRva2VuKFxuICAgIGFjY291bnQ6IEJhbmtBY2NvdW50LFxuICAgIGJhbmtBY2NvdW50RGF0YTogQmFua0FjY291bnREYXRhXG4gICk6IFByb21pc2U8VG9rZW5SZXN1bHQ+O1xuICBjcmVhdGVUb2tlbihwaWk6IFBpaSwgcGlpRGF0YTogUGlpRGF0YSk6IFByb21pc2U8VG9rZW5SZXN1bHQ+O1xuICBjcmVhdGVTb3VyY2UoZWw6IEVsZW1lbnQsIHNvdXJjZURhdGE/OiBTb3VyY2VEYXRhKTogUHJvbWlzZTxTb3VyY2VSZXN1bHQ+O1xuICBjcmVhdGVTb3VyY2Uoc291cmNlRGF0YTogU291cmNlRGF0YSk6IFByb21pc2U8U291cmNlUmVzdWx0PjtcbiAgcmV0cmlldmVTb3VyY2Uoc291cmNlOiBTb3VyY2VQYXJhbXMpOiBQcm9taXNlPFNvdXJjZVJlc3VsdD47XG4gIHBheW1lbnRSZXF1ZXN0KG9wdGlvbnM6IFBheW1lbnRSZXF1ZXN0T3B0aW9ucyk6IGFueTtcbiAgaGFuZGxlQ2FyZFBheW1lbnQoXG4gICAgY2xpZW50U2VjcmV0OiBzdHJpbmcsXG4gICAgY2FyZEVsZW1lbnQ6IEVsZW1lbnQsXG4gICAgZGF0YT86IEhhbmRsZUNhcmRQYXltZW50T3B0aW9uc1xuICApOiBQcm9taXNlPFBheW1lbnRJbnRlbnRSZXN1bHQ+O1xuICBoYW5kbGVDYXJkUGF5bWVudChcbiAgICBjbGllbnRTZWNyZXQ6IHN0cmluZyxcbiAgICBkYXRhPzogSGFuZGxlQ2FyZFBheW1lbnRPcHRpb25zXG4gICk6IFByb21pc2U8UGF5bWVudEludGVudFJlc3VsdD47XG4gIGhhbmRsZUNhcmRBY3Rpb24oY2xpZW50U2VjcmV0OiBzdHJpbmcpOiBQcm9taXNlPFBheW1lbnRJbnRlbnRSZXN1bHQ+O1xuICBjb25maXJtUGF5bWVudEludGVudChcbiAgICBjbGllbnRTZWNyZXQ6IHN0cmluZyxcbiAgICBkYXRhPzogQ29uZmlybVBheW1lbnRJbnRlbnRPcHRpb25zXG4gICk6IFByb21pc2U8UGF5bWVudEludGVudFJlc3VsdD47XG4gIGNyZWF0ZVBheW1lbnRNZXRob2QoXG4gICAgdHlwZTogc3RyaW5nLFxuICAgIGNhcmRFbGVtZW50OiBFbGVtZW50LFxuICAgIGRhdGE/OiBQYXltZW50TWV0aG9kRGF0YVxuICApOiBQcm9taXNlPFBheW1lbnRNZXRob2RSZXN1bHQ+O1xuICBoYW5kbGVDYXJkU2V0dXAoXG4gICAgY2xpZW50U2VjcmV0OiBzdHJpbmcsXG4gICAgZWxlbWVudDogRWxlbWVudCxcbiAgICBkYXRhPzogUGF5bWVudE1ldGhvZERhdGFcbiAgKTogUHJvbWlzZTxDYXJkU2V0dXBSZXN1bHQ+O1xuICBoYW5kbGVDYXJkU2V0dXAoXG4gICAgY2xpZW50U2VjcmV0OiBzdHJpbmcsXG4gICAgZGF0YT86IHN0cmluZyB8IFBheW1lbnRNZXRob2REYXRhXG4gICk6IFByb21pc2U8Q2FyZFNldHVwUmVzdWx0Pjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBPcHRpb25zIHtcbiAgc3RyaXBlQWNjb3VudD86IHN0cmluZztcbn1cbiJdfQ==