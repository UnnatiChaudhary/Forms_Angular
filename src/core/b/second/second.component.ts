import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent {
  @ViewChild('f', { static: false }) appForm: NgForm;
  submitted=false;
  existing=localStorage.getItem('user');
  dataPresent=this.existing['name']==''?false:true;
  user={
    name:'',
    age:'',
    gender:'',
    description:''
  };
  genders=['male','female'];
  OnSubmit()
  {
    this.submitted=true;
    this.user.name = this.appForm.value.userData.name;
    this.user.age = this.appForm.value.userData.age;
    this.user.gender= this.appForm.value.userData.gender;
    this.user.description = this.appForm.value.userData.description;
   this.existing=this.existing?JSON.parse(this.existing):{};
   if(this.user.name!=''){
   this.existing['name']=this.user.name;
   localStorage.setItem('user', JSON.stringify(this.existing));
   }
   if(this.user.age!=''){
    this.existing['age']=this.user.age;
    localStorage.setItem('user', JSON.stringify(this.existing));
    }
    if(this.user.gender!=''){
      this.existing['gender']=this.user.gender;
      localStorage.setItem('user', JSON.stringify(this.existing));
    }
      if(this.user.description!=''){
        this.existing['description']=this.user.description;
        localStorage.setItem('user', JSON.stringify(this.existing));
     }
  }
}
