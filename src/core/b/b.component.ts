import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrl: './b.component.css'
})
export class BComponent {
 constructor(private route:ActivatedRoute,private router:Router){}
 onFirst()
 {
  this.router.navigate(['first'],{relativeTo:this.route});
 }
 onSecond()
 {
  this.router.navigate(['second'],{relativeTo:this.route});
 }
 onFourth()
 {
  this.router.navigate(['fourth'],{relativeTo:this.route});
 }
}
