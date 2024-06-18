import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../helpers/material.module';
import { CurrencyService } from '../../services/currency.service';
import { Currency, CurrencyModel } from '../../model/currency.model';
import { Helpers } from '../../helpers/convert.helpers';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-converter',
  standalone: true,
  imports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './converter.component.html',
  styleUrl: './converter.component.scss'
})
export class ConverterComponent implements OnInit {

  public currencies: Currency[] = [];

  public TesCurrencyModel: CurrencyModel[] = [];

  selectedValue: undefined;

  constructor(private service: CurrencyService, private builder: FormBuilder) { }

  currencyForm = this.builder.group({
    currencyFrom: new FormControl(),
    currencyTo: new FormControl(),
    currencyTest: new FormControl()
  });


  ngOnInit(): void {
    this.BindCurrencyDropDown();
    this.TesCurrencyModel = this.SetTestCurrency();
  }


  private BindCurrencyDropDown(): void {
    this.service.GetCurrencyRates().subscribe(data => {
      const convertHelper = new Helpers();
      this.currencies = convertHelper.SetCurrency(data);
    });
  }






  TestJson() {
    debugger;

    var name = this.currencies.find(x => x.CurrencyName == 'USD')?.CurrencyName;

    this.currencyForm.controls['currencyTest'].setValue(name);


    // this.TesCurrencyModel = this.SetTestCurrency();
    // this.currencyForm.controls['currencyTest'].setValue(this.TesCurrencyModel);

  }


  SetTestCurrency(): CurrencyModel[] {

    let currencyArray: CurrencyModel[] = [];

    let currencyModel = new CurrencyModel;

    currencyModel.CurrencyName = "MDL";
    currencyModel.CurrencyRate = 111;

    currencyArray.push(currencyModel);

    let currencyModel1 = new CurrencyModel;

    currencyModel1.CurrencyName = "EUR";
    currencyModel1.CurrencyRate = 222;

    currencyArray.push(currencyModel1);

    let currencyModel3 = new CurrencyModel;

    currencyModel3.CurrencyName = "USD";
    currencyModel3.CurrencyRate = 333;

    currencyArray.push(currencyModel3);

    return currencyArray;

  }
}


