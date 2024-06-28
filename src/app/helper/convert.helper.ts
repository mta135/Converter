import { Currency, CurrencyRate } from "../models/currencyrate/currencyrate.model";

export class Helper {

    // public SetDefaultCurrencyRates(name: string, currencies: Currency[]): Currency[] {
    //     let tempCurrency: Currency[] = [];
    //     let rate = currencies.find(x => x.CurrencyName == name)?.CurrencyRate;

    //     return tempCurrency;
    // }


    SetCurrencyRate(data: any): CurrencyRate[] {
        var currencyRates: CurrencyRate[] = [];
        for (var key in data.rates) {

            var rate = data.rates[key];
            currencyRates.push(new CurrencyRate(rate, key));
        }
        return currencyRates;
    }

}