import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooldalComponent } from './fooldal/fooldal.component';
import { RolunkComponent } from './rolunk/rolunk.component';
import { EladoAutokComponent } from './elado-autok/elado-autok.component';
import { ErrorComponent } from './error/error.component';
import { TorzsvasarloUrlapComponent } from './torzsvasarlo-urlap/torzsvasarlo-urlap.component';
import { FormsModule } from '@angular/forms';
import { AutoFelvitelComponent } from './auto-felvitel/auto-felvitel.component';

@NgModule({
  declarations: [
    AppComponent,
    FooldalComponent,
    RolunkComponent,
    EladoAutokComponent,
    ErrorComponent,
    TorzsvasarloUrlapComponent,
    AutoFelvitelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
