import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MaterialService } from '../material.service';
import { materialForm } from '../model/info';

@Component({
  selector: 'app-material-form',
  templateUrl: './material-form.component.html',
  styleUrls: ['./material-form.component.css']
})
export class MaterialFormComponent implements OnInit {

  constructor(private fb:FormBuilder, private cs:MaterialService){}

  materialForm!: FormGroup;
  mt:materialForm[]=[];

  hide=true;
  
  ngOnInit(){
    
    this.materialForm=this.fb.group({
      fullName:['',Validators.compose([Validators.required,Validators.minLength(6),Validators.maxLength(32)])],
      email:['', Validators.compose([Validators.required,Validators.email])],
      password:['',Validators.compose([Validators.required,Validators.minLength(6),Validators.maxLength(12)])],
      gender:['',Validators.required],
      dob:['',Validators.required],
      mobNo:['',Validators.maxLength(10)],
      skills:['',Validators.required]
    })
  }

  OnSubmit()
  {
    console.log(this.materialForm.value);
    if(this.materialForm.valid){
      this.cs.MaterialPost(this.materialForm.value).subscribe();
    }
  }
}
