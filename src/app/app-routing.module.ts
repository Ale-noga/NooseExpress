import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetPageComponent } from './pages/budget-page/budget-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

const routes: Routes = [

  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: LandingPageComponent},
  {path: 'budget', component: BudgetPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[{
    provide:LocationStrategy,
    useClass:HashLocationStrategy
  }]
})
export class AppRoutingModule { }
