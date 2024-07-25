import { Currency } from "../models/exchange/currency.model";
import { CurrencyRate } from "../models/currencyrate/currencyrate.model";

export class Helper {

    public static ConvertToCurrencyRates(data: any): CurrencyRate[] {
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

    public static GetCurrencyRateId(currencyRate: CurrencyRate[], name: string): number | undefined {
        var Id = currencyRate.find(x => x.CurrencyName == name)?.Id;
        return Id;
    }

    public static GetCurrencyId(currencies: Currency[], name: string): number | undefined {
        var Id = currencies.find(x => x.Name == name)?.Id;
        return Id;
    }

    public GetCurrencyById(currencyRate: CurrencyRate[], Id: number): CurrencyRate {

        var currency: any;
        currency = currencyRate.find(x => x.Id == Id);

        return currency;
    }

    public static IsDigit(inputValue: string): boolean {

        const numericValue = inputValue.replace(/[^0-9]/g, '');

        if (numericValue.length !== 0)
            return true

        return false;
    }


    public static GetCurrencies(): Currency[] {
        var currencies: Currency[] = [];

        currencies.push(new Currency(1, "MDL"));
        currencies.push(new Currency(2, "USD"));
        currencies.push(new Currency(3, "EUR"));
        currencies.push(new Currency(4, "RUB"));
        currencies.push(new Currency(5, "RON"));
        currencies.push(new Currency(6, "UAH"));

        return currencies;
    }
}