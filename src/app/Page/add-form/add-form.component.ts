import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IOwnerValue } from '../Models/i-get-owners-list';
import { IOwner } from '../Models/iowner';
import { OwnerService } from './../Service/owner.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent  implements OnInit{
  addNewOwnerForm!:FormGroup;
  path:any;
  constructor(private fb: FormBuilder , private OwnerService:OwnerService){}
  ngOnInit(){
    this.addNewOwnerFun()
   }
 addNewOwnerFun(){
  this.addNewOwnerForm = this.fb.group({
    owner_FirstName:['' , [Validators.required]],
    owner_LastName:['' , [Validators.required]],
    owner_Mail:['' , [Validators.required]],
    owner_Address:['' , [Validators.required]],
    owner_About:['' , [Validators.required]],
    owner_DOB:['' , [Validators.required]],
    owner_Phone:['' , [Validators.required]],
    owner_WA_Number:['' , [Validators.required]],
    gender:['' , [Validators.required]],
    nationality:['' , [Validators.required]],
    owner_Bank:['' , [Validators.required]],
    owner_BankAccount:['' , [Validators.required]],
    owner_BankSwift:['' , [Validators.required]],
    owner_Photo:['' ],
  })
 }
 imagePath(event:any){
   const file = event.target.files[0]
   const reader = new FileReader()
   reader.readAsDataURL(file);
   reader.onload= () =>{
    this.path = reader.result
   }
 }
 submit(){
  this.OwnerService.addNewOwner(this.addNewOwnerForm.value)
  .subscribe((res:IOwnerValue[])=>{
    console.log(res);
  })
  // console.log(this.addNewOwnerForm.value);
 }
 clearAll(){
  this.addNewOwnerForm.reset();
}
}
