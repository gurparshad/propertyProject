import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registerationForm: FormGroup;
  constructor() { }

  passwordMatchingValidator(fg: FormGroup): Validators {
    return fg.get('userPassword').value === fg.get('userConfirmPassword').value ? null :
    {notmatched: true};
  }

  ngOnInit() {
    this.registerationForm = new FormGroup({
      userName: new FormControl(null, Validators.required),
      userEmail: new FormControl(null, [Validators.required, Validators.email]),
      userPassword: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      userConfirmPassword: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    },this.passwordMatchingValidator );
  }

// getter methods for the form control.

get userName(){
  return this.registerationForm.get("userName") as FormControl;
}

get userEmail(){
  return this.registerationForm.get('userEmail') as FormControl;
}

get userPassword(){
  return this.registerationForm.get('userPassword') as FormControl;
}

get userConfirmPassword(){
  return this.registerationForm.get('userConfirmPassword') as FormControl;
}
  onSubmit(){
    console.log(this.registerationForm)
  }

}
