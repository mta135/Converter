import { CurrencyRate } from "../models/currencyrate/currencyrate.model";

export class Helper {

    SetCurrencyRate(data: any): CurrencyRate[] {
        var currencyRates: CurrencyRate[] = [];

        for (var key in data.rates) {

            var rate = data.rates[key];

            var currency = new CurrencyRate();
            currency.CurrencyName = key;
            currency.CurrencyRate = rate;

            currencyRates.push(currency);
        }
        return currencyRates;
    }

}