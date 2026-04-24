import { Component, computed, effect, input} from '@angular/core';
import { NgStyle } from "@angular/common";

interface InputData{
  name:string,
  description:string,
  size:number,
  color:string,
  style:string
}

@Component({
  selector: 'app-output',
  imports: [NgStyle],
  templateUrl: './output.html',
  styleUrl: './output.css',
})
export class Output {
  data = input<any>()
  prevStyle = "style-A"
  fontStyler!:any

  name = computed(()=>{
    return this.data()?.name ?? "Type Heading"
  })
  description = computed(()=>{
    return this.data()?.description ?? "Type your description"
  })

  size = computed(()=>{
    return this.data()?.size
  })

  color = computed(()=>{
    return this.data()?.color
  })

  style = computed(()=>{
    return this.data()?.style ?? "style-A"
  })

  constructor(){
      effect(() => {
      const card = document.getElementById('card')
      card!.className = `${this.style()}`

      this.fontStyler = {
        "font-size": `${this.size()}px`,
        "color":this.color()
      }
    });
  }




  
  

}
