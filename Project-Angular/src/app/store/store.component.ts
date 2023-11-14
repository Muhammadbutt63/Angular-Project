import { Component, OnInit } from '@angular/core';
import { StoreService } from '../shared/services/store.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  constructor(
    private readonly StoreServices:StoreService
  )
  {}
 
  ngOnInit(){
    this.GetDataFromStore();
  }

  public GetDataFromStore(){
    this.StoreServices.getData().subscribe(
      (data:any)=> {
        console.log(data);
      }
    )
  }

}
