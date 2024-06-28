import { Component } from "@angular/core";
import { MaterialModule } from "../helper/material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@Component({
    selector: "convert",
    templateUrl: 'convert.component.html',
    standalone: true,
    styleUrl: './convert.component.scss',
    imports: [MaterialModule, FormsModule, ReactiveFormsModule],
})

export class ConvertComponent {

    TestClick() {

    }

}


