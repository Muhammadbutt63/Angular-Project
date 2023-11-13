import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public showTable:Boolean = true;
  public myName: string = "Dell";
  public myName2: string = "Del";
  public human:any = [
    {name: "Dell",  age: 25},
    {name: "Dell2", age: 26},
    {name: "Dell3", age: 27},
    {name: "Dell4", age: 28},
    {name: "Dell5", age: 29},
    {name: "Dell6", age: 30},
    {name: "Dell7", age: 31},
    {name: "Dell8", age: 32},
    {name: "Dell9", age: 33}
  ]

  public showTableMethod():void{
    this.showTable = !this.showTable;
  }


}
