/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-stripe.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { LazyStripeAPILoader } from './services/api-loader.service';
import { StripeService } from './services/stripe.service';
import { StripeFactoryService } from './services/stripe-factory.service';
import { WindowRef } from './services/window-ref.service';
import { DocumentRef } from './services/document-ref.service';
import { STRIPE_OPTIONS, STRIPE_PUBLISHABLE_KEY } from './interfaces/stripe';
import { StripeCardComponent } from './components/stripe-card.component';
export class NgxStripeModule {
    /**
     * @param {?=} publishableKey
     * @param {?=} options
     * @return {?}
     */
    static forRoot(publishableKey, options) {
        return {
            ngModule: NgxStripeModule,
            providers: [
                LazyStripeAPILoader,
                StripeService,
                StripeFactoryService,
                WindowRef,
                DocumentRef,
                {
                    provide: STRIPE_PUBLISHABLE_KEY,
                    useValue: publishableKey
                },
                {
                    provide: STRIPE_OPTIONS,
                    useValue: options
                }
            ]
        };
    }
    /**
     * @param {?=} publishableKey
     * @param {?=} options
     * @return {?}
     */
    static forChild(publishableKey, options) {
        return {
            ngModule: NgxStripeModule,
            providers: [
                LazyStripeAPILoader,
                StripeService,
                StripeFactoryService,
                WindowRef,
                DocumentRef,
                {
                    provide: STRIPE_PUBLISHABLE_KEY,
                    useValue: publishableKey
                },
                {
                    provide: STRIPE_OPTIONS,
                    useValue: options
                }
            ]
        };
    }
}
NgxStripeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [StripeCardComponent],
                exports: [StripeCardComponent]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXN0cmlwZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtc3RyaXBlLyIsInNvdXJjZXMiOlsibGliL25neC1zdHJpcGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRXpFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFOUQsT0FBTyxFQUVMLGNBQWMsRUFDZCxzQkFBc0IsRUFDdkIsTUFBTSxxQkFBcUIsQ0FBQztBQUM3QixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQU16RSxNQUFNLE9BQU8sZUFBZTs7Ozs7O0lBQ25CLE1BQU0sQ0FBQyxPQUFPLENBQ25CLGNBQXVCLEVBQ3ZCLE9BQWlCO1FBRWpCLE9BQU87WUFDTCxRQUFRLEVBQUUsZUFBZTtZQUN6QixTQUFTLEVBQUU7Z0JBQ1QsbUJBQW1CO2dCQUNuQixhQUFhO2dCQUNiLG9CQUFvQjtnQkFDcEIsU0FBUztnQkFDVCxXQUFXO2dCQUNYO29CQUNFLE9BQU8sRUFBRSxzQkFBc0I7b0JBQy9CLFFBQVEsRUFBRSxjQUFjO2lCQUN6QjtnQkFDRDtvQkFDRSxPQUFPLEVBQUUsY0FBYztvQkFDdkIsUUFBUSxFQUFFLE9BQU87aUJBQ2xCO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRU0sTUFBTSxDQUFDLFFBQVEsQ0FDcEIsY0FBdUIsRUFDdkIsT0FBaUI7UUFFakIsT0FBTztZQUNMLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFNBQVMsRUFBRTtnQkFDVCxtQkFBbUI7Z0JBQ25CLGFBQWE7Z0JBQ2Isb0JBQW9CO2dCQUNwQixTQUFTO2dCQUNULFdBQVc7Z0JBQ1g7b0JBQ0UsT0FBTyxFQUFFLHNCQUFzQjtvQkFDL0IsUUFBUSxFQUFFLGNBQWM7aUJBQ3pCO2dCQUNEO29CQUNFLE9BQU8sRUFBRSxjQUFjO29CQUN2QixRQUFRLEVBQUUsT0FBTztpQkFDbEI7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDOzs7WUFuREYsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLG1CQUFtQixDQUFDO2dCQUNuQyxPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQzthQUMvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IExhenlTdHJpcGVBUElMb2FkZXIgfSBmcm9tICcuL3NlcnZpY2VzL2FwaS1sb2FkZXIuc2VydmljZSc7XG5pbXBvcnQgeyBTdHJpcGVTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9zdHJpcGUuc2VydmljZSc7XG5pbXBvcnQgeyBTdHJpcGVGYWN0b3J5U2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvc3RyaXBlLWZhY3Rvcnkuc2VydmljZSc7XG5cbmltcG9ydCB7IFdpbmRvd1JlZiB9IGZyb20gJy4vc2VydmljZXMvd2luZG93LXJlZi5zZXJ2aWNlJztcbmltcG9ydCB7IERvY3VtZW50UmVmIH0gZnJvbSAnLi9zZXJ2aWNlcy9kb2N1bWVudC1yZWYuc2VydmljZSc7XG5cbmltcG9ydCB7XG4gIE9wdGlvbnMsXG4gIFNUUklQRV9PUFRJT05TLFxuICBTVFJJUEVfUFVCTElTSEFCTEVfS0VZXG59IGZyb20gJy4vaW50ZXJmYWNlcy9zdHJpcGUnO1xuaW1wb3J0IHsgU3RyaXBlQ2FyZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9zdHJpcGUtY2FyZC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtTdHJpcGVDYXJkQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1N0cmlwZUNhcmRDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIE5neFN0cmlwZU1vZHVsZSB7XG4gIHB1YmxpYyBzdGF0aWMgZm9yUm9vdChcbiAgICBwdWJsaXNoYWJsZUtleT86IHN0cmluZyxcbiAgICBvcHRpb25zPzogT3B0aW9uc1xuICApOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE5neFN0cmlwZU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBMYXp5U3RyaXBlQVBJTG9hZGVyLFxuICAgICAgICBTdHJpcGVTZXJ2aWNlLFxuICAgICAgICBTdHJpcGVGYWN0b3J5U2VydmljZSxcbiAgICAgICAgV2luZG93UmVmLFxuICAgICAgICBEb2N1bWVudFJlZixcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IFNUUklQRV9QVUJMSVNIQUJMRV9LRVksXG4gICAgICAgICAgdXNlVmFsdWU6IHB1Ymxpc2hhYmxlS2V5XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBTVFJJUEVfT1BUSU9OUyxcbiAgICAgICAgICB1c2VWYWx1ZTogb3B0aW9uc1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZm9yQ2hpbGQoXG4gICAgcHVibGlzaGFibGVLZXk/OiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IE9wdGlvbnNcbiAgKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBOZ3hTdHJpcGVNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgTGF6eVN0cmlwZUFQSUxvYWRlcixcbiAgICAgICAgU3RyaXBlU2VydmljZSxcbiAgICAgICAgU3RyaXBlRmFjdG9yeVNlcnZpY2UsXG4gICAgICAgIFdpbmRvd1JlZixcbiAgICAgICAgRG9jdW1lbnRSZWYsXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBTVFJJUEVfUFVCTElTSEFCTEVfS0VZLFxuICAgICAgICAgIHVzZVZhbHVlOiBwdWJsaXNoYWJsZUtleVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogU1RSSVBFX09QVElPTlMsXG4gICAgICAgICAgdXNlVmFsdWU6IG9wdGlvbnNcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==