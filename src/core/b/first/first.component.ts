import {  Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { FormService } from '../../../form.service';
import { formModel } from '../../../models/form.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from '../../../app/api.service.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})

export class FirstComponent implements OnInit{  
sort:MatSort
  @ViewChild(MatSort) set matSort(ms :MatSort){
    this.sort = ms;
    debugger
    this.dataSource.sort=ms;
    this.dataSource.data = this.users;
  }
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  dataSource=new MatTableDataSource<any>([]);

  displayedColumns:string[]=['index','name','age','gender','description','edit','delete'];

  values:string;
  save=false;
  fetch=false;
  normal=true;
  above=false;
  data="No data to be shown";
  isDataPresent=false;

  ngOnInit(): void {
    
    this.values=window.localStorage.getItem("user");
    this.users = JSON.parse(this.values) || [];

  }

  ngOnChanges(): void {
    console.log('Sort:', this.sort);
    console.log('Paginator:', this.paginator);
    this.dataSource.data=this.users;
      this.dataSource.sort=this.sort;
    if (this.sort) {
      this.dataSource.sort = this.sort;
    }
  
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }
  
    public constructor(private myService:FormService,
      private route:Router,
      private router:ActivatedRoute,
      private apiService:ApiServiceService)
      {
    this.users=myService?.exist;
    if(this.myService?.exist){
    this.dataSource.data=this.users;
    }
    console.log(this.users);
    if(localStorage.length!=0){
      this.isDataPresent=true;
    }
   }
   users:formModel[]=[];
   localStorageDelete(){
    localStorage.clear();
    this.users?.splice(0,this.users.length);
   }
   localStorageEdit()
   {
     this.route.navigate(['/A/1'],{relativeTo:this.router});
   }
   HttpDelete(id:number)
   {
     this.apiService.deleteItemById(id).subscribe(()=>{
      console.log("deleted");
     });
   }

   HttpEdit(id: number){
    this.apiService.getUserDataById(id).subscribe(
      (selectedUser) => {
        // console.log(selectedUser);
        this.myService.setUserData(selectedUser);
        this.route.navigate(['/A', 1], { relativeTo: this.router });
      },
      (error) => {
        console.error('Error fetching user data:', error);
      }
    );
  }

   onSave()
   {
    if(this.users.length>0){
    this.save=true;
    this.normal=false;
    this.apiService.postDataToServer(this.users).subscribe(
      (response) => {
        console.log('Data saved successfully on the server:', response);
        localStorage.clear();
        this.users = [];
        this.fetchData();
      },
      (error) => {
        console.error('Error saving data on the server:', error);
      }
    );
   }
   else{
    this.save=false;
    this.normal=false;
    this.fetchData();
   }
  }
  // fetchData(){
  //   this.apiService.getDataFromServer().subscribe((data)=>{
  //     this.users=[];
  //     this.fetch=true;
  //     this.normal=false;
  //     data.forEach(element => {
  //       if( element.data[0].age<40){
  //       this.users.push(element.data);
  //       }
  //       this.above=true;
  //      })
  //   },(error)=>{
  //     console.error("Error fetching data from server");
  //     }
  //    );
  //   }
  // }

  // ngOnChanges(changes: SimpleChanges): void {
  //   this.dataSource.data=this.users;
  //   this.dataSource.sort=this.sort;
  // }

  fetchData(){
    this.apiService.getDataFromServer().subscribe((data)=>{
      this.isDataPresent=true;
     
      this.users=data;
      this.dataSource=new MatTableDataSource<any>(this.users);
      this.dataSource.data=this.users;
      this.dataSource.sort=this.sort;
      this.dataSource.paginator=this.paginator;

      console.log(this.dataSource.data);
      this.fetch=true;
      this.normal=false;
      data.forEach(element => {
        if(element.data && element.data.length > 0 && element.data[0]?.age>40){
          this.above=true;
        }
       })
    },(error)=>{
      console.error("Error fetching data from server");
      }
     );
    }
  }
 

