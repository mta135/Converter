import { Currency } from "../model/currency.model";

export class Helpers {

    SetCurrency(data: any): Currency[] {
        let tempCurrency: Currency[] = [];

        for (var key in data.rates) {
            var rate = data.rates[key];
            let currency: Currency = { CurrencyRate: rate, CurrencyName: key, };
            tempCurrency.push(currency);
        }
        return tempCurrency;
    }
}