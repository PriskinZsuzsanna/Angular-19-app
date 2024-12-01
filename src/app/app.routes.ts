import { Routes } from '@angular/router';
import { SeasonsComponent } from './components/seasons/seasons.component';

export const routes: Routes = [
  { path: '', redirectTo: 'seasons', pathMatch: 'full' },
  { path: 'seasons', component: SeasonsComponent }
];
