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
        });
    }

    private SetRatesDefaultValues(currencyRate: CurrencyRate[]): void {
        var helper = new Helper();

        this.convertModel.FromDefaultId = helper.GetCurrencyRateId(currencyRate, "EUR");
        this.convertModel.ToDefaultId = helper.GetCurrencyRateId(currencyRate, "MDL");
    }

    TestClick() {
        debugger;
        var aaa = this.convertModel.fromCurrencyId;
        alert("This is an alert..." + this.convertModel.currencyRates)
    }


    GetToCurrency(toCurrency: string) {
        debugger;
        console.log(toCurrency);
    }

    GetFromCurrencyValue(event: Event): string {
        debugger;
        var value = (event.target as HTMLInputElement).value;

        console.log(value);
        return (event.target as HTMLInputElement).value;
    }
    onFoodSelection1() {
        debugger;
        var vaalue = this.convertModel.currencyRates;
        console.log(this.convertModel.fromCurrencyId);
    }

}


