import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-one';
  myF: FormGroup
  constructor(
    protected fB: FormBuilder
  ){

  }

  changeName(){
    this.title = "React";
  }

  createForm(){
    this.myF = this.fB.group({
      name: ['', [Validators.maxLength(5)]],
      email: []
    })
  }
}
