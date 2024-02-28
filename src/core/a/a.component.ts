import { Component, OnInit ,Input } from '@angular/core';
import { FormService } from '../../form.service';
import { formModel } from '../../models/form.model';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from '../../app/api.service.service';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrl: './a.component.css'
})
export class AComponent implements OnInit{
  
  user={
    name:'',
    age:'',
    gender:'',
    description:''
  };
  
  ngOnInit(): void {
    if(this.myService?.existing!=''){
    this.user.name=this.myService?.name;
    this.user.age=this.myService?.age;
    this.user.gender=this.myService?.gender;
    this.user.description=this.myService?.description; 
    }
 
   this.myService.userData$.subscribe(userData => {
    if (userData) {
      this.user.name = userData?.data[0].name;
      this.user.age = userData?.data[0].age;
      this.user.gender = userData?.data[0].gender;
      this.user.description = userData?.data[0].description;
    }
  });
}
  public constructor(private myService: FormService,private route:ActivatedRoute,private apiService:ApiServiceService) {
     
  }
}