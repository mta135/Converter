import { Component } from "@angular/core";
import { MaterialModule } from "../../helper/material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CurrencyRateRepository } from "../../repository/currencyrate.repository";
import { CurrencyRate } from "../../models/currencyrate/currencyrate.model";

@Component({
    selector: "convert",
    templateUrl: 'convert.component.html',
    standalone: true,
    styleUrl: './convert.component.scss',
    imports: [MaterialModule, FormsModule, ReactiveFormsModule],
    providers: [CurrencyRateRepository]
})

export class ConvertComponent {

    constructor(private currencyRateRepository: CurrencyRateRepository) { }

    get currencyRates(): CurrencyRate[] {
        return this.currencyRateRepository.GetCurrencyRates();
    }

    TestClick() {
        debugger;
        var value = this.currencyRateRepository.GetCurrencyRates();
        alert("This is an alert...")
    }

}


