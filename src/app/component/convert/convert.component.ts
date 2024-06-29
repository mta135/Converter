import { Component } from "@angular/core";
import { MaterialModule } from "../../helper/material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CurrencyRateRepository } from "../../repository/currencyrate.repository";
import { CurrencyRate } from "../../models/currencyrate/currencyrate.model";
import { CurrencyRateService } from "../../services/currencyrate.service";

@Component({
    selector: "convert",
    templateUrl: 'convert.component.html',
    standalone: true,
    styleUrl: './convert.component.scss',
    imports: [MaterialModule, FormsModule, ReactiveFormsModule],
    providers: [CurrencyRateRepository, CurrencyRateService]
})

export class ConvertComponent {

    constructor(private currencyRate: CurrencyRateRepository) { }

    get currencyRates(): CurrencyRate[] {
        return this.currencyRate.GetCurrencyRates();
    }

    TestClick() {
        debugger;
        var value = this.currencyRate.GetCurrencyRates();
        alert("This is an alert...")
    }

}


