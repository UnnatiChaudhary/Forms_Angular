import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AComponent } from './a.component';
import { DComponent } from '../../shared/d/d.component';
import { FormsModule } from '@angular/forms';

describe('AComponent', () => {
  let component: AComponent;
  let fixture: ComponentFixture<AComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AComponent,DComponent],
      imports:[FormsModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render D Component',()=>{
    const appDComponent = fixture.nativeElement.querySelector('app-d');
    expect(DComponent).toBeTruthy();
  });

});
