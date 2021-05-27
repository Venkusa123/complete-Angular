import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

import { ThirdComponent } from './third.component';
import { ThirdService } from './third.service';

describe('ThirdComponent', () => {
  let component: ThirdComponent;
  let fixture: ComponentFixture<ThirdComponent>;
  let service:ThirdService
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdComponent ],
      providers:[ThirdService],
      imports:[FormsModule,HttpClientModule,ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdComponent);
    component = fixture.componentInstance;
    service =fixture.debugElement.injector.get(ThirdService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("checking third service",async(()=>{
    let stub = spyOn(service,"getCountries").and.callFake(()=>{
      return of([{name:"Åland Islands"}]);
    })
    expect(service.getCountries()).toHaveBeenCalled();
    component.getCountries();
    fixture.detectChanges();
    let name=component.countryName;
    expect(name).toBe("Åland Islands");
  }))
});
