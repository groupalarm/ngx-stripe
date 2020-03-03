/**
 * @fileoverview added by tsickle
 * Generated from: lib/interfaces/sources.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function Source() { }
if (false) {
    /** @type {?} */
    Source.prototype.id;
    /** @type {?} */
    Source.prototype.object;
    /** @type {?} */
    Source.prototype.amount;
    /** @type {?} */
    Source.prototype.client_secret;
    /** @type {?|undefined} */
    Source.prototype.code_verification;
    /** @type {?} */
    Source.prototype.created;
    /** @type {?} */
    Source.prototype.currency;
    /** @type {?} */
    Source.prototype.flow;
    /** @type {?} */
    Source.prototype.livemode;
    /** @type {?} */
    Source.prototype.metadata;
    /** @type {?} */
    Source.prototype.three_d_secure;
    /** @type {?} */
    Source.prototype.owner;
    /** @type {?} */
    Source.prototype.receiver;
    /** @type {?} */
    Source.prototype.status;
    /** @type {?} */
    Source.prototype.type;
    /** @type {?} */
    Source.prototype.usage;
}
/**
 * @record
 */
export function SourceParams() { }
if (false) {
    /** @type {?} */
    SourceParams.prototype.id;
    /** @type {?} */
    SourceParams.prototype.client_secret;
}
/**
 * @record
 */
export function SourceData() { }
if (false) {
    /** @type {?|undefined} */
    SourceData.prototype.type;
    /** @type {?|undefined} */
    SourceData.prototype.amount;
    /** @type {?|undefined} */
    SourceData.prototype.currency;
    /** @type {?|undefined} */
    SourceData.prototype.flow;
    /** @type {?|undefined} */
    SourceData.prototype.metadata;
    /** @type {?|undefined} */
    SourceData.prototype.three_d_secure;
    /** @type {?|undefined} */
    SourceData.prototype.owner;
    /** @type {?|undefined} */
    SourceData.prototype.redirect;
    /** @type {?|undefined} */
    SourceData.prototype.token;
    /** @type {?|undefined} */
    SourceData.prototype.usage;
}
/**
 * @param {?} sourceData
 * @return {?}
 */
export function isSourceData(sourceData) {
    return 'type' in sourceData;
}
/**
 * @record
 */
export function SourceResult() { }
if (false) {
    /** @type {?|undefined} */
    SourceResult.prototype.source;
    /** @type {?|undefined} */
    SourceResult.prototype.error;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1zdHJpcGUvIiwic291cmNlcyI6WyJsaWIvaW50ZXJmYWNlcy9zb3VyY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUEsNEJBZ0RDOzs7SUEvQ0Msb0JBQVc7O0lBQ1gsd0JBQWlCOztJQUNqQix3QkFBZTs7SUFDZiwrQkFBc0I7O0lBQ3RCLG1DQUdFOztJQUNGLHlCQUFnQjs7SUFDaEIsMEJBQWlCOztJQUNqQixzQkFBZ0I7O0lBQ2hCLDBCQUFrQjs7SUFDbEIsMEJBQWlDOztJQUNqQyxnQ0FFRTs7SUFDRix1QkFTRTs7SUFDRiwwQkFVRTs7SUFDRix3QkFBc0U7O0lBQ3RFLHNCQU9pQjs7SUFDakIsdUJBQWtCOzs7OztBQU1wQixrQ0FHQzs7O0lBRkMsMEJBQVc7O0lBQ1gscUNBQXNCOzs7OztBQUd4QixnQ0FxQkM7OztJQXBCQywwQkFBYzs7SUFDZCw0QkFBZ0I7O0lBQ2hCLDhCQUFrQjs7SUFDbEIsMEJBQWlCOztJQUNqQiw4QkFBa0M7O0lBQ2xDLG9DQUVFOztJQUNGLDJCQUtFOztJQUNGLDhCQUdFOztJQUNGLDJCQUFlOztJQUNmLDJCQUFtQjs7Ozs7O0FBR3JCLE1BQU0sVUFBVSxZQUFZLENBQUMsVUFBZTtJQUMxQyxPQUFPLE1BQU0sSUFBSSxVQUFVLENBQUM7QUFDOUIsQ0FBQzs7OztBQUVELGtDQUdDOzs7SUFGQyw4QkFBZ0I7O0lBQ2hCLDZCQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWRkcmVzcywgRXJyb3IgfSBmcm9tICcuL3V0aWxzJztcblxuZXhwb3J0IGludGVyZmFjZSBTb3VyY2Uge1xuICBpZDogc3RyaW5nO1xuICBvYmplY3Q6ICdzb3VyY2UnO1xuICBhbW91bnQ6IG51bWJlcjtcbiAgY2xpZW50X3NlY3JldDogc3RyaW5nO1xuICBjb2RlX3ZlcmlmaWNhdGlvbj86IHtcbiAgICBhdHRlbXB0c19yZW1haW5pbmc6IG51bWJlcjtcbiAgICBzdGF0dXM6ICdwZW5kaW5nJyB8ICdzdWNjZWRlZCcgfCAnZmFpbGVkJztcbiAgfTtcbiAgY3JlYXRlZDogbnVtYmVyO1xuICBjdXJyZW5jeTogc3RyaW5nO1xuICBmbG93OiBGbG93VHlwZXM7XG4gIGxpdmVtb2RlOiBib29sZWFuO1xuICBtZXRhZGF0YTogeyBba2V5OiBzdHJpbmddOiBhbnkgfTtcbiAgdGhyZWVfZF9zZWN1cmU6IHtcbiAgICBjYXJkOiBzdHJpbmc7XG4gIH07XG4gIG93bmVyOiB7XG4gICAgYWRkcmVzczogQWRkcmVzcztcbiAgICBlbWFpbDogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBwaG9uZTogc3RyaW5nO1xuICAgIHZlcmlmaWVkX2FkZHJlc3M6IEFkZHJlc3M7XG4gICAgdmVyaWZpZWRfZW1haWw6IHN0cmluZztcbiAgICB2ZXJpZmllZF9uYW1lOiBzdHJpbmc7XG4gICAgdmVyaWZpZWRfcGhvbmU6IHN0cmluZztcbiAgfTtcbiAgcmVjZWl2ZXI6IHtcbiAgICBhZGRyZXNzOiBzdHJpbmc7XG4gICAgYW1vdW50X2NoYXJnZWQ6IG51bWJlcjtcbiAgICBhbW91bnRfcmVjZWl2ZWQ6IG51bWJlcjtcbiAgICBhbW91bnRfcmV0dXJuZWQ6IG51bWJlcjtcbiAgICByZWRpcmVjdD86IHtcbiAgICAgIHJldHVybl91cmw6IHN0cmluZztcbiAgICAgIHN0YXR1czogJ3BlbmRpbmcnIHwgJ3N1Y2NlZWRlZCcgfCAnZmFpbGVkJztcbiAgICAgIHVybDogc3RyaW5nO1xuICAgIH07XG4gIH07XG4gIHN0YXR1czogJ2NhbmNlbGVkJyB8ICdjaGFyZ2VhYmxlJyB8ICdjb25zdW1lZCcgfCAnZmFpbGVkJyB8ICdwZW5kaW5nJztcbiAgdHlwZTpcbiAgICB8ICdjYXJkJ1xuICAgIHwgJ3RocmVlX2Rfc2VjdXJlJ1xuICAgIHwgJ2dpcm9wYXknXG4gICAgfCAnc2VwYV9iaXQnXG4gICAgfCAnaWRlYWwnXG4gICAgfCAnc29mb3J0J1xuICAgIHwgJ2JhbmNvbnRhY3QnO1xuICB1c2FnZTogVXNhZ2VUeXBlcztcbn1cblxuZXhwb3J0IHR5cGUgVXNhZ2VUeXBlcyA9ICdyZXVzYWJsZScgfCAnc2luZ2xlX3VzZSc7XG5leHBvcnQgdHlwZSBGbG93VHlwZXMgPSAncmVkaXJlY3QnIHwgJ3JlY2VpdmVyJyB8ICdjb2RlX3ZlcmlmaWNhdGlvbicgfCAnbm9uZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU291cmNlUGFyYW1zIHtcbiAgaWQ6IHN0cmluZztcbiAgY2xpZW50X3NlY3JldDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNvdXJjZURhdGEge1xuICB0eXBlPzogc3RyaW5nO1xuICBhbW91bnQ/OiBudW1iZXI7XG4gIGN1cnJlbmN5Pzogc3RyaW5nO1xuICBmbG93PzogRmxvd1R5cGVzO1xuICBtZXRhZGF0YT86IHsgW2tleTogc3RyaW5nXTogYW55IH07XG4gIHRocmVlX2Rfc2VjdXJlPzoge1xuICAgIGNhcmQ6IHN0cmluZztcbiAgfTtcbiAgb3duZXI/OiB7XG4gICAgYWRkcmVzcz86IEFkZHJlc3M7XG4gICAgZW1haWw/OiBzdHJpbmc7XG4gICAgbmFtZT86IHN0cmluZztcbiAgICBwaG9uZT86IHN0cmluZztcbiAgfTtcbiAgcmVkaXJlY3Q/OiB7XG4gICAgW2tleTogc3RyaW5nXTogYW55O1xuICAgIHJldHVybl91cmw6IHN0cmluZztcbiAgfTtcbiAgdG9rZW4/OiBzdHJpbmc7XG4gIHVzYWdlPzogVXNhZ2VUeXBlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU291cmNlRGF0YShzb3VyY2VEYXRhOiBhbnkpOiBzb3VyY2VEYXRhIGlzIFNvdXJjZURhdGEge1xuICByZXR1cm4gJ3R5cGUnIGluIHNvdXJjZURhdGE7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU291cmNlUmVzdWx0IHtcbiAgc291cmNlPzogU291cmNlO1xuICBlcnJvcj86IEVycm9yO1xufVxuIl19