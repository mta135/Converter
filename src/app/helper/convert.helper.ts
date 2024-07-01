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

    public GetRatesById(currencyRate: CurrencyRate[], Id: number): number | undefined {
        var rate = currencyRate.find(x => x.Id == Id)?.CurrencyRate;
        return rate;
    }

}