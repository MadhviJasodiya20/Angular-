// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { ServiceService } from '../service.service';
// @Component({
//   selector: 'app-register-form',
//   templateUrl: './register-form.component.html',
//   styleUrls: ['./register-form.component.css']
// })
// export class RegisterFormComponent implements OnInit{

//   registerForm!: FormGroup;
//   hide=true;
//   selected="";
// constructor(private fb:FormBuilder, private cs:ServiceService){}

// ngOnInit(){

//   this.registerForm=this.fb.group({
//       name:['',[Validators.required,Validators.minLength(6),Validators.maxLength(32)]],
//       email:['',[Validators.required]],
//       password:['', Validators.required],
//       dob:['',Validators.required],
//       gender:['',Validators.required],
//       mobile:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
//       skills:['', Validators.required],
//       })
// }
 
// onSubmit()
// {
// this.cs.saveData(this.registerForm.value).subscribe();
// console.log(this.registerForm.value);
// window.location.reload();
// }

// }
import { Component,OnInit } from '@angular/core';



import { ThemePalette } from '@angular/material/core';



import {MatDialog} from '@angular/material/dialog';



import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { ServiceService } from '../service.service';





@Component({

  selector: 'app-register-form',

  templateUrl: './register-form.component.html',

  styleUrls: ['./register-form.component.css']

})



export class RegisterFormComponent implements OnInit {

  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;

  isLinear=true;
  hide=true;

  wc:number=0;
  wc1:number=0;
  count(){
    var a = this.thirdFormGroup.value['presentaddr'];
    this.wc = a.length;
  }
  count1(){
   var b = this.thirdFormGroup.value['permanentaddr'];
    this.wc1 = b.length;
  }

  constructor(private formBuilder:FormBuilder, private cs:ServiceService){}


  ngOnInit(): void {

    
    this.firstFormGroup=this.formBuilder.group({





      id:[''],
      name:['',[Validators.required,Validators.minLength(6),Validators.maxLength(32)]],
      
      username: ['',Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(6)])],
      email:['', Validators.compose([Validators.required,Validators.email])],
      password:['',Validators.compose([Validators.required,Validators.minLength(6),Validators.maxLength(12)])],
        fname:['',[Validators.required,Validators.minLength(6),Validators.maxLength(32)]],

        mname:['',[Validators.required,Validators.minLength(6),Validators.maxLength(32)]],

        dob:['',Validators.required],

        gender:['',Validators.required],

        mobile:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]]

 
    })


    this.secondFormGroup=this.formBuilder.group({

 
          id:[''],
          fullname:[''],
    
          bno:[''],
    
          bname:[''],
    
          ifsc:[''],
    
          mb:[''],
    
          ib:['']
    
     
    
        })
    
    
    
      this.thirdFormGroup=this.formBuilder.group({

        id:[''],
    
        presentAddrs:['',Validators.required],
    
        permanentAddrs:['',Validators.required],
    
      })
    
  
  }

  onSubmit(){
    if(this.firstFormGroup.valid && this.secondFormGroup.valid && this.thirdFormGroup.valid)
    {
      this.cs.firstInfo(this.firstFormGroup.value).subscribe();
      this.cs.secondInfo(this.secondFormGroup.value).subscribe();
      this.cs.thirdInfo(this.thirdFormGroup.value).subscribe();
      alert("Data saved");
    }
  }

}

