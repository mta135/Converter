import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";



@Injectable()
export class CurrencyRateService {

    constructor(private http: HttpClient) { }

    GetCurrencyRates(): Observable<any> {
        return this.http.get('https://open.er-api.com/v6/latest/EUR');
    }

}