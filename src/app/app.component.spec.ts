import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
  let component:AppComponent;
  let fixture:ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports:[RouterTestingModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create',()=>{
    expect(component).toBeTruthy();
  });

  it('should navigate to Component A when "Component A" button is clicked', () => {
    const componentAButton = fixture.nativeElement.querySelector('button:has(a[href="/A"])');
    componentAButton.click();
  });

  it('should navigate to Component B when "Component B" button is clicked', () => {
    const componentBButton = fixture.nativeElement.querySelector('button:has(a[href="/B"])');
    componentBButton.click();
  });

});
