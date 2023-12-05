import { Component } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-auto-felvitel',
  templateUrl: './auto-felvitel.component.html',
  styleUrls: ['./auto-felvitel.component.css']
})
export class AutoFelvitelComponent {

  _gyarto:string="";
  _tipus:string="";
  _rendszam:number=0;
  _hengerUrTartalom:number=0;

  autokTomb:Auto[] = [];

felvitel():void{

 var auto:Auto = {

    gyarto:this._gyarto,
    tipus:this._tipus,
    rendszam:this._rendszam,
    hengerUrTaratalom:this._hengerUrTartalom
  }

  this.autokTomb.push(auto);
}



legNagyobbHenurTart(auto:Auto[]):number
{
  if(auto.length === 0)
  {
    return 0;
  }

  var maxAutoHeng:Auto = auto[0];
   
  for(var i:number=1; i < auto.length;i++)
  {
    if(maxAutoHeng.hengerUrTaratalom < auto[i].hengerUrTaratalom)
      {
        
        maxAutoHeng = auto[i];
      
      }
  }
  return maxAutoHeng.rendszam;
}

elsoTalalat = "";
elsoOpelTipus(autoT:Auto[]):string
{
var elsoElem= autoT[0];
var szamlalo:number = 0;
  while(szamlalo < autoT.length && !(autoT[szamlalo].gyarto == "Opel"))
  {
     szamlalo++;
      
     if(szamlalo < this.autokTomb.length)
     {
       this.elsoTalalat = elsoElem.tipus;
     }

  }

  return this.elsoTalalat;
 
}

 dbOsszesen:number = 0;
ezerOtszaznalNagyobb(autokTomb:Auto[]):number
{

for(var i:number = 0; i <autokTomb.length;i++)
{
  if( autokTomb[i].hengerUrTaratalom > 1500)
  {
    this.dbOsszesen += autokTomb[i].hengerUrTaratalom;

  }
}
return  this.dbOsszesen;
}

maxHengUrTart:number = 0;
talaltElsoTipus: string = "";
db1500cmm:number = 0;

osszesFVG():void
{
    this.maxHengUrTart= this.legNagyobbHenurTart(this.autokTomb);
  this.talaltElsoTipus = this.elsoOpelTipus(this.autokTomb);
  this.db1500cmm = this.ezerOtszaznalNagyobb(this.autokTomb);
}

}

export interface Auto{

  gyarto:string;
  tipus:string;
  rendszam:number;
  hengerUrTaratalom:number

}