import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { BComponent } from './b.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, ActivatedRoute } from '@angular/router';

describe('BComponent', () => {
  let component: BComponent;
  let fixture: ComponentFixture<BComponent>;
  let router: Router;
  let activatedRoute: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BComponent],
      imports:[RouterTestingModule]
    }).compileComponents();
  });

    beforeEach(()=>{
      fixture = TestBed.createComponent(BComponent);
      component = fixture.componentInstance;
      router = TestBed.inject(Router);
      activatedRoute = TestBed.inject(ActivatedRoute); 
      fixture.detectChanges();
    });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to C Component when ComponentC button is clicked',()=>{
  const componentCButton= fixture.nativeElement.querySelector('button:has(a[href="/C"])');
  componentCButton.click();
  });
  
  it('should navigate to first component when data stored button is clicked',()=>{
    
  });

});
