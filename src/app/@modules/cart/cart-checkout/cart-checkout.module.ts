import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CartCheckoutComponent } from "./cart-checkout.component";
import { TranslateModule } from "@ngx-translate/core";
import { NbInputModule, NbCardModule, NbStepperModule, NbCheckboxModule, NbButtonModule, NbUserModule, NbProgressBarModule } from "@nebular/theme";
import { SharedModule } from "@shared/shared.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [CartCheckoutComponent],
    imports: [
        CommonModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        NbProgressBarModule,
        TranslateModule,
        NbInputModule,
        NbCardModule,
        NbStepperModule,
        NbCheckboxModule,
        NbButtonModule,
        NbUserModule,
    ],
    exports: [CartCheckoutComponent],
})
export class CartCheckoutModule {}