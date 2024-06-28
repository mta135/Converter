import { Currency, CurrencyRate } from "../models/currencyrate/currencyrate.model";

export class Helper {


    //#region  Nu sunt sigur daca se vafolosi aceastca metoda

    SetCurrency(data: any): Currency[] {
        let tempCurrency: Currency[] = [];

        for (var key in data.rates) {
            var rate = data.rates[key];
            let currency: Currency = { CurrencyRate: rate, CurrencyName: key, };
            tempCurrency.push(currency);
        }
        return tempCurrency;
    }


    //#endregion


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