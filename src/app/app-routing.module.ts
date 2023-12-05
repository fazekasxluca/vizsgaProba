import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooldalComponent } from './fooldal/fooldal.component';
import { RolunkComponent } from './rolunk/rolunk.component';
import { EladoAutokComponent } from './elado-autok/elado-autok.component';
import { ErrorComponent } from './error/error.component';
import { TorzsvasarloUrlapComponent } from './torzsvasarlo-urlap/torzsvasarlo-urlap.component';
import { AutoFelvitelComponent } from './auto-felvitel/auto-felvitel.component';

const routes: Routes = [
 {path:"fooldal",component:FooldalComponent},
 {path:"rolunk",component:RolunkComponent},
 {path:"eladoAutok",component:EladoAutokComponent},
 {path:"error",component:ErrorComponent},
 {path:"torzsvasarlo",component:TorzsvasarloUrlapComponent},
 {path:"autofelvitel",component:AutoFelvitelComponent},
 {path:"", redirectTo:"/fooldal",pathMatch:"full"},

 {path:"**",component:ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
