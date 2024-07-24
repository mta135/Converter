import { Routes } from '@angular/router';
import { ConvertComponent } from './component/convert/convert.component';
import { ExchangeComponent } from './component/exchange/exchange.component';

export const routes: Routes = [
    { path: '', redirectTo: 'convert', pathMatch: 'full' },
    { path: 'convert', component: ConvertComponent },
    { path: 'exchange', component: ExchangeComponent }
];
