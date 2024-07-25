import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Helper } from "../helper/convert.helper";
import { Currency } from "../models/exchange/currency.model";

@Injectable({
    providedIn: 'root'
})

export class CurrencyService {
    constructor() { }

    public GetCurrency(): Observable<Currency[]> {
        return of(Helper.GetCurrencies());
    }
}