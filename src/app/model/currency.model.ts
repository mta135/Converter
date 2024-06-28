//#region Nu stiu daca pe viitor se vor folosi aceste clase...

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

//#endregion


// clasa care se va folosi ...
export class CurrencyRate {
    constructor(CurrencyRate: number, CurrencyName: string) { }

}