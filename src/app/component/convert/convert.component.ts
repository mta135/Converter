import { ChangeDetectorRef, Component } from "@angular/core";
import { MaterialModule } from "../../helper/material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CurrencyRateRepository } from "../../repository/currencyrate.repository";
import { CurrencyRate } from "../../models/currencyrate/currencyrate.model";
import { Helper } from "../../helper/convert.helper";
import { ConvertModel } from "../../models/convert/convert.model";
import { ConvertTypeEnum } from "../../models/enums/convertype.enum";

@Component({
    selector: "convert",
    templateUrl: 'convert.component.html',
    standalone: true,
    styleUrl: './convert.component.scss',

    imports: [MaterialModule, FormsModule, ReactiveFormsModule],
    providers: [CurrencyRateRepository]
})

export class ConvertComponent {

    public convertModel = new ConvertModel();

    constructor(currencyRateRepository: CurrencyRateRepository, private cdr: ChangeDetectorRef) {
        this.SetCurrencyRates(currencyRateRepository);
    }

    private SetCurrencyRates(currencyRateRepository: CurrencyRateRepository): void {
        currencyRateRepository.GetCurrencyRates().subscribe(data => {

            var helper = new Helper();
            this.convertModel.currencyRates = helper.ConvertToCurrencyRates(data);
            this.SetRatesDefaultValues(this.convertModel.currencyRates);
            console.log(this.convertModel.currencyRates);
        });
    }

    private SetRatesDefaultValues(currencyRate: CurrencyRate[]): void {
        var helper = new Helper();

        this.convertModel.FromDefaultId = helper.GetCurrencyRateId(currencyRate, "EUR");
        this.convertModel.ToDefaultId = helper.GetCurrencyRateId(currencyRate, "MDL");
    }

    TestClick() {
        debugger;
        var abc = this.convertModel.fromCurrencyId;
        alert("This is an alert..." + this.convertModel.currencyRates)
    }

    //#region  input text box

    GetFromCurrencyValue(): void {
        if (this.convertModel.fromCurrency.length !== 0) {

            if (!Helper.IsDigit(this.convertModel.fromCurrency)) {
                this.ChangeDetector();
                this.Alert("Acest simbol: (" + this.convertModel.fromCurrency + ") nu este permis. Se accepta doar cifre. ", this.convertModel, ConvertTypeEnum.FromCurrency);
                return;
            }
            else {
                var result: number = this.ConvertFromCurrency(parseInt(this.convertModel.fromCurrency), this.convertModel.toCurrencyId);

                if (isNaN(result))
                    this.convertModel.toCurrency = "";
                else
                    this.convertModel.toCurrency = result.toFixed(2).toString();
            }

        } else {
            this.convertModel.toCurrency = "";
        }

    }

    GetToCurrency(toCurrency: string) {
        debugger;
        var value = this.convertModel.toCurrency;
        this.convertModel.fromCurrency = value;

        console.log(toCurrency);
    }

    //#endregion

    //#region Drop Down

    onFoodSelection1() {
        debugger;
        var vaalue = this.convertModel.currencyRates;
        console.log(this.convertModel.fromCurrencyId);
    }

    onFoodSelection2() {
        debugger;
        var vaalue = this.convertModel.currencyRates;
        console.log(this.convertModel.fromCurrencyId);
    }

    //#endregion

    private ConvertFromCurrency(from: number, toRateId: string): number {

        var helper = new Helper();
        var currency = helper.GetCurrencyById(this.convertModel.currencyRates, parseInt(toRateId));
        var rate = currency.CurrencyRate;

        var result = from * rate;

        return result;
    }


    private ChangeDetector() {
        this.cdr.detectChanges();
    }


    private Alert(alertText: string, convModel: ConvertModel, converType: ConvertTypeEnum): void {
        alert(alertText);
        this.Clear(converType, convModel);
    }

    private Clear(converType: ConvertTypeEnum, convModel: ConvertModel): void {

        switch (converType) {
            case ConvertTypeEnum.FromCurrency:
                convModel.fromCurrency = "";
                break;

            case ConvertTypeEnum.ToCurrency:
                convModel.toCurrency = "";
        }

    }
}


