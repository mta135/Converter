
export class CurrencyRate {
    private currencyRate: number;
    private currencyName: string;

    constructor() {
        this.currencyRate = 0;
        this.currencyName = "";
    }

    get CurrencyName(): string {
        return this.currencyName;
    }

    get CurrencyRate(): number {
        return this.currencyRate
    }

    set CurrencyName(value: string) {
        this.currencyName = value;
    }

    set CurrencyRate(value: number) {
        this.currencyRate = value;
    }

}