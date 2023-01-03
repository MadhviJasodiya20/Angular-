import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  hide=true;
  loginForm!: FormGroup;

  constructor(private fb:FormBuilder,private cs:ServiceService){}

  ngOnInit(): void {
    
    this.loginForm=this.fb.group({

      name:['',[Validators.required,Validators.minLength(6),Validators.maxLength(32)]],
      password:['', Validators.required],
      })
  }

  onSubmit()
  {
    this.cs.saveData(this.loginForm.value).subscribe();
    console.log(this.loginForm.value);
    window.location.reload();

  }
}
