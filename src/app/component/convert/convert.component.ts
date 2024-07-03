import { Component } from "@angular/core";
import { MaterialModule } from "../../helper/material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CurrencyRateRepository } from "../../repository/currencyrate.repository";
import { CurrencyRate } from "../../models/currencyrate/currencyrate.model";
import { Helper } from "../../helper/convert.helper";
import { ConvertModel } from "../../models/convert/convert.model";

@Component({
    selector: "convert",
    templateUrl: 'convert.component.html',
    standalone: true,
    styleUrl: './convert.component.scss',
    imports: [MaterialModule, FormsModule, ReactiveFormsModule],
    providers: [CurrencyRateRepository]
})

export class ConvertComponent {

    public convertModel = new ConvertModel();

    constructor(currencyRateRepository: CurrencyRateRepository) {
        this.SetCurrencyRates(currencyRateRepository);
    }

    private SetCurrencyRates(currencyRateRepository: CurrencyRateRepository): void {
        currencyRateRepository.GetCurrencyRates().subscribe(data => {

            var helper = new Helper();
            this.convertModel.currencyRates = helper.ConvertToCurrencyRates(data);
            this.SetRatesDefaultValues(this.convertModel.currencyRates);
            console.log(this.convertModel.currencyRates);
        });
    }

    private SetRatesDefaultValues(currencyRate: CurrencyRate[]): void {
        var helper = new Helper();

        this.convertModel.FromDefaultId = helper.GetCurrencyRateId(currencyRate, "EUR");
        this.convertModel.ToDefaultId = helper.GetCurrencyRateId(currencyRate, "MDL");
    }

    TestClick() {
        debugger;
        var abc = this.convertModel.fromCurrencyId;
        alert("This is an alert..." + this.convertModel.currencyRates)
    }

    //#region  input text box

    GetFromCurrencyValue(event: Event): string {
        debugger;

        var result: number = this.ConvertRate(parseInt(this.convertModel.fromCurrency), this.convertModel.toCurrencyId);

        if (isNaN(result))
            this.convertModel.toCurrency = "";
        else
            this.convertModel.toCurrency = result.toFixed(2).toString();

        var value = (event.target as HTMLInputElement).value;
        console.log(value);

        return (event.target as HTMLInputElement).value;
    }

    GetToCurrency(toCurrency: string) {
        debugger;
        var value = this.convertModel.toCurrency;
        this.convertModel.fromCurrency = value;

        console.log(toCurrency);
    }

    //#endregion

    //#region Drop Down

    onFoodSelection1() {
        debugger;
        var vaalue = this.convertModel.currencyRates;
        console.log(this.convertModel.fromCurrencyId);
    }

    onFoodSelection2() {
        debugger;
        var vaalue = this.convertModel.currencyRates;
        console.log(this.convertModel.fromCurrencyId);
    }

    //#endregion

    private ConvertRate(from: number, toRateId: string): number {

        var helper = new Helper();
        var currency = helper.GetCurrencyById(this.convertModel.currencyRates, parseInt(toRateId));
        var rate = currency.CurrencyRate;

        var result = from * rate;

        return result;
    }

}


