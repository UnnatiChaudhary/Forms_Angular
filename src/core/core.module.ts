import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { CComponent } from './b/c/c.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { route } from '../route';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [AComponent,BComponent,CComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    route
  ],
  exports:[
    AComponent,BComponent,CComponent
  ]
})
export class CoreModule { }
