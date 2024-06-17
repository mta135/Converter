import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { OpenApiUrls } from '../apiruls/openerapi.url';


@Injectable({
  providedIn: 'root'
})

export class CurrencyService {
  constructor(private http: HttpClient) { }

  GetCurrencyRates(): Observable<any> {
    return this.http.get(OpenApiUrls.GetOpenErUrl);
  }

}
