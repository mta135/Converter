export interface Currency {
    CurrencyRate: number;
    CurrencyName: string;

}



export class CurrencyModel {
    CurrencyRate: number;
    CurrencyName: string;

    constructor() {
        this.CurrencyName = "";
        this.CurrencyRate = 0;
    }
}



export class CurrencyRateModel {

    constructor(
        currencyName: string,
        currencyRate: number) { }


}