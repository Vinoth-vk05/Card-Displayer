import { Component, OnChanges, signal, SimpleChanges } from '@angular/core';
import { Output } from "../output/output";
import { Setting } from "../setting/setting";

@Component({
  selector: 'app-home',
  imports: [Output, Setting],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {  
  data = signal<any>({})

  receiveData(data: any):void{
    console.log("from parent")
    console.dir(data)
    this.data.set(data)
  }

  
}
