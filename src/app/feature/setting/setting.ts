import { Component, inject, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-setting',
  imports: [ReactiveFormsModule],
  templateUrl: './setting.html',
  styleUrl: './setting.css',
})
export class Setting {
  //inputs & outputs
  data = output<any>()

  private formChange!:Subscription
  private currentStyle:number = 0
  style:string = "style A"
  private styles:string[] = [
    "style-A",
    "style-B",
    "style-C",
    "style-D"
  ]

  //Form controls
  form:FormGroup = new FormGroup({
    name : new FormControl(''),
    description : new FormControl(''),
    size : new FormControl(16),
    color : new FormControl(''),
    style : new FormControl('style-A')
  })

  //on click the style button.
  onStyle():void{
    this.currentStyle += 1
    if(this.currentStyle > this.styles.length-1){
      this.currentStyle = 0
    }
    this.style = this.styles[this.currentStyle].replace('-'," ")
    //assigning the current style value in form controll
    this.form.get("style")?.setValue(this.styles[this.currentStyle])
  }

  //subscribe the formChanges to update the form instantly
  //the changes in form immediatly update
  ngOnInit(){
    this.formChange = this.form.valueChanges.subscribe(val => {
      this.data.emit(val) //emitting value when changes
      console.log("change detecting in form.")
    })
  }  

  ngOnDestroy():void{
    this.formChange.unsubscribe()
  }

}
