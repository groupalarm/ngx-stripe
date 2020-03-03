/**
 * @fileoverview added by tsickle
 * Generated from: lib/interfaces/payment-intent.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function HandleCardPaymentOptions() { }
if (false) {
    /** @type {?|undefined} */
    HandleCardPaymentOptions.prototype.payment_method;
    /** @type {?|undefined} */
    HandleCardPaymentOptions.prototype.payment_method_data;
    /** @type {?|undefined} */
    HandleCardPaymentOptions.prototype.shipping;
    /** @type {?|undefined} */
    HandleCardPaymentOptions.prototype.receipt_email;
    /** @type {?|undefined} */
    HandleCardPaymentOptions.prototype.save_payment_method;
}
/**
 * @param {?} handleCardPaymentOptions
 * @return {?}
 */
export function isHandleCardPaymentOptions(handleCardPaymentOptions) {
    return 'type' in handleCardPaymentOptions;
}
/**
 * @record
 */
export function ConfirmPaymentIntentOptions() { }
if (false) {
    /** @type {?|undefined} */
    ConfirmPaymentIntentOptions.prototype.return_url;
    /** @type {?|undefined} */
    ConfirmPaymentIntentOptions.prototype.use_stripe_sdk;
    /** @type {?|undefined} */
    ConfirmPaymentIntentOptions.prototype.source;
}
/**
 * @record
 */
export function PaymentIntent() { }
if (false) {
    /** @type {?} */
    PaymentIntent.prototype.id;
    /** @type {?} */
    PaymentIntent.prototype.object;
    /** @type {?} */
    PaymentIntent.prototype.amount;
    /** @type {?} */
    PaymentIntent.prototype.amount_capturable;
    /** @type {?} */
    PaymentIntent.prototype.amount_received;
    /** @type {?} */
    PaymentIntent.prototype.application;
    /** @type {?} */
    PaymentIntent.prototype.application_fee_amount;
    /** @type {?} */
    PaymentIntent.prototype.canceled_at;
    /** @type {?} */
    PaymentIntent.prototype.cancellation_reason;
    /** @type {?} */
    PaymentIntent.prototype.capture_method;
    /** @type {?} */
    PaymentIntent.prototype.charges;
    /** @type {?} */
    PaymentIntent.prototype.client_secret;
    /** @type {?} */
    PaymentIntent.prototype.confirmation_method;
    /** @type {?} */
    PaymentIntent.prototype.created;
    /** @type {?} */
    PaymentIntent.prototype.currency;
    /** @type {?} */
    PaymentIntent.prototype.customer;
    /** @type {?} */
    PaymentIntent.prototype.description;
    /** @type {?} */
    PaymentIntent.prototype.last_payment_error;
    /** @type {?} */
    PaymentIntent.prototype.livemode;
    /** @type {?} */
    PaymentIntent.prototype.metadata;
    /** @type {?} */
    PaymentIntent.prototype.next_source_action;
    /** @type {?} */
    PaymentIntent.prototype.on_behalf_of;
    /** @type {?} */
    PaymentIntent.prototype.payment_method;
    /** @type {?} */
    PaymentIntent.prototype.payment_method_types;
    /** @type {?} */
    PaymentIntent.prototype.receipt_email;
    /** @type {?} */
    PaymentIntent.prototype.review;
    /** @type {?} */
    PaymentIntent.prototype.shipping;
    /** @type {?} */
    PaymentIntent.prototype.source;
    /** @type {?} */
    PaymentIntent.prototype.statement_descriptor;
    /** @type {?} */
    PaymentIntent.prototype.status;
    /** @type {?} */
    PaymentIntent.prototype.transfer_data;
    /** @type {?} */
    PaymentIntent.prototype.transfer_group;
}
/**
 * @record
 */
export function PaymentIntentResult() { }
if (false) {
    /** @type {?|undefined} */
    PaymentIntentResult.prototype.paymentIntent;
    /** @type {?|undefined} */
    PaymentIntentResult.prototype.error;
}
/**
 * @record
 */
export function PaymentMethodData() { }
if (false) {
    /** @type {?|undefined} */
    PaymentMethodData.prototype.type;
    /** @type {?|undefined} */
    PaymentMethodData.prototype.billing_details;
    /** @type {?|undefined} */
    PaymentMethodData.prototype.card;
    /** @type {?} */
    PaymentMethodData.prototype.metadata;
}
/**
 * @param {?} paymentMethodData
 * @return {?}
 */
export function isPaymentMethodData(paymentMethodData) {
    return paymentMethodData && 'type' in paymentMethodData;
}
/**
 * @record
 */
export function PaymentMethod() { }
if (false) {
    /** @type {?} */
    PaymentMethod.prototype.id;
    /** @type {?} */
    PaymentMethod.prototype.object;
    /** @type {?|undefined} */
    PaymentMethod.prototype.billing_details;
    /** @type {?} */
    PaymentMethod.prototype.card;
    /** @type {?} */
    PaymentMethod.prototype.created;
    /** @type {?} */
    PaymentMethod.prototype.customer;
    /** @type {?} */
    PaymentMethod.prototype.livemode;
    /** @type {?} */
    PaymentMethod.prototype.metadata;
    /** @type {?} */
    PaymentMethod.prototype.type;
}
/**
 * @record
 */
export function PaymentMethodResult() { }
if (false) {
    /** @type {?|undefined} */
    PaymentMethodResult.prototype.paymentMethod;
    /** @type {?|undefined} */
    PaymentMethodResult.prototype.error;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1pbnRlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtc3RyaXBlLyIsInNvdXJjZXMiOlsibGliL2ludGVyZmFjZXMvcGF5bWVudC1pbnRlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFQSw4Q0FtQkM7OztJQWxCQyxrREFBd0I7O0lBQ3hCLHVEQU9FOztJQUNGLDRDQU1FOztJQUNGLGlEQUF1Qjs7SUFDdkIsdURBQThCOzs7Ozs7QUFHaEMsTUFBTSxVQUFVLDBCQUEwQixDQUN4Qyx3QkFBNkI7SUFFN0IsT0FBTyxNQUFNLElBQUksd0JBQXdCLENBQUM7QUFDNUMsQ0FBQzs7OztBQUVELGlEQUlDOzs7SUFIQyxpREFBb0I7O0lBQ3BCLHFEQUF5Qjs7SUFDekIsNkNBQWdCOzs7OztBQUdsQixtQ0E2Q0M7OztJQTVDQywyQkFBVzs7SUFDWCwrQkFBZTs7SUFDZiwrQkFBZTs7SUFDZiwwQ0FBMEI7O0lBQzFCLHdDQUF3Qjs7SUFDeEIsb0NBQW9COztJQUNwQiwrQ0FBK0I7O0lBQy9CLG9DQUFrQjs7SUFDbEIsNENBQTRCOztJQUM1Qix1Q0FBdUI7O0lBQ3ZCLGdDQU1FOztJQUNGLHNDQUFzQjs7SUFDdEIsNENBQTRCOztJQUM1QixnQ0FBYzs7SUFDZCxpQ0FBaUI7O0lBQ2pCLGlDQUFpQjs7SUFDakIsb0NBQW9COztJQUNwQiwyQ0FBd0I7O0lBQ3hCLGlDQUFrQjs7SUFDbEIsaUNBQWlDOztJQUNqQywyQ0FBd0I7O0lBQ3hCLHFDQUFxQjs7SUFDckIsdUNBQXVCOztJQUN2Qiw2Q0FBK0I7O0lBQy9CLHNDQUFzQjs7SUFDdEIsK0JBQWU7O0lBQ2YsaUNBTUU7O0lBQ0YsK0JBQWU7O0lBQ2YsNkNBQTZCOztJQUM3QiwrQkFBZTs7SUFDZixzQ0FBbUI7O0lBQ25CLHVDQUF1Qjs7Ozs7QUFHekIseUNBR0M7OztJQUZDLDRDQUE4Qjs7SUFDOUIsb0NBQWM7Ozs7O0FBR2hCLHVDQWVDOzs7SUFkQyxpQ0FBYzs7SUFDZCw0Q0FLRTs7SUFDRixpQ0FLRTs7SUFDRixxQ0FBaUM7Ozs7OztBQUduQyxNQUFNLFVBQVUsbUJBQW1CLENBQ2pDLGlCQUFzQjtJQUV0QixPQUFPLGlCQUFpQixJQUFJLE1BQU0sSUFBSSxpQkFBaUIsQ0FBQztBQUMxRCxDQUFDOzs7O0FBRUQsbUNBaUNDOzs7SUFoQ0MsMkJBQVc7O0lBQ1gsK0JBQWU7O0lBQ2Ysd0NBS0U7O0lBQ0YsNkJBa0JFOztJQUNGLGdDQUFnQjs7SUFDaEIsaUNBQWlCOztJQUNqQixpQ0FBa0I7O0lBQ2xCLGlDQUFpQzs7SUFDakMsNkJBQWE7Ozs7O0FBR2YseUNBR0M7OztJQUZDLDRDQUE4Qjs7SUFDOUIsb0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFcnJvciwgQWRkcmVzcyB9IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEhhbmRsZUNhcmRQYXltZW50T3B0aW9ucyB7XG4gIHBheW1lbnRfbWV0aG9kPzogc3RyaW5nO1xuICBwYXltZW50X21ldGhvZF9kYXRhPzoge1xuICAgIGJpbGxpbmdfZGV0YWlscz86IHtcbiAgICAgIGFkZHJlc3M/OiBBZGRyZXNzO1xuICAgICAgZW1haWw/OiBzdHJpbmc7XG4gICAgICBuYW1lPzogc3RyaW5nO1xuICAgICAgcGhvbmU/OiBzdHJpbmc7XG4gICAgfTtcbiAgfTtcbiAgc2hpcHBpbmc/OiB7XG4gICAgYWRkcmVzczogQWRkcmVzcztcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgY2Fycmllcj86IHN0cmluZztcbiAgICBwaG9uZT86IHN0cmluZztcbiAgICB0cmFja2luZ19udW1iZXI/OiBzdHJpbmc7XG4gIH07XG4gIHJlY2VpcHRfZW1haWw/OiBzdHJpbmc7XG4gIHNhdmVfcGF5bWVudF9tZXRob2Q/OiBib29sZWFuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNIYW5kbGVDYXJkUGF5bWVudE9wdGlvbnMoXG4gIGhhbmRsZUNhcmRQYXltZW50T3B0aW9uczogYW55XG4pOiBoYW5kbGVDYXJkUGF5bWVudE9wdGlvbnMgaXMgSGFuZGxlQ2FyZFBheW1lbnRPcHRpb25zIHtcbiAgcmV0dXJuICd0eXBlJyBpbiBoYW5kbGVDYXJkUGF5bWVudE9wdGlvbnM7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlybVBheW1lbnRJbnRlbnRPcHRpb25zIGV4dGVuZHMgSGFuZGxlQ2FyZFBheW1lbnRPcHRpb25zIHtcbiAgcmV0dXJuX3VybD86IHN0cmluZztcbiAgdXNlX3N0cmlwZV9zZGs/OiBib29sZWFuO1xuICBzb3VyY2U/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGF5bWVudEludGVudCB7XG4gIGlkOiBzdHJpbmc7XG4gIG9iamVjdDogc3RyaW5nO1xuICBhbW91bnQ6IG51bWJlcjtcbiAgYW1vdW50X2NhcHR1cmFibGU6IG51bWJlcjtcbiAgYW1vdW50X3JlY2VpdmVkOiBudW1iZXI7XG4gIGFwcGxpY2F0aW9uOiBzdHJpbmc7XG4gIGFwcGxpY2F0aW9uX2ZlZV9hbW91bnQ6IG51bWJlcjtcbiAgY2FuY2VsZWRfYXQ6IERhdGU7XG4gIGNhbmNlbGxhdGlvbl9yZWFzb246IHN0cmluZztcbiAgY2FwdHVyZV9tZXRob2Q6IHN0cmluZztcbiAgY2hhcmdlczoge1xuICAgIG9iamVjdDogc3RyaW5nO1xuICAgIGRhdGE6IGFueVtdO1xuICAgIGhhc19tb3JlOiBib29sZWFuO1xuICAgIHRvdGFsX2NvdW50OiBudW1iZXI7XG4gICAgdXJsOiBzdHJpbmc7XG4gIH07XG4gIGNsaWVudF9zZWNyZXQ6IHN0cmluZztcbiAgY29uZmlybWF0aW9uX21ldGhvZDogc3RyaW5nO1xuICBjcmVhdGVkOiBEYXRlO1xuICBjdXJyZW5jeTogc3RyaW5nO1xuICBjdXN0b21lcjogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBsYXN0X3BheW1lbnRfZXJyb3I6IGFueTsgLy8gVG9kb1xuICBsaXZlbW9kZTogYm9vbGVhbjtcbiAgbWV0YWRhdGE6IHsgW2tleTogc3RyaW5nXTogYW55IH07XG4gIG5leHRfc291cmNlX2FjdGlvbjogYW55OyAvLyBUb2RvXG4gIG9uX2JlaGFsZl9vZjogc3RyaW5nO1xuICBwYXltZW50X21ldGhvZDogc3RyaW5nO1xuICBwYXltZW50X21ldGhvZF90eXBlczogc3RyaW5nW107XG4gIHJlY2VpcHRfZW1haWw6IHN0cmluZztcbiAgcmV2aWV3OiBzdHJpbmc7XG4gIHNoaXBwaW5nOiB7XG4gICAgYWRkcmVzczogQWRkcmVzcztcbiAgICBjYXJyaWVyOiBzdHJpbmc7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHBob25lOiBzdHJpbmc7XG4gICAgdHJhY2tpbmdfbnVtYmVyOiBzdHJpbmc7XG4gIH07XG4gIHNvdXJjZTogc3RyaW5nO1xuICBzdGF0ZW1lbnRfZGVzY3JpcHRvcjogc3RyaW5nO1xuICBzdGF0dXM6IHN0cmluZztcbiAgdHJhbnNmZXJfZGF0YTogYW55OyAvLyBUb2RvXG4gIHRyYW5zZmVyX2dyb3VwOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGF5bWVudEludGVudFJlc3VsdCB7XG4gIHBheW1lbnRJbnRlbnQ/OiBQYXltZW50SW50ZW50O1xuICBlcnJvcj86IEVycm9yO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBheW1lbnRNZXRob2REYXRhIHtcbiAgdHlwZT86IHN0cmluZztcbiAgYmlsbGluZ19kZXRhaWxzPzoge1xuICAgIGFkZHJlc3M/OiBBZGRyZXNzO1xuICAgIGVtYWlsPzogc3RyaW5nO1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgcGhvbmU/OiBzdHJpbmc7XG4gIH07XG4gIGNhcmQ/OiB7XG4gICAgZXhwX21vbnRoPzogbnVtYmVyO1xuICAgIGV4cF95ZWFyPzogbnVtYmVyO1xuICAgIG51bWJlcj86IHN0cmluZztcbiAgICBjdmM/OiBzdHJpbmc7XG4gIH07XG4gIG1ldGFkYXRhOiB7IFtrZXk6IHN0cmluZ106IGFueSB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQYXltZW50TWV0aG9kRGF0YShcbiAgcGF5bWVudE1ldGhvZERhdGE6IGFueVxuKTogcGF5bWVudE1ldGhvZERhdGEgaXMgUGF5bWVudE1ldGhvZERhdGEge1xuICByZXR1cm4gcGF5bWVudE1ldGhvZERhdGEgJiYgJ3R5cGUnIGluIHBheW1lbnRNZXRob2REYXRhO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBheW1lbnRNZXRob2Qge1xuICBpZDogc3RyaW5nO1xuICBvYmplY3Q6IHN0cmluZztcbiAgYmlsbGluZ19kZXRhaWxzPzoge1xuICAgIGFkZHJlc3M/OiBBZGRyZXNzO1xuICAgIGVtYWlsPzogc3RyaW5nO1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgcGhvbmU/OiBzdHJpbmc7XG4gIH07XG4gIGNhcmQ6IHtcbiAgICBicmFuZDogc3RyaW5nO1xuICAgIGNoZWNrczoge1xuICAgICAgYWRkcmVzc19saW5lMV9jaGVjazogc3RyaW5nO1xuICAgICAgYWRkcmVzc19wb3N0YWxfY29kZV9jaGVjazogc3RyaW5nO1xuICAgICAgY3ZjX2NoZWNrOiBzdHJpbmc7XG4gICAgfTtcbiAgICBjb3VudHJ5OiBzdHJpbmc7XG4gICAgZXhwX21vbnRoOiBudW1iZXI7XG4gICAgZXhwX3llYXI6IG51bWJlcjtcbiAgICBmaW5nZXJwcmludDogc3RyaW5nO1xuICAgIGZ1bmRpbmc6IHN0cmluZztcbiAgICBnZW5lcmF0ZWRfZnJvbTogc3RyaW5nO1xuICAgIGxhc3Q0OiBzdHJpbmc7XG4gICAgdGhyZWVfZF9zZWN1cmVfdXNhZ2U6IHtcbiAgICAgIHN1cHBvcnRlZDogYm9vbGVhbjtcbiAgICB9O1xuICAgIHdhbGxldDogc3RyaW5nO1xuICB9O1xuICBjcmVhdGVkOiBudW1iZXI7XG4gIGN1c3RvbWVyOiBzdHJpbmc7XG4gIGxpdmVtb2RlOiBib29sZWFuO1xuICBtZXRhZGF0YTogeyBba2V5OiBzdHJpbmddOiBhbnkgfTtcbiAgdHlwZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBheW1lbnRNZXRob2RSZXN1bHQge1xuICBwYXltZW50TWV0aG9kPzogUGF5bWVudE1ldGhvZDtcbiAgZXJyb3I/OiBFcnJvcjtcbn1cbiJdfQ==