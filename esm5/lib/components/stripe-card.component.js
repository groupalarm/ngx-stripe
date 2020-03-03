/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/stripe-card.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { switchMap, filter } from 'rxjs/operators';
import { StripeService } from '../services/stripe.service';
import { StripeInstance } from '../services/stripe-instance.class';
var StripeCardComponent = /** @class */ (function () {
    function StripeCardComponent(stripeService) {
        this.stripeService = stripeService;
        this.card = new EventEmitter();
        // tslint:disable-next-line:no-output-on-prefix
        this.on = new EventEmitter();
        this.options$ = new BehaviorSubject({});
        this.elementsOptions$ = new BehaviorSubject({});
        this.stripe$ = new BehaviorSubject(null);
    }
    Object.defineProperty(StripeCardComponent.prototype, "options", {
        set: /**
         * @param {?} optionsIn
         * @return {?}
         */
        function (optionsIn) {
            this.options$.next(optionsIn);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StripeCardComponent.prototype, "elementsOptions", {
        set: /**
         * @param {?} optionsIn
         * @return {?}
         */
        function (optionsIn) {
            this.elementsOptions$.next(optionsIn);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StripeCardComponent.prototype, "stripe", {
        set: /**
         * @param {?} stripeIn
         * @return {?}
         */
        function (stripeIn) {
            this.stripe$.next(stripeIn);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    StripeCardComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var elements$ = combineLatest(this.elementsOptions$.asObservable(), this.stripe$.asObservable()).pipe(switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), options = _b[0], stripe = _b[1];
            if (stripe) {
                if (Object.keys(options).length > 0) {
                    return stripe.elements(options);
                }
                return stripe.elements();
            }
            else {
                if (Object.keys(options).length > 0) {
                    return _this.stripeService.elements(options);
                }
                return _this.stripeService.elements();
            }
        })));
        combineLatest(elements$, this.options$.asObservable().pipe(filter((/**
         * @param {?} options
         * @return {?}
         */
        function (options) { return Boolean(options); })))).subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), elements = _b[0], options = _b[1];
            _this.element = elements.create('card', options);
            _this.element.on('blur', (/**
             * @param {?} ev
             * @return {?}
             */
            function (ev) {
                return _this.on.emit({
                    event: ev,
                    type: 'blur'
                });
            }));
            _this.element.on('change', (/**
             * @param {?} ev
             * @return {?}
             */
            function (ev) {
                return _this.on.emit({
                    event: ev,
                    type: 'change'
                });
            }));
            _this.element.on('click', (/**
             * @param {?} ev
             * @return {?}
             */
            function (ev) {
                return _this.on.emit({
                    event: ev,
                    type: 'click'
                });
            }));
            _this.element.on('focus', (/**
             * @param {?} ev
             * @return {?}
             */
            function (ev) {
                return _this.on.emit({
                    event: ev,
                    type: 'focus'
                });
            }));
            _this.element.on('ready', (/**
             * @param {?} ev
             * @return {?}
             */
            function (ev) {
                return _this.on.emit({
                    event: ev,
                    type: 'ready'
                });
            }));
            _this.element.mount(_this.stripeCard.nativeElement);
            _this.card.emit(_this.element);
        }));
    };
    /**
     * @return {?}
     */
    StripeCardComponent.prototype.getCard = /**
     * @return {?}
     */
    function () {
        return this.element;
    };
    StripeCardComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-stripe-card',
                    template: "\n    <div class=\"field\" #stripeCard></div>\n  "
                }] }
    ];
    /** @nocollapse */
    StripeCardComponent.ctorParameters = function () { return [
        { type: StripeService }
    ]; };
    StripeCardComponent.propDecorators = {
        card: [{ type: Output }],
        on: [{ type: Output }],
        stripeCard: [{ type: ViewChild, args: ['stripeCard',] }],
        options: [{ type: Input }],
        elementsOptions: [{ type: Input }],
        stripe: [{ type: Input }]
    };
    return StripeCardComponent;
}());
export { StripeCardComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaXBlLWNhcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXN0cmlwZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3N0cmlwZS1jYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFFTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixNQUFNLEVBQ1AsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGVBQWUsRUFBYyxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU9uRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFM0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRW5FO0lBOEJFLDZCQUFtQixhQUE0QjtRQUE1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQXZCOUIsU0FBSSxHQUFHLElBQUksWUFBWSxFQUFpQixDQUFDOztRQUduRCxPQUFFLEdBQUcsSUFBSSxZQUFZLEVBQTBDLENBQUM7UUFRaEUsYUFBUSxHQUFHLElBQUksZUFBZSxDQUFpQixFQUFFLENBQUMsQ0FBQztRQUtuRCxxQkFBZ0IsR0FBRyxJQUFJLGVBQWUsQ0FBa0IsRUFBRSxDQUFDLENBQUM7UUFLNUQsWUFBTyxHQUFHLElBQUksZUFBZSxDQUF3QixJQUFJLENBQUMsQ0FBQztJQUVoQixDQUFDO0lBaEJuRCxzQkFDVyx3Q0FBTzs7Ozs7UUFEbEIsVUFDbUIsU0FBeUI7WUFDMUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDaEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFDVyxnREFBZTs7Ozs7UUFEMUIsVUFDMkIsU0FBMEI7WUFDbkQsSUFBSSxDQUFDLGdCQUFnQixDQUFD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QUFBLEtBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO29CQUNYLEtBQUssRUFBRSxFQUFFO29CQUNULElBQUksRUFBRSxPQUFPO2lCQUNkLENBQUM7WUFIRixDQUdFLEVBQ0gsQ0FBQztZQUVGLEtBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7WUFFbEQsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQy9CLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVNLHFDQUFPOzs7SUFBZDtRQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDOztnQkFwR0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFFBQVEsRUFBRSxtREFFVDtpQkFDRjs7OztnQkFUUSxhQUFhOzs7dUJBV25CLE1BQU07cUJBRU4sTUFBTTs2QkFHTixTQUFTLFNBQUMsWUFBWTswQkFFdEIsS0FBSztrQ0FLTCxLQUFLO3lCQUtMLEtBQUs7O0lBNkVSLDBCQUFDO0NBQUEsQUFyR0QsSUFxR0M7U0EvRlksbUJBQW1COzs7SUFDOUIsbUNBQTBEOztJQUUxRCxpQ0FDdUU7O0lBRXZFLHlDQUF3RDs7SUFDeEQsc0NBQStCOztJQUsvQix1Q0FBMEQ7O0lBSzFELCtDQUFtRTs7SUFLbkUsc0NBQWtFOztJQUV0RCw0Q0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBBZnRlclZpZXdJbml0LFxuICBWaWV3Q2hpbGQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgT3V0cHV0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIGNvbWJpbmVMYXRlc3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHN3aXRjaE1hcCwgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQge1xuICBFbGVtZW50IGFzIFN0cmlwZUVsZW1lbnQsXG4gIEVsZW1lbnRPcHRpb25zLFxuICBFbGVtZW50RXZlbnRUeXBlXG59IGZyb20gJy4uL2ludGVyZmFjZXMvZWxlbWVudCc7XG5pbXBvcnQgeyBTdHJpcGVTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvc3RyaXBlLnNlcnZpY2UnO1xuaW1wb3J0IHsgRWxlbWVudHMsIEVsZW1lbnRzT3B0aW9ucyB9IGZyb20gJy4uL2ludGVyZmFjZXMvZWxlbWVudHMnO1xuaW1wb3J0IHsgU3RyaXBlSW5zdGFuY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9zdHJpcGUtaW5zdGFuY2UuY2xhc3MnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtc3RyaXBlLWNhcmQnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiICNzdHJpcGVDYXJkPjwvZGl2PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIFN0cmlwZUNhcmRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgQE91dHB1dCgpIHB1YmxpYyBjYXJkID0gbmV3IEV2ZW50RW1pdHRlcjxTdHJpcGVFbGVtZW50PigpO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tb3V0cHV0LW9uLXByZWZpeFxuICBAT3V0cHV0KClcbiAgcHVibGljIG9uID0gbmV3IEV2ZW50RW1pdHRlcjx7IHR5cGU6IEVsZW1lbnRFdmVudFR5cGU7IGV2ZW50OiBhbnkgfT4oKTtcblxuICBAVmlld0NoaWxkKCdzdHJpcGVDYXJkJykgcHVibGljIHN0cmlwZUNhcmQhOiBFbGVtZW50UmVmO1xuICBwdWJsaWMgZWxlbWVudCE6IFN0cmlwZUVsZW1lbnQ7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgb3B0aW9ucyhvcHRpb25zSW46IEVsZW1lbnRPcHRpb25zKSB7XG4gICAgdGhpcy5vcHRpb25zJC5uZXh0KG9wdGlvbnNJbik7XG4gIH1cbiAgcHVibGljIG9wdGlvbnMkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxFbGVtZW50T3B0aW9ucz4oe30pO1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGVsZW1lbnRzT3B0aW9ucyhvcHRpb25zSW46IEVsZW1lbnRzT3B0aW9ucykge1xuICAgIHRoaXMuZWxlbWVudHNPcHRpb25zJC5uZXh0KG9wdGlvbnNJbik7XG4gIH1cbiAgcHVibGljIGVsZW1lbnRzT3B0aW9ucyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEVsZW1lbnRzT3B0aW9ucz4oe30pO1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHN0cmlwZShzdHJpcGVJbjogU3RyaXBlSW5zdGFuY2UpIHtcbiAgICB0aGlzLnN0cmlwZSQubmV4dChzdHJpcGVJbik7XG4gIH1cbiAgcHVibGljIHN0cmlwZSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFN0cmlwZUluc3RhbmNlIHwgbnVsbD4obnVsbCk7XG5cbiAgY29uc3RydWN0b3IocHVibGljIHN0cmlwZVNlcnZpY2U6IFN0cmlwZVNlcnZpY2UpIHt9XG5cbiAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBjb25zdCBlbGVtZW50cyQ6IE9ic2VydmFibGU8RWxlbWVudHM+ID0gY29tYmluZUxhdGVzdChcbiAgICAgIHRoaXMuZWxlbWVudHNPcHRpb25zJC5hc09ic2VydmFibGUoKSxcbiAgICAgIHRoaXMuc3RyaXBlJC5hc09ic2VydmFibGUoKVxuICAgICkucGlwZShcbiAgICAgIHN3aXRjaE1hcCgoW29wdGlvbnMsIHN0cmlwZV0pID0+IHtcbiAgICAgICAgaWYgKHN0cmlwZSkge1xuICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhvcHRpb25zKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyaXBlLmVsZW1lbnRzKG9wdGlvbnMpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gc3RyaXBlLmVsZW1lbnRzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKE9iamVjdC5rZXlzKG9wdGlvbnMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0cmlwZVNlcnZpY2UuZWxlbWVudHMob3B0aW9ucyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aGlzLnN0cmlwZVNlcnZpY2UuZWxlbWVudHMoKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICAgIGNvbWJpbmVMYXRlc3QoXG4gICAgICBlbGVtZW50cyQsXG4gICAgICB0aGlzLm9wdGlvbnMkLmFzT2JzZXJ2YWJsZSgpLnBpcGUoZmlsdGVyKG9wdGlvbnMgPT4gQm9vbGVhbihvcHRpb25zKSkpXG4gICAgKS5zdWJzY3JpYmUoKFtlbGVtZW50cywgb3B0aW9uc10pID0+IHtcbiAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRzLmNyZWF0ZSgnY2FyZCcsIG9wdGlvbnMpO1xuXG4gICAgICB0aGlzLmVsZW1lbnQub24oJ2JsdXInLCBldiA9PlxuICAgICAgICB0aGlzLm9uLmVtaXQoe1xuICAgICAgICAgIGV2ZW50OiBldixcbiAgICAgICAgICB0eXBlOiAnYmx1cidcbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICAgIHRoaXMuZWxlbWVudC5vbignY2hhbmdlJywgZXYgPT5cbiAgICAgICAgdGhpcy5vbi5lbWl0KHtcbiAgICAgICAgICBldmVudDogZXYsXG4gICAgICAgICAgdHlwZTogJ2NoYW5nZSdcbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICAgIHRoaXMuZWxlbWVudC5vbignY2xpY2snLCBldiA9PlxuICAgICAgICB0aGlzLm9uLmVtaXQoe1xuICAgICAgICAgIGV2ZW50OiBldixcbiAgICAgICAgICB0eXBlOiAnY2xpY2snXG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgICB0aGlzLmVsZW1lbnQub24oJ2ZvY3VzJywgZXYgPT5cbiAgICAgICAgdGhpcy5vbi5lbWl0KHtcbiAgICAgICAgICBldmVudDogZXYsXG4gICAgICAgICAgdHlwZTogJ2ZvY3VzJ1xuICAgICAgICB9KVxuICAgICAgKTtcblxuICAgICAgdGhpcy5lbGVtZW50Lm9uKCdyZWFkeScsIGV2ID0+XG4gICAgICAgIHRoaXMub24uZW1pdCh7XG4gICAgICAgICAgZXZlbnQ6IGV2LFxuICAgICAgICAgIHR5cGU6ICdyZWFkeSdcbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICAgIHRoaXMuZWxlbWVudC5tb3VudCh0aGlzLnN0cmlwZUNhcmQubmF0aXZlRWxlbWVudCk7XG5cbiAgICAgIHRoaXMuY2FyZC5lbWl0KHRoaXMuZWxlbWVudCk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0Q2FyZCgpOiBTdHJpcGVFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xuICB9XG59XG4iXX0=