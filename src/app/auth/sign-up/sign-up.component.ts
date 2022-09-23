import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  AuthForm: FormGroup
  constructor(private authService:AuthService, private router:Router , private fb: FormBuilder) {
    this.AuthForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }
  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.AuthForm.value)
    this.authService.signUp(this.AuthForm.value).subscribe(res => {
      console.log(res)
      this.router.navigate(['/home'])
    })
  }

}
