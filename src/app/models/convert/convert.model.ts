import { CurrencyRate } from "../currencyrate/currencyrate.model";

export class ConvertModel {

    public currencyRates: CurrencyRate[] = [];

    public FromDefaultId: number | undefined;

    public ToDefaultId: number | undefined;

    public fromCurrency: string = "";

    public toCurrency: string = "";

    public fromCurrencyId: string = "";

    public toCurrencyId: string = "";

}