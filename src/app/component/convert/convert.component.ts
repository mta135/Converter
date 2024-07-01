import { Component } from "@angular/core";
import { MaterialModule } from "../../helper/material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CurrencyRateRepository } from "../../repository/currencyrate.repository";
import { CurrencyRate } from "../../models/currencyrate/currencyrate.model";
import { Helper } from "../../helper/convert.helper";

@Component({
    selector: "convert",
    templateUrl: 'convert.component.html',
    standalone: true,
    styleUrl: './convert.component.scss',
    imports: [MaterialModule, FormsModule, ReactiveFormsModule],
    providers: [CurrencyRateRepository]
})

export class ConvertComponent {

    public currencyRates: CurrencyRate[] = [];
    public FromDefaultId: number | undefined;
    public ToDefaultId: number | undefined;

    public fromCurrency: string = "";
    public toCurrency: string = "";

    public fromCurrencyId: string = "";
    public toCurrencyId: string = "";

    constructor(currencyRateRepository: CurrencyRateRepository) {
        this.SetCurrencyRates(currencyRateRepository);
    }

    private SetCurrencyRates(currencyRateRepository: CurrencyRateRepository): void {
        currencyRateRepository.GetCurrencyRates().subscribe(data => {

            var helper = new Helper();
            this.currencyRates = helper.ConvertToCurrencyRates(data);
            this.SetRatesDefaultValues(this.currencyRates);
        });
    }

    private SetRatesDefaultValues(currencyRate: CurrencyRate[]): void {
        var helper = new Helper();

        this.FromDefaultId = helper.GetCurrencyRateId(currencyRate, "EUR");
        this.ToDefaultId = helper.GetCurrencyRateId(currencyRate, "MDL");
    }

    TestClick() {
        debugger;
        var aaa = this.fromCurrencyId;
        alert("This is an alert..." + this.currencyRates)
    }

    GetFromCurrency(fromCurrency: string) {
        console.log(fromCurrency);
    }

    GetToCurrency(toCurrency: string) {
        console.log(toCurrency);
    }

    GetFromCurrencyValue(event: Event): string {
        var value = (event.target as HTMLInputElement).value;

        console.log(value);
        return (event.target as HTMLInputElement).value;
    }
    onFoodSelection1() {
        debugger;
        var vaalue = this.currencyRates;
        console.log(this.fromCurrencyId);
    }

}


