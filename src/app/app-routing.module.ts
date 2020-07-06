import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ScreeningDetailComponent } from './components/screening-detail/screening-detail.component';
import { CustomerOverviewComponent } from './components/customer-overview/customer-overview.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'customers', component: CustomerOverviewComponent},
  {path: 'screening/:uuid', component: ScreeningDetailComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
