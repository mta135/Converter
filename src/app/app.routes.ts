import { Routes } from '@angular/router';
import { ConvertComponent } from './convert/convert.component';

export const routes: Routes = [
    { path: '', redirectTo: 'convert', pathMatch: 'full' },
    { path: 'convert', component: ConvertComponent }
];
