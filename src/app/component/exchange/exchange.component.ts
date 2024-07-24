import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../helper/material.module";
import { CurrencyRateRepository } from "../../repository/currencyrate.repository";
import { Component } from "@angular/core";

@Component({
    selector: "convert",
    templateUrl: 'exchange.component.html',
    standalone: true,
    styleUrl: './exchange.component.scss',
    imports: [MaterialModule, FormsModule, ReactiveFormsModule],
    providers: [CurrencyRateRepository]
})


export class ExchangeComponent {

}
