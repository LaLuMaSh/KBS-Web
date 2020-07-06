import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KbsTitleComponent } from './components/kbs-title/kbs-title.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatDatepickerModule,
  MatDividerModule,
  MatFormFieldModule,
  MatInputModule,
  MatNativeDateModule, MatOptionModule, MatProgressSpinnerModule, MatSelectModule, MatSidenavModule, MatTableModule, MatToolbarModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScreeningListComponent } from './components/screening-list/screening-list.component';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { ScreeningCardComponent } from './components/screening-card/screening-card.component';
import { ScreeningDetailComponent } from './components/screening-detail/screening-detail.component';
import { CustomerOverviewComponent } from './components/customer-overview/customer-overview.component';
import { AdminComponent } from './components/admin/admin.component';
import { MovieFormComponent } from './components/movie-form/movie-form.component';

@NgModule({
  declarations: [
    AppComponent,
    KbsTitleComponent,
    HomeComponent,
    ScreeningListComponent,
    ScreeningCardComponent,
    ScreeningDetailComponent,
    CustomerOverviewComponent,
    AdminComponent,
    MovieFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDividerModule,
    HttpClientModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    FormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatOptionModule,
    MatSelectModule,
    MatTableModule
  ],
  providers: [MatDatepickerModule, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
