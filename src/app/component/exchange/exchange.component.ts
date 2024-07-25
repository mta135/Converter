import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CurrencyRateRepository } from "../../repository/currencyrate.repository";
import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { Helper } from "../../helper/convert.helper";
import { MaterialModule } from "../../helper/material.module";
import { ExchangeModel } from "../../models/exchange/exchange.model";
import { Currency } from "../../models/exchange/currency.model";

@Component({
    selector: "convert",
    templateUrl: 'exchange.component.html',
    standalone: true,
    styleUrl: './exchange.component.scss',
    imports: [MaterialModule, FormsModule, ReactiveFormsModule],
    providers: [CurrencyRateRepository]
})


export class ExchangeComponent {
    public exchangeModel = new ExchangeModel();

    constructor(private cdr: ChangeDetectorRef) {
        this.GetCurrencies();
        this.SetDefault(this.exchangeModel.Currencies);
    }

    private GetCurrencies() {
        this.exchangeModel.Currencies = Helper.GetCurrencies();
    }

    private SetDefault(currencies: Currency[]): void {
        this.exchangeModel.FromDefaultId = Helper.GetCurrencyId(currencies, "MDL");
        this.exchangeModel.ToDefaultId = Helper.GetCurrencyId(currencies, "EUR");
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


    private ChangeDetector() {
        this.cdr.detectChanges();
    }

}
