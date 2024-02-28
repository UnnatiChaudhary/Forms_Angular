import { Injectable, Input, OnInit } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { formModel } from "./models/form.model";

@Injectable({providedIn:'root'})
export class FormService{

  private formUser=new Subject<formModel|null>();
  private formUser$=this.formUser.asObservable();
  
  constructor(){

  }
 
  values=localStorage.getItem('user');
  exist=this.values?JSON.parse(this.values):{};
  existing=this.exist[this.exist.length-1];

 
  name=this.existing?.name;
  age=this.existing?.age;
  gender=this.existing?.gender;
  description=this.existing?.description;

  user={
    name:this.name,
    age:this.age,
    gender:this.gender,
    description:this.description
  };
   
  getUserSubject(): Observable<formModel | null> {
    return this.formUser$;
  }

  emitExistingData(): void {
    this.formUser.next(this.existing);
  }

  private userDataSubject = new BehaviorSubject<any>(null);
  userData$ = this.userDataSubject.asObservable();

  setUserData(userData: any): void {
    this.userDataSubject.next(userData);
  }
}