import { Currency } from "./currency.model";

export class ExchangeModel {
    public Currencies: Currency[] = [];

    public FromDefaultId: number | undefined;

    public ToDefaultId: number | undefined;

    public fromCurrency: string = "";

    public toCurrency: string = "";

    public fromCurrencyId: string = "";

    public toCurrencyId: string = "";
}