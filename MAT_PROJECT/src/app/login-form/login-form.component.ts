import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  hide=true;
  loginForm!: FormGroup;

  constructor(private fb:FormBuilder,private cs:ServiceService, private router:Router, public http:HttpClient){}

  ngOnInit(): void {
    
    this.loginForm=this.fb.group({

      name:['',Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(32), Validators.pattern("^[a-zA-Z0-9]")])],
      password:['',Validators.compose([ Validators.required,Validators.pattern("^[a-zA-Z0-9]")])],
      })
  }

  onSubmit()
  {
    if(this.loginForm.valid){
      this.http.get<any>("http://localhost:3000/firstInfo").subscribe(res=>{
        const user = res.find((a:any)=>{
          return a.name === this.loginForm.value.name && a.password === this.loginForm.value.password
        });
        if(user){
          alert('successfull');
          console.log(user);
          this.loginForm.reset();
          this.router.navigate(['dash']);
        }
        else{
          alert("Invalid Credetial");
        }
      })
    }

  }
}

