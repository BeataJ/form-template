import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signup: NgForm
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female']

  suggestUserName() {
    const suggestedName = 'Superuser';
    this.signup.setValue({
      userData: {
        username: suggestedName,
        email: ''
      },
      secret: 'pet',
      questionAnswer: '',
      gender: 'male'
    });
  }

  // onSubmit(form: NgForm){
  //   console.log(form)
  // }

  onSubmit() {
    console.log(this.signup)
  }
}
