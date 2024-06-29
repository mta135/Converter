import { Injectable } from "@angular/core";

import { Helper } from "../helper/convert.helper";
import { CurrencyRate } from "../models/currencyrate/currencyrate.model";
import { CurrencyRateService } from "../services/currencyrate.service";


@Injectable({
    providedIn: 'root' // This makes the service available throughout the application
})

export class CurrencyRateRepository {

    private currencyRates: CurrencyRate[] = [];

    constructor(service: CurrencyRateService) {
        service.GetCurrencyRates().subscribe(data => {

            var helper = new Helper();
            this.currencyRates = helper.SetCurrencyRate(data);
        });
    }

    GetCurrencyRates(): CurrencyRate[] {
        return this.currencyRates;
    }


}