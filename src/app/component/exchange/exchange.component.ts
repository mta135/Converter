import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CurrencyRateRepository } from "../../repository/currencyrate.repository";
import { AfterContentChecked, ChangeDetectorRef, Component } from "@angular/core";
import { MaterialModule } from "../../helper/material.module";
import { ExchangeModel } from "../../models/exchange/exchange.model";
import { CurrencyRepository } from "../../repository/currency.repository";
import { Helper } from "../../helper/convert.helper";

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


    constructor(private cdr: ChangeDetectorRef, private currencyRep: CurrencyRepository, private currencyRateRep: CurrencyRateRepository) {
        this.SetCurrencies();
        this.SetFromCurrencyRates("MDL", "EUR");
    }

    private SetCurrencies() {
        this.currencyRep.GetCurrency().subscribe(data => {
            this.exchangeModel.Currencies = data;
            this.SetDefault();
        });
    }

    private SetDefault(): void {

        setTimeout(() => {
            this.exchangeModel.FromDefaultId = "MDL"
            this.exchangeModel.ToDefaultId = "EUR";
        }, 0);
    }

    //#region  input text box

    GetFromCurrencyValue(): void {
        debugger;
        var rate = this.exchangeModel.Rate;
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



    private SetFromCurrencyRates(From: string, To: string) {

        this.currencyRateRep.GetCurrencyRate(From).subscribe(data => {
            this.exchangeModel.currencyRates = Helper.ConvertToCurrencyRates(data);
            this.exchangeModel.Rate = Helper.GetRate(this.exchangeModel.currencyRates, To);

        });
    }



    ngAfterContentChecked(): void {
        this.cdr.detectChanges();
    }
}
