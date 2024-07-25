import { Injectable } from "@angular/core";

import { CurrencyRateService } from "../services/currencyrate.service";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root' // This makes the service available throughout the application
})

export class CurrencyRateRepository {

    constructor(private service: CurrencyRateService) { }

    public GetCurrencyRates(): Observable<any> {
        return this.service.GetCurrencyRates();
    }

    public GetCurrencyRate(currencyName: string): Observable<any> {
        return this.service.GetCurrencyRate(currencyName);
    }
}