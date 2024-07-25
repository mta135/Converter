import { CurrencyRate } from "../currencyrate/currencyrate.model";
import { Currency } from "./currency.model";

export class ExchangeModel {
    public Currencies: Currency[] = [];

    public currencyRates: CurrencyRate[] = [];

    public Rate: number | undefined;

    public FromDefaultId: string = "";

    public ToDefaultId: string = "";

    public fromCurrency: string = "";

    public toCurrency: string = "";

    public fromCurrencyId: string = "";

    public toCurrencyId: string = "";
}