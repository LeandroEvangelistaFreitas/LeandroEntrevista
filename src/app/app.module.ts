import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextDefaultComponent } from './components/text-default/text-default.component';
import { TitleComponent } from './components/title/title.component';
import { FormInitialComponent } from './page/form-initial/form-initial.component';
import { FormSimulationComponent } from './page/form-simulation/form-simulation.component';
import { OfferComponent } from './page/offer/offer.component';
import { SuccessComponent } from './page/success/success.component';

import { IConfig, NgxMaskModule } from 'ngx-mask';

export const options: Partial<null | IConfig> | (() => Partial<IConfig>) = null;

const module = [
  MatInputModule,
  FormsModule,
  ReactiveFormsModule,
  MatDatepickerModule,
  MatNativeDateModule,
  BrowserModule,
  BrowserAnimationsModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatFormFieldModule,
  CurrencyMaskModule,
  MatIconModule,
  NgxMaskModule.forRoot(),
]
@NgModule({
  declarations: [
    AppComponent,
    TextDefaultComponent,
    TitleComponent,
    FormInitialComponent,
    FormSimulationComponent,
    OfferComponent,
    SuccessComponent,
  ],
  imports: [
    AppRoutingModule,
    NgbModule,
    module,
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },

  ],
  bootstrap: [AppComponent],
  exports: [
    module
  ]
})
export class AppModule { }
