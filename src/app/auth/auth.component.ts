import { AuthResponse, AuthService } from './auth.service';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  isLoading = false;
  AuthForm: FormGroup
  constructor(private authService:AuthService, private router:Router , private fb: FormBuilder , private _snackBar: MatSnackBar) {
    this.AuthForm = this.fb.group({
      email: ['' , [Validators.required,Validators.email]],
      password: ['',[Validators.required]]
    })

  }
  ngOnInit(): void {
  }
  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode
  }
  onSubmit(){
    console.log(this.AuthForm.value)
    this.authService.login(this.AuthForm.value).subscribe(res => {
      localStorage.setItem('token',res.authorisation.token)
      this.router.navigate(['/home'])
    })
  // this.AuthForm.reset()

  }

}
