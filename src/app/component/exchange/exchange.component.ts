import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CurrencyRateRepository } from "../../repository/currencyrate.repository";
import { AfterContentChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component } from "@angular/core";
import { Helper } from "../../helper/convert.helper";
import { MaterialModule } from "../../helper/material.module";
import { ExchangeModel } from "../../models/exchange/exchange.model";

@Component({
    selector: "convert",
    templateUrl: 'exchange.component.html',
    standalone: true,
    styleUrl: './exchange.component.scss',


    imports: [MaterialModule, FormsModule, ReactiveFormsModule],
    providers: [CurrencyRateRepository]
})


export class ExchangeComponent implements AfterContentChecked {
    public exchangeModel = new ExchangeModel();

    constructor(private cdr: ChangeDetectorRef) {
        this.SetCurrencies();
    }
    private SetCurrencies() {
        this.exchangeModel.Currencies = Helper.GetCurrencies();
        this.SetDefault();
    }

    private SetDefault(): void {
        setTimeout(() => {
            this.exchangeModel.FromDefaultId = "MDL"
            this.exchangeModel.ToDefaultId = "EUR";
        }, 0);
    }

    //#region  input text box

    GetFromCurrencyValue(): void {

    }

    GetToCurrency() {

    }

    //#endregion

    //#region Drop Down

    onFoodSelection1() {

    }

    onFoodSelection2() {

    }

    //#endregion

    ngAfterContentChecked(): void {
        this.cdr.detectChanges();
    }
}
