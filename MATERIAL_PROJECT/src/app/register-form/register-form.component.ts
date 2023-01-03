import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit{

  registerForm!: FormGroup;
  hide=true;
  selected="";
constructor(private fb:FormBuilder, private cs:ServiceService){}

ngOnInit(){

  this.registerForm=this.fb.group({
      name:['',[Validators.required,Validators.minLength(6),Validators.maxLength(32)]],
      email:['',[Validators.required]],
      password:['', Validators.required],
      dob:['',Validators.required],
      gender:['',Validators.required],
      mobile:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      skills:['', Validators.required],
      })
}
 
onSubmit()
{
this.cs.saveData(this.registerForm.value).subscribe();
console.log(this.registerForm.value);
window.location.reload();
}

}
