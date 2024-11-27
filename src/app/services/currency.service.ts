import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Currency } from "../models/exchange/currency.model";

@Injectable({
    providedIn: 'root'
})

export class CurrencyService {
    constructor() { }

    public GetCurrency(): Observable<Currency[]> {
        return of(this.GetCurrencies());
    }

    public GetCurrencies(): Currency[] {
        var currencies: Currency[] = [];

        currencies.push(new Currency("MDL", "MDL"));
        currencies.push(new Currency("USD", "USD"));
        currencies.push(new Currency("EUR", "EUR"));
        currencies.push(new Currency("RUB", "RUB"));
        currencies.push(new Currency("RON", "RON"));
        currencies.push(new Currency("UAH", "UAH"));

        return currencies;
    }
}