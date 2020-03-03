/**
 * @fileoverview added by tsickle
 * Generated from: lib/interfaces/token.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function Token() { }
if (false) {
    /** @type {?} */
    Token.prototype.id;
    /** @type {?} */
    Token.prototype.object;
    /** @type {?|undefined} */
    Token.prototype.bank_account;
    /** @type {?|undefined} */
    Token.prototype.card;
    /** @type {?} */
    Token.prototype.client_ip;
    /** @type {?} */
    Token.prototype.livemode;
    /** @type {?} */
    Token.prototype.type;
    /** @type {?} */
    Token.prototype.used;
}
/**
 * @record
 */
export function CardDataOptions() { }
if (false) {
    /** @type {?|undefined} */
    CardDataOptions.prototype.name;
    /** @type {?|undefined} */
    CardDataOptions.prototype.address_line1;
    /** @type {?|undefined} */
    CardDataOptions.prototype.address_line2;
    /** @type {?|undefined} */
    CardDataOptions.prototype.address_city;
    /** @type {?|undefined} */
    CardDataOptions.prototype.address_state;
    /** @type {?|undefined} */
    CardDataOptions.prototype.address_zip;
    /** @type {?|undefined} */
    CardDataOptions.prototype.address_country;
    /** @type {?|undefined} */
    CardDataOptions.prototype.currency;
}
/**
 * @record
 */
export function TokenResult() { }
if (false) {
    /** @type {?|undefined} */
    TokenResult.prototype.token;
    /** @type {?|undefined} */
    TokenResult.prototype.error;
}
/**
 * @record
 */
export function Address() { }
if (false) {
    /** @type {?} */
    Address.prototype.line1;
    /** @type {?|undefined} */
    Address.prototype.line2;
    /** @type {?} */
    Address.prototype.city;
    /** @type {?} */
    Address.prototype.state;
    /** @type {?} */
    Address.prototype.postal_code;
}
/**
 * @record
 */
export function DateOfBirth() { }
if (false) {
    /** @type {?} */
    DateOfBirth.prototype.day;
    /** @type {?} */
    DateOfBirth.prototype.month;
    /** @type {?} */
    DateOfBirth.prototype.year;
}
/**
 * @record
 */
export function LegalEntity() { }
if (false) {
    /** @type {?} */
    LegalEntity.prototype.address;
    /** @type {?|undefined} */
    LegalEntity.prototype.address_kana;
    /** @type {?|undefined} */
    LegalEntity.prototype.address_kanji;
    /** @type {?|undefined} */
    LegalEntity.prototype.dob;
    /** @type {?} */
    LegalEntity.prototype.first_name;
    /** @type {?|undefined} */
    LegalEntity.prototype.first_name_kana;
    /** @type {?|undefined} */
    LegalEntity.prototype.first_name_kanji;
    /** @type {?|undefined} */
    LegalEntity.prototype.gender;
    /** @type {?} */
    LegalEntity.prototype.last_name;
    /** @type {?|undefined} */
    LegalEntity.prototype.last_name_kana;
    /** @type {?|undefined} */
    LegalEntity.prototype.last_name_kanji;
    /** @type {?|undefined} */
    LegalEntity.prototype.maiden_name;
    /** @type {?|undefined} */
    LegalEntity.prototype.personal_id_number;
    /** @type {?|undefined} */
    LegalEntity.prototype.phone_number;
    /** @type {?|undefined} */
    LegalEntity.prototype.ssn_last_4;
}
/**
 * @record
 */
export function IndividualEntity() { }
if (false) {
    /** @type {?} */
    IndividualEntity.prototype.type;
}
/**
 * @record
 */
export function BusinessEntity() { }
if (false) {
    /** @type {?} */
    BusinessEntity.prototype.type;
    /** @type {?|undefined} */
    BusinessEntity.prototype.additional_owners;
    /** @type {?} */
    BusinessEntity.prototype.business_name;
    /** @type {?|undefined} */
    BusinessEntity.prototype.business_name_kana;
    /** @type {?|undefined} */
    BusinessEntity.prototype.business_name_kanji;
    /** @type {?|undefined} */
    BusinessEntity.prototype.business_tax_id;
    /** @type {?|undefined} */
    BusinessEntity.prototype.business_vat_id;
    /** @type {?|undefined} */
    BusinessEntity.prototype.personal_address;
    /** @type {?|undefined} */
    BusinessEntity.prototype.personal_address_kana;
    /** @type {?|undefined} */
    BusinessEntity.prototype.personal_address_kanji;
    /** @type {?|undefined} */
    BusinessEntity.prototype.tax_id_registrar;
}
/**
 * @record
 */
export function AccountData() { }
if (false) {
    /** @type {?|undefined} */
    AccountData.prototype.legal_entity;
    /** @type {?|undefined} */
    AccountData.prototype.tos_shown_and_accepted;
}
/**
 * @record
 */
export function BankAccountData() { }
if (false) {
    /** @type {?} */
    BankAccountData.prototype.country;
    /** @type {?} */
    BankAccountData.prototype.currency;
    /** @type {?} */
    BankAccountData.prototype.routing_number;
    /** @type {?} */
    BankAccountData.prototype.account_number;
    /** @type {?|undefined} */
    BankAccountData.prototype.account_holder_name;
    /** @type {?|undefined} */
    BankAccountData.prototype.account_holder_type;
}
/**
 * @record
 */
export function PiiData() { }
if (false) {
    /** @type {?} */
    PiiData.prototype.personal_id_number;
}
/**
 * @param {?} account
 * @return {?}
 */
export function isAccount(account) {
    return account === 'account';
}
/**
 * @param {?} accountData
 * @return {?}
 */
export function isAccountData(accountData) {
    return accountData.legal_entity || accountData.tos_shown_and_accepted;
}
/**
 * @param {?} account
 * @return {?}
 */
export function isBankAccount(account) {
    return account === 'bank_account';
}
/**
 * @param {?} bankAccountData
 * @return {?}
 */
export function isBankAccountData(bankAccountData) {
    return ('country' in bankAccountData &&
        'currency' in bankAccountData &&
        'routing_number' in bankAccountData &&
        'account_number' in bankAccountData &&
        (bankAccountData.account_holder_type === 'individual' ||
            bankAccountData.account_holder_type === 'company' ||
            bankAccountData.account_holder_type === undefined));
}
/**
 * @param {?} pii
 * @return {?}
 */
export function isPii(pii) {
    return pii === 'pii';
}
/**
 * @param {?} piiData
 * @return {?}
 */
export function isPiiData(piiData) {
    return 'personal_id_number' in piiData;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtc3RyaXBlLyIsInNvdXJjZXMiOlsibGliL2ludGVyZmFjZXMvdG9rZW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFQSwyQkFrREM7OztJQWpEQyxtQkFBVzs7SUFDWCx1QkFBZ0I7O0lBQ2hCLDZCQWlCRTs7SUFDRixxQkF3QkU7O0lBQ0YsMEJBQWtCOztJQUNsQix5QkFBa0I7O0lBQ2xCLHFCQUE4Qjs7SUFDOUIscUJBQWM7Ozs7O0FBS2hCLHFDQVNDOzs7SUFSQywrQkFBYzs7SUFDZCx3Q0FBdUI7O0lBQ3ZCLHdDQUF1Qjs7SUFDdkIsdUNBQXNCOztJQUN0Qix3Q0FBdUI7O0lBQ3ZCLHNDQUFxQjs7SUFDckIsMENBQXlCOztJQUN6QixtQ0FBa0I7Ozs7O0FBR3BCLGlDQUdDOzs7SUFGQyw0QkFBYzs7SUFDZCw0QkFBYzs7Ozs7QUFLaEIsNkJBTUM7OztJQUxDLHdCQUFjOztJQUNkLHdCQUFlOztJQUNmLHVCQUFhOztJQUNiLHdCQUFjOztJQUNkLDhCQUFvQjs7Ozs7QUFHdEIsaUNBSUM7OztJQUhDLDBCQUFZOztJQUNaLDRCQUFjOztJQUNkLDJCQUFhOzs7OztBQUdmLGlDQWdCQzs7O0lBZkMsOEJBQWlCOztJQUNqQixtQ0FBdUI7O0lBQ3ZCLG9DQUF3Qjs7SUFDeEIsMEJBQWtCOztJQUNsQixpQ0FBbUI7O0lBQ25CLHNDQUF5Qjs7SUFDekIsdUNBQTBCOztJQUMxQiw2QkFBZ0I7O0lBQ2hCLGdDQUFrQjs7SUFDbEIscUNBQXdCOztJQUN4QixzQ0FBeUI7O0lBQ3pCLGtDQUFxQjs7SUFDckIseUNBQTRCOztJQUM1QixtQ0FBc0I7O0lBQ3RCLGlDQUFvQjs7Ozs7QUFHdEIsc0NBRUM7OztJQURDLGdDQUFtQjs7Ozs7QUFHckIsb0NBWUM7OztJQVhDLDhCQUFnQjs7SUFDaEIsMkNBQWtDOztJQUNsQyx1Q0FBc0I7O0lBQ3RCLDRDQUE0Qjs7SUFDNUIsNkNBQTZCOztJQUM3Qix5Q0FBeUI7O0lBQ3pCLHlDQUF5Qjs7SUFDekIsMENBQTJCOztJQUMzQiwrQ0FBZ0M7O0lBQ2hDLGdEQUFpQzs7SUFDakMsMENBQTBCOzs7OztBQUc1QixpQ0FHQzs7O0lBRkMsbUNBQWlEOztJQUNqRCw2Q0FBaUM7Ozs7O0FBS25DLHFDQU9DOzs7SUFOQyxrQ0FBZ0I7O0lBQ2hCLG1DQUFpQjs7SUFDakIseUNBQXVCOztJQUN2Qix5Q0FBdUI7O0lBQ3ZCLDhDQUE2Qjs7SUFDN0IsOENBQStDOzs7OztBQUtqRCw2QkFFQzs7O0lBREMscUNBQTJCOzs7Ozs7QUFHN0IsTUFBTSxVQUFVLFNBQVMsQ0FBQyxPQUFZO0lBQ3BDLE9BQU8sT0FBTyxLQUFLLFNBQVMsQ0FBQztBQUMvQixDQUFDOzs7OztBQUVELE1BQU0sVUFBVSxhQUFhLENBQUMsV0FBZ0I7SUFDNUMsT0FBTyxXQUFXLENBQUMsWUFBWSxJQUFJLFdBQVcsQ0FBQyxzQkFBc0IsQ0FBQztBQUN4RSxDQUFDOzs7OztBQUVELE1BQU0sVUFBVSxhQUFhLENBQUMsT0FBWTtJQUN4QyxPQUFPLE9BQU8sS0FBSyxjQUFjLENBQUM7QUFDcEMsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsaUJBQWlCLENBQy9CLGVBQW9CO0lBRXBCLE9BQU8sQ0FDTCxTQUFTLElBQUksZUFBZTtRQUM1QixVQUFVLElBQUksZUFBZTtRQUM3QixnQkFBZ0IsSUFBSSxlQUFlO1FBQ25DLGdCQUFnQixJQUFJLGVBQWU7UUFDbkMsQ0FBQyxlQUFlLENBQUMsbUJBQW1CLEtBQUssWUFBWTtZQUNuRCxlQUFlLENBQUMsbUJBQW1CLEtBQUssU0FBUztZQUNqRCxlQUFlLENBQUMsbUJBQW1CLEtBQUssU0FBUyxDQUFDLENBQ3JELENBQUM7QUFDSixDQUFDOzs7OztBQUVELE1BQU0sVUFBVSxLQUFLLENBQUMsR0FBUTtJQUM1QixPQUFPLEdBQUcsS0FBSyxLQUFLLENBQUM7QUFDdkIsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsU0FBUyxDQUFDLE9BQVk7SUFDcEMsT0FBTyxvQkFBb0IsSUFBSSxPQUFPLENBQUM7QUFDekMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVycm9yIH0gZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVG9rZW4ge1xuICBpZDogc3RyaW5nO1xuICBvYmplY3Q6ICd0b2tlbic7XG4gIGJhbmtfYWNjb3VudD86IHtcbiAgICBpZDogc3RyaW5nO1xuICAgIGNvdW50cnk6IHN0cmluZztcbiAgICBjdXJyZW5jeTogc3RyaW5nO1xuICAgIGZpbmdlcnByaW50OiBzdHJpbmc7XG4gICAgb2JqZWN0OiAnYmFua19hY2NvdW50JztcbiAgICBhY2NvdW50X2hvbGRlcl9uYW1lOiBzdHJpbmc7XG4gICAgYWNjb3VudF9ob2xkZXJfdHlwZTogJ2luZGl2aWR1YWwnIHwgJ2NvbXBhbnknO1xuICAgIGJhbmtfbmFtZTogc3RyaW5nO1xuICAgIGxhc3Q0OiBzdHJpbmc7XG4gICAgcm91dGluZ19udW1iZXI6IHN0cmluZztcbiAgICBzdGF0dXM6XG4gICAgICB8ICduZXcnXG4gICAgICB8ICd2YWxpZGF0ZWQnXG4gICAgICB8ICd2ZXJpZmllZCdcbiAgICAgIHwgJ3ZlcmlmaWNhdGlvbl9mYWlsZGVkJ1xuICAgICAgfCAnZXJyb3JlZCc7XG4gIH07XG4gIGNhcmQ/OiB7XG4gICAgaWQ6IHN0cmluZztcbiAgICBjb3VudHJ5OiBzdHJpbmc7XG4gICAgY3VycmVuY3k6IHN0cmluZztcbiAgICBmaW5nZXJwcmludDogc3RyaW5nO1xuICAgIG9iamVjdDogJ2NhcmQnO1xuICAgIGFkZHJlc3NfY2l0eTogc3RyaW5nO1xuICAgIGFkZHJlc3NfY291bnRyeTogc3RyaW5nO1xuICAgIGFkZHJlc3NfbGluZTE6IHN0cmluZztcbiAgICBhZGRyZXNzX2xpbmUxX2NoZWNrOiBGaWVsZENoZWNrO1xuICAgIGFkZHJlc3NfbGluZTI6IHN0cmluZztcbiAgICBhZGRyZXNzX3N0YXRlOiBzdHJpbmc7XG4gICAgYWRkcmVzc196aXA6IHN0cmluZztcbiAgICBhZGRyZXNzX3ppcF9jaGVjazogRmllbGRDaGVjaztcbiAgICBicmFuZDogc3RyaW5nO1xuICAgIGN2Y19jaGVjazogRmllbGRDaGVjaztcbiAgICBkeW5hbWljX2xhc3Q0OiBzdHJpbmc7XG4gICAgZXhwX21vbnRoOiBudW1iZXI7XG4gICAgZXhwX3llYXI6IG51bWJlcjtcbiAgICBmdW5kaW5nOiAnY3JlZGl0JyB8ICdkZWJpdCcgfCAncHJlcGFpZCcgfCAndW5rbm93bic7XG4gICAgbGFzdDQ6IHN0cmluZztcbiAgICBtZXRhZGF0YTogeyBba2V5OiBzdHJpbmddOiBhbnkgfTtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgdG9rZW5pemF0aW9uX21ldGhvZDogJ2FwcGxlX3BheScgfCAnYW5kcm9pZF9wYXknO1xuICB9O1xuICBjbGllbnRfaXA6IHN0cmluZztcbiAgbGl2ZW1vZGU6IGJvb2xlYW47XG4gIHR5cGU6ICdjYXJkJyB8ICdiYW5rX2FjY291bnQnO1xuICB1c2VkOiBib29sZWFuO1xufVxuXG5leHBvcnQgdHlwZSBGaWVsZENoZWNrID0gJ3Bhc3MnIHwgJ2ZhaWwnIHwgJ3VuYXZhaWxhYmxlJyB8ICd1bmNoZWNrZWQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhcmREYXRhT3B0aW9ucyB7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIGFkZHJlc3NfbGluZTE/OiBzdHJpbmc7XG4gIGFkZHJlc3NfbGluZTI/OiBzdHJpbmc7XG4gIGFkZHJlc3NfY2l0eT86IHN0cmluZztcbiAgYWRkcmVzc19zdGF0ZT86IHN0cmluZztcbiAgYWRkcmVzc196aXA/OiBzdHJpbmc7XG4gIGFkZHJlc3NfY291bnRyeT86IHN0cmluZztcbiAgY3VycmVuY3k/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVG9rZW5SZXN1bHQge1xuICB0b2tlbj86IFRva2VuO1xuICBlcnJvcj86IEVycm9yO1xufVxuXG5leHBvcnQgdHlwZSBBY2NvdW50ID0gJ2FjY291bnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFkZHJlc3Mge1xuICBsaW5lMTogc3RyaW5nO1xuICBsaW5lMj86IHN0cmluZztcbiAgY2l0eTogc3RyaW5nO1xuICBzdGF0ZTogc3RyaW5nO1xuICBwb3N0YWxfY29kZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERhdGVPZkJpcnRoIHtcbiAgZGF5OiBudW1iZXI7XG4gIG1vbnRoOiBudW1iZXI7XG4gIHllYXI6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMZWdhbEVudGl0eSB7XG4gIGFkZHJlc3M6IEFkZHJlc3M7XG4gIGFkZHJlc3Nfa2FuYT86IEFkZHJlc3M7XG4gIGFkZHJlc3Nfa2Fuamk/OiBBZGRyZXNzO1xuICBkb2I/OiBEYXRlT2ZCaXJ0aDtcbiAgZmlyc3RfbmFtZTogc3RyaW5nO1xuICBmaXJzdF9uYW1lX2thbmE/OiBzdHJpbmc7XG4gIGZpcnN0X25hbWVfa2Fuamk/OiBzdHJpbmc7XG4gIGdlbmRlcj86IHN0cmluZztcbiAgbGFzdF9uYW1lOiBzdHJpbmc7XG4gIGxhc3RfbmFtZV9rYW5hPzogc3RyaW5nO1xuICBsYXN0X25hbWVfa2Fuamk/OiBzdHJpbmc7XG4gIG1haWRlbl9uYW1lPzogc3RyaW5nO1xuICBwZXJzb25hbF9pZF9udW1iZXI/OiBzdHJpbmc7XG4gIHBob25lX251bWJlcj86IHN0cmluZztcbiAgc3NuX2xhc3RfND86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJbmRpdmlkdWFsRW50aXR5IGV4dGVuZHMgTGVnYWxFbnRpdHkge1xuICB0eXBlOiAnaW5kaXZpZHVhbCc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQnVzaW5lc3NFbnRpdHkgZXh0ZW5kcyBMZWdhbEVudGl0eSB7XG4gIHR5cGU6ICdjb21wYW55JztcbiAgYWRkaXRpb25hbF9vd25lcnM/OiBMZWdhbEVudGl0eVtdO1xuICBidXNpbmVzc19uYW1lOiBzdHJpbmc7XG4gIGJ1c2luZXNzX25hbWVfa2FuYT86IHN0cmluZztcbiAgYnVzaW5lc3NfbmFtZV9rYW5qaT86IHN0cmluZztcbiAgYnVzaW5lc3NfdGF4X2lkPzogc3RyaW5nO1xuICBidXNpbmVzc192YXRfaWQ/OiBzdHJpbmc7XG4gIHBlcnNvbmFsX2FkZHJlc3M/OiBBZGRyZXNzO1xuICBwZXJzb25hbF9hZGRyZXNzX2thbmE/OiBBZGRyZXNzO1xuICBwZXJzb25hbF9hZGRyZXNzX2thbmppPzogQWRkcmVzcztcbiAgdGF4X2lkX3JlZ2lzdHJhcj86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBY2NvdW50RGF0YSB7XG4gIGxlZ2FsX2VudGl0eT86IEluZGl2aWR1YWxFbnRpdHkgfCBCdXNpbmVzc0VudGl0eTtcbiAgdG9zX3Nob3duX2FuZF9hY2NlcHRlZD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCB0eXBlIEJhbmtBY2NvdW50ID0gJ2JhbmtfYWNjb3VudCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFua0FjY291bnREYXRhIHtcbiAgY291bnRyeTogc3RyaW5nO1xuICBjdXJyZW5jeTogc3RyaW5nO1xuICByb3V0aW5nX251bWJlcjogc3RyaW5nO1xuICBhY2NvdW50X251bWJlcjogc3RyaW5nO1xuICBhY2NvdW50X2hvbGRlcl9uYW1lPzogc3RyaW5nO1xuICBhY2NvdW50X2hvbGRlcl90eXBlPzogJ2luZGl2aWR1YWwnIHwgJ2NvbXBhbnknO1xufVxuXG5leHBvcnQgdHlwZSBQaWkgPSAncGlpJztcblxuZXhwb3J0IGludGVyZmFjZSBQaWlEYXRhIHtcbiAgcGVyc29uYWxfaWRfbnVtYmVyOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0FjY291bnQoYWNjb3VudDogYW55KTogYWNjb3VudCBpcyBBY2NvdW50IHtcbiAgcmV0dXJuIGFjY291bnQgPT09ICdhY2NvdW50Jztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQWNjb3VudERhdGEoYWNjb3VudERhdGE6IGFueSk6IGFjY291bnREYXRhIGlzIEFjY291bnREYXRhIHtcbiAgcmV0dXJuIGFjY291bnREYXRhLmxlZ2FsX2VudGl0eSB8fCBhY2NvdW50RGF0YS50b3Nfc2hvd25fYW5kX2FjY2VwdGVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNCYW5rQWNjb3VudChhY2NvdW50OiBhbnkpOiBhY2NvdW50IGlzIEJhbmtBY2NvdW50IHtcbiAgcmV0dXJuIGFjY291bnQgPT09ICdiYW5rX2FjY291bnQnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNCYW5rQWNjb3VudERhdGEoXG4gIGJhbmtBY2NvdW50RGF0YTogYW55XG4pOiBiYW5rQWNjb3VudERhdGEgaXMgQmFua0FjY291bnREYXRhIHtcbiAgcmV0dXJuIChcbiAgICAnY291bnRyeScgaW4gYmFua0FjY291bnREYXRhICYmXG4gICAgJ2N1cnJlbmN5JyBpbiBiYW5rQWNjb3VudERhdGEgJiZcbiAgICAncm91dGluZ19udW1iZXInIGluIGJhbmtBY2NvdW50RGF0YSAmJlxuICAgICdhY2NvdW50X251bWJlcicgaW4gYmFua0FjY291bnREYXRhICYmXG4gICAgKGJhbmtBY2NvdW50RGF0YS5hY2NvdW50X2hvbGRlcl90eXBlID09PSAnaW5kaXZpZHVhbCcgfHxcbiAgICAgIGJhbmtBY2NvdW50RGF0YS5hY2NvdW50X2hvbGRlcl90eXBlID09PSAnY29tcGFueScgfHxcbiAgICAgIGJhbmtBY2NvdW50RGF0YS5hY2NvdW50X2hvbGRlcl90eXBlID09PSB1bmRlZmluZWQpXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1BpaShwaWk6IGFueSk6IHBpaSBpcyBQaWkge1xuICByZXR1cm4gcGlpID09PSAncGlpJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUGlpRGF0YShwaWlEYXRhOiBhbnkpOiBwaWlEYXRhIGlzIFBpaURhdGEge1xuICByZXR1cm4gJ3BlcnNvbmFsX2lkX251bWJlcicgaW4gcGlpRGF0YTtcbn1cbiJdfQ==