/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/stripe-card.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { switchMap, filter } from 'rxjs/operators';
import { StripeService } from '../services/stripe.service';
import { StripeInstance } from '../services/stripe-instance.class';
export class StripeCardComponent {
    /**
     * @param {?} stripeService
     */
    constructor(stripeService) {
        this.stripeService = stripeService;
        this.card = new EventEmitter();
        // tslint:disable-next-line:no-output-on-prefix
        this.on = new EventEmitter();
        this.options$ = new BehaviorSubject({});
        this.elementsOptions$ = new BehaviorSubject({});
        this.stripe$ = new BehaviorSubject(null);
    }
    /**
     * @param {?} optionsIn
     * @return {?}
     */
    set options(optionsIn) {
        this.options$.next(optionsIn);
    }
    /**
     * @param {?} optionsIn
     * @return {?}
     */
    set elementsOptions(optionsIn) {
        this.elementsOptions$.next(optionsIn);
    }
    /**
     * @param {?} stripeIn
     * @return {?}
     */
    set stripe(stripeIn) {
        this.stripe$.next(stripeIn);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        /** @type {?} */
        const elements$ = combineLatest(this.elementsOptions$.asObservable(), this.stripe$.asObservable()).pipe(switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        ([options, stripe]) => {
            if (stripe) {
                if (Object.keys(options).length > 0) {
                    return stripe.elements(options);
                }
                return stripe.elements();
            }
            else {
                if (Object.keys(options).length > 0) {
                    return this.stripeService.elements(options);
                }
                return this.stripeService.elements();
            }
        })));
        combineLatest(elements$, this.options$.asObservable().pipe(filter((/**
         * @param {?} options
         * @return {?}
         */
        options => Boolean(options))))).subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ([elements, options]) => {
            this.element = elements.create('card', options);
            this.element.on('blur', (/**
             * @param {?} ev
             * @return {?}
             */
            ev => this.on.emit({
                event: ev,
                type: 'blur'
            })));
            this.element.on('change', (/**
             * @param {?} ev
             * @return {?}
             */
            ev => this.on.emit({
                event: ev,
                type: 'change'
            })));
            this.element.on('click', (/**
             * @param {?} ev
             * @return {?}
             */
            ev => this.on.emit({
                event: ev,
                type: 'click'
            })));
            this.element.on('focus', (/**
             * @param {?} ev
             * @return {?}
             */
            ev => this.on.emit({
                event: ev,
                type: 'focus'
            })));
            this.element.on('ready', (/**
             * @param {?} ev
             * @return {?}
             */
            ev => this.on.emit({
                event: ev,
                type: 'ready'
            })));
            this.element.mount(this.stripeCard.nativeElement);
            this.card.emit(this.element);
        }));
    }
    /**
     * @return {?}
     */
    getCard() {
        return this.element;
    }
}
StripeCardComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-stripe-card',
                template: `
    <div class="field" #stripeCard></div>
  `
            }] }
];
/** @nocollapse */
StripeCardComponent.ctorParameters = () => [
    { type: StripeService }
];
StripeCardComponent.propDecorators = {
    card: [{ type: Output }],
    on: [{ type: Output }],
    stripeCard: [{ type: ViewChild, args: ['stripeCard',] }],
    options: [{ type: Input }],
    elementsOptions: [{ type: Input }],
    stripe: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    StripeCardComponent.prototype.card;
    /** @type {?} */
    StripeCardComponent.prototype.on;
    /** @type {?} */
    StripeCardComponent.prototype.stripeCard;
    /** @type {?} */
    StripeCardComponent.prototype.element;
    /** @type {?} */
    StripeCardComponent.prototype.options$;
    /** @type {?} */
    StripeCardComponent.prototype.elementsOptions$;
    /** @type {?} */
    StripeCardComponent.prototype.stripe$;
    /** @type {?} */
    StripeCardComponent.prototype.stripeService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaXBlLWNhcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXN0cmlwZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3N0cmlwZS1jYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLE1BQU0sRUFDUCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsZUFBZSxFQUFjLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBT25ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUUzRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFRbkUsTUFBTSxPQUFPLG1CQUFtQjs7OztJQXdCOUIsWUFBbUIsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUF2QjlCLFNBQUksR0FBRyxJQUFJLFlBQVksRUFBaUIsQ0FBQzs7UUFHbkQsT0FBRSxHQUFHLElBQUksWUFBWSxFQUEwQyxDQUFDO1FBUWhFLGFBQVEsR0FBRyxJQUFJLGVBQWUsQ0FBaUIsRUFBRSxDQUFDLENBQUM7UUFLbkQscUJBQWdCLEdBQUcsSUFBSSxlQUFlLENBQWtCLEVBQUUsQ0FBQyxDQUFDO1FBSzVELFlBQU8sR0FBRyxJQUFJLGVBQWUsQ0FBd0IsSUFBSSxDQUFDLENBQUM7SUFFaEIsQ0FBQzs7Ozs7SUFoQm5ELElBQ1csT0FBTyxDQUFDLFNBQXlCO1FBQzFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Ozs7O0lBRUQsSUFDVyxlQUFlLENBQUMsU0FBMEI7UUFDbkQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUks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LENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUVsRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDL0IsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRU0sT0FBTztRQUNaLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDOzs7WUFwR0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRTs7R0FFVDthQUNGOzs7O1lBVFEsYUFBYTs7O21CQVduQixNQUFNO2lCQUVOLE1BQU07eUJBR04sU0FBUyxTQUFDLFlBQVk7c0JBRXRCLEtBQUs7OEJBS0wsS0FBSztxQkFLTCxLQUFLOzs7O0lBakJOLG1DQUEwRDs7SUFFMUQsaUNBQ3VFOztJQUV2RSx5Q0FBd0Q7O0lBQ3hELHNDQUErQjs7SUFLL0IsdUNBQTBEOztJQUsxRCwrQ0FBbUU7O0lBS25FLHNDQUFrRTs7SUFFdEQsNENBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgVmlld0NoaWxkLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIE91dHB1dFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBjb21iaW5lTGF0ZXN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBzd2l0Y2hNYXAsIGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHtcbiAgRWxlbWVudCBhcyBTdHJpcGVFbGVtZW50LFxuICBFbGVtZW50T3B0aW9ucyxcbiAgRWxlbWVudEV2ZW50VHlwZVxufSBmcm9tICcuLi9pbnRlcmZhY2VzL2VsZW1lbnQnO1xuaW1wb3J0IHsgU3RyaXBlU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3N0cmlwZS5zZXJ2aWNlJztcbmltcG9ydCB7IEVsZW1lbnRzLCBFbGVtZW50c09wdGlvbnMgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2VsZW1lbnRzJztcbmltcG9ydCB7IFN0cmlwZUluc3RhbmNlIH0gZnJvbSAnLi4vc2VydmljZXMvc3RyaXBlLWluc3RhbmNlLmNsYXNzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LXN0cmlwZS1jYXJkJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIiAjc3RyaXBlQ2FyZD48L2Rpdj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBTdHJpcGVDYXJkQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBPdXRwdXQoKSBwdWJsaWMgY2FyZCA9IG5ldyBFdmVudEVtaXR0ZXI8U3RyaXBlRWxlbWVudD4oKTtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLW91dHB1dC1vbi1wcmVmaXhcbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBvbiA9IG5ldyBFdmVudEVtaXR0ZXI8eyB0eXBlOiBFbGVtZW50RXZlbnRUeXBlOyBldmVudDogYW55IH0+KCk7XG5cbiAgQFZpZXdDaGlsZCgnc3RyaXBlQ2FyZCcpIHB1YmxpYyBzdHJpcGVDYXJkITogRWxlbWVudFJlZjtcbiAgcHVibGljIGVsZW1lbnQhOiBTdHJpcGVFbGVtZW50O1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IG9wdGlvbnMob3B0aW9uc0luOiBFbGVtZW50T3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucyQubmV4dChvcHRpb25zSW4pO1xuICB9XG4gIHB1YmxpYyBvcHRpb25zJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8RWxlbWVudE9wdGlvbnM+KHt9KTtcbiAgQElucHV0KClcbiAgcHVibGljIHNldCBlbGVtZW50c09wdGlvbnMob3B0aW9uc0luOiBFbGVtZW50c09wdGlvbnMpIHtcbiAgICB0aGlzLmVsZW1lbnRzT3B0aW9ucyQubmV4dChvcHRpb25zSW4pO1xuICB9XG4gIHB1YmxpYyBlbGVtZW50c09wdGlvbnMkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxFbGVtZW50c09wdGlvbnM+KHt9KTtcbiAgQElucHV0KClcbiAgcHVibGljIHNldCBzdHJpcGUoc3RyaXBlSW46IFN0cmlwZUluc3RhbmNlKSB7XG4gICAgdGhpcy5zdHJpcGUkLm5leHQoc3RyaXBlSW4pO1xuICB9XG4gIHB1YmxpYyBzdHJpcGUkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxTdHJpcGVJbnN0YW5jZSB8IG51bGw+KG51bGwpO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzdHJpcGVTZXJ2aWNlOiBTdHJpcGVTZXJ2aWNlKSB7fVxuXG4gIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgY29uc3QgZWxlbWVudHMkOiBPYnNlcnZhYmxlPEVsZW1lbnRzPiA9IGNvbWJpbmVMYXRlc3QoXG4gICAgICB0aGlzLmVsZW1lbnRzT3B0aW9ucyQuYXNPYnNlcnZhYmxlKCksXG4gICAgICB0aGlzLnN0cmlwZSQuYXNPYnNlcnZhYmxlKClcbiAgICApLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKFtvcHRpb25zLCBzdHJpcGVdKSA9PiB7XG4gICAgICAgIGlmIChzdHJpcGUpIHtcbiAgICAgICAgICBpZiAoT2JqZWN0LmtleXMob3B0aW9ucykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0cmlwZS5lbGVtZW50cyhvcHRpb25zKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHN0cmlwZS5lbGVtZW50cygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhvcHRpb25zKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdHJpcGVTZXJ2aWNlLmVsZW1lbnRzKG9wdGlvbnMpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhpcy5zdHJpcGVTZXJ2aWNlLmVsZW1lbnRzKCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgICBjb21iaW5lTGF0ZXN0KFxuICAgICAgZWxlbWVudHMkLFxuICAgICAgdGhpcy5vcHRpb25zJC5hc09ic2VydmFibGUoKS5waXBlKGZpbHRlcihvcHRpb25zID0+IEJvb2xlYW4ob3B0aW9ucykpKVxuICAgICkuc3Vic2NyaWJlKChbZWxlbWVudHMsIG9wdGlvbnNdKSA9PiB7XG4gICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50cy5jcmVhdGUoJ2NhcmQnLCBvcHRpb25zKTtcblxuICAgICAgdGhpcy5lbGVtZW50Lm9uKCdibHVyJywgZXYgPT5cbiAgICAgICAgdGhpcy5vbi5lbWl0KHtcbiAgICAgICAgICBldmVudDogZXYsXG4gICAgICAgICAgdHlwZTogJ2JsdXInXG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgICB0aGlzLmVsZW1lbnQub24oJ2NoYW5nZScsIGV2ID0+XG4gICAgICAgIHRoaXMub24uZW1pdCh7XG4gICAgICAgICAgZXZlbnQ6IGV2LFxuICAgICAgICAgIHR5cGU6ICdjaGFuZ2UnXG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgICB0aGlzLmVsZW1lbnQub24oJ2NsaWNrJywgZXYgPT5cbiAgICAgICAgdGhpcy5vbi5lbWl0KHtcbiAgICAgICAgICBldmVudDogZXYsXG4gICAgICAgICAgdHlwZTogJ2NsaWNrJ1xuICAgICAgICB9KVxuICAgICAgKTtcblxuICAgICAgdGhpcy5lbGVtZW50Lm9uKCdmb2N1cycsIGV2ID0+XG4gICAgICAgIHRoaXMub24uZW1pdCh7XG4gICAgICAgICAgZXZlbnQ6IGV2LFxuICAgICAgICAgIHR5cGU6ICdmb2N1cydcbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICAgIHRoaXMuZWxlbWVudC5vbigncmVhZHknLCBldiA9PlxuICAgICAgICB0aGlzLm9uLmVtaXQoe1xuICAgICAgICAgIGV2ZW50OiBldixcbiAgICAgICAgICB0eXBlOiAncmVhZHknXG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgICB0aGlzLmVsZW1lbnQubW91bnQodGhpcy5zdHJpcGVDYXJkLm5hdGl2ZUVsZW1lbnQpO1xuXG4gICAgICB0aGlzLmNhcmQuZW1pdCh0aGlzLmVsZW1lbnQpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGdldENhcmQoKTogU3RyaXBlRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcbiAgfVxufVxuIl19