import { Component } from '@angular/core';

@Component({
  selector: 'app-torzsvasarlo-urlap',
  templateUrl: './torzsvasarlo-urlap.component.html',
  styleUrls: ['./torzsvasarlo-urlap.component.css']
})
export class TorzsvasarloUrlapComponent {

  _nev:string ="";
  _id:string = "";
  _szulDatum:Date= new Date();
  _megyjegyzes:string = "";
  _hirlevel = false;

  vasarlok:Torzsvasarlo[] = [];

  felvitel():void
  {
  var aktVasarlo: Torzsvasarlo = { 
    nev: this._nev,
    id: this._id,
    szulDatum: this._szulDatum,
    megjegyzes: this._megyjegyzes,
    hirlevel:this._hirlevel
  }

  this.vasarlok.push(aktVasarlo);
  }

  nev:string ="";
  id:string = "";
  szulDatum:Date= new Date();
  megyjegyzes:string = "";
  hirlevel = false;
}

export interface Torzsvasarlo
{
  nev:string;
  id:string;
  szulDatum:Date;
  megjegyzes:string;
  hirlevel:boolean
}

