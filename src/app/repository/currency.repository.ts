import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CurrencyService } from "../services/currency.service";
import { Currency } from "../models/exchange/currency.model";


@Injectable({
    providedIn: 'root' // This makes the service available throughout the application
})

export class CurrencyRepository {

    constructor(private service: CurrencyService) { }

    public GetCurrency(): Observable<Currency[]> {
        return this.service.GetCurrency();
    }

}