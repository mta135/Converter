import { Routes } from '@angular/router';
import { ConverterComponent } from './component/converter/converter.component';

export const routes: Routes = [
    { path: '', redirectTo: 'converter', pathMatch: 'full' },
    { path: 'converter', component: ConverterComponent }
];
