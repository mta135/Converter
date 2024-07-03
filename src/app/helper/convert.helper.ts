import { numberAttribute } from "@angular/core";
import { CurrencyRate } from "../models/currencyrate/currencyrate.model";

export class Helper {

    ConvertToCurrencyRates(data: any): CurrencyRate[] {
        var currencyRates: CurrencyRate[] = [];

        var Id: number = 0;
        for (var key in data.rates) {

            var rate = data.rates[key];

            var currency = new CurrencyRate();
            currency.Id = ++Id;
            currency.CurrencyName = key;
            currency.CurrencyRate = rate;

            currencyRates.push(currency);
        }
        return currencyRates;
    }

    public GetCurrencyRateId(currencyRate: CurrencyRate[], name: string): number | undefined {
        var Id = currencyRate.find(x => x.CurrencyName == name)?.Id;
        return Id;
    }

    public GetCurrencyById(currencyRate: CurrencyRate[], Id: number): CurrencyRate {

        var currency: any;
        currency = currencyRate.find(x => x.Id == Id);

        return currency;
    }
}