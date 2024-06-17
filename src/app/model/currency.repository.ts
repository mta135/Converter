import { Injectable } from "@angular/core";
import { CurrencyModel, CurrencyRateModel } from "./currency.model";

@Injectable()
export class CurrencyRepository {

    private currencyRates: CurrencyRateModel[] = [];



    constructor() {

    }

}