import { Injectable } from "@angular/core";
import { Currency, CurrencyRate } from "./currency.model";
import { CurrencyRateService } from "./currencyrate.service";
import { Helper } from "../helper/convert.helper";


@Injectable()
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