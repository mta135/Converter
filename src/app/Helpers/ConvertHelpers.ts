import { Currency } from "../Model/Currency";

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



    // public SetDefaultCurrencyRates(name: string, currencies: Currency[]): Currency[] {
    //     let tempCurrency: Currency[] = [];
    //     let rate = currencies.find(x => x.CurrencyName == name)?.CurrencyRate;

    //     return tempCurrency;
    // }

}