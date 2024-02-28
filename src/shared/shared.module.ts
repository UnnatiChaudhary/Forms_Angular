import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DComponent } from './d/d.component';
import { FormsModule} from '@angular/forms';
import { route } from '../route';
import { agePipe } from '../app/age.pipe';

@NgModule({
  declarations: [DComponent],
  imports: [
    CommonModule,
    FormsModule,
    route
  ],
  exports:[
    DComponent
  ]
})
export class SharedModule { }
