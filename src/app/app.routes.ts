import { Routes } from '@angular/router';
import { ConvertComponent } from './component/convert/convert.component';
import { ExchageComponent } from './component/exchange/exchange.component';

export const routes: Routes = [
    { path: '', redirectTo: 'exchange', pathMatch: 'full' },
    { path: 'convert', component: ConvertComponent },
    { path: 'exchange', component: ExchageComponent }
];
