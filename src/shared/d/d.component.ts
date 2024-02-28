import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { FormService } from '../../form.service';
import { UsernameLengthDirective } from './username-length.directive';
import { ActivatedRoute } from '@angular/router';
import { formModel } from '../../models/form.model';
import { ApiServiceService } from '../../app/api.service.service';

@Component({
  selector: 'app-d',
  templateUrl: './d.component.html',
  styleUrl: './d.component.css',
  viewProviders: [UsernameLengthDirective]
})
export class DComponent implements OnInit{
  @ViewChild('f', { static: false }) appForm: NgForm;

  reload=false;
  id:string;
  data=false;

  public constructor(private myService: FormService,private route:ActivatedRoute,private apiService:ApiServiceService) {
   
  }

  ngOnInit(): void {
    const navigationType = performance.navigation.type;
    if (navigationType === PerformanceNavigation.TYPE_RELOAD) {
     this.reload=true;
    }
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.userA.name!==undefined){
      console.log(this.userA);
      this.reload=false;
    }
    if(this.user.name!==''){
      console.log(this.user);
      this.reload=false;
    }
  }

 @Input() user={
    name:'',
    age:null,
    gender:'',
    description:''
  };
@Input() userA={
  name:'',
  age:null,
  gender:'',
  description:''
}
  users:formModel[]=[];

  genders=['male','female'];

  submitted=false;

  OnSubmit() { 
    this.submitted = true;
    this.data=true;
    this.reload=false;
    const newUser: formModel = {
      name: this.appForm.value.userData.name,
      age: this.appForm.value.userData.age,
      gender: this.appForm.value.userData.gender,
      description: this.appForm.value.userData.description
    };

    this.users.push(newUser);
    localStorage.setItem("user",JSON.stringify(this.users));
    // if(this.userA!=null){
    //   this.updateUserOnServer();
    // }
  }
  onReset()
  {
    this.reload=false;
    this.submitted=false;
    this.data=false;
    this.appForm.reset();
    this.users.splice(0,this.users.length);
  }
  onChange()
  {
    this.submitted=false;
  }
  updateUserOnServer() {
    this.myService.userData$.subscribe(userData => {
      this.apiService.updateUser(this.userA,userData?.id).subscribe(
        (response) => {
          console.log('User data updated successfully:', response);
        },
        (error) => {
          console.error('Error updating user data:', error);
        }
      );
    });
  }
}
