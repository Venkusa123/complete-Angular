import { DebugElement } from "@angular/core"
import { async, ComponentFixture, TestBed } from "@angular/core/testing"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { RouterModule } from "@angular/router"
import { AppService } from "../app.service"
import { BusComponent } from "./bus.component"
import { BusModule } from "./bus.module"
import { BusRegistrationComponent } from "./registration/register.component"

fdescribe("Bus Describe main module",()=>{
    let fixture:ComponentFixture<BusComponent>;
    let debugElement:DebugElement;
    let busComponent:BusComponent;
    beforeEach(async(()=>{
        TestBed.configureTestingModule({
            declarations:[BusComponent,BusRegistrationComponent],
            imports:[RouterModule,FormsModule,ReactiveFormsModule],
            providers:[AppService]
        }).compileComponents()
    }))
    beforeEach(()=>{
        fixture = TestBed.createComponent(BusComponent);
        busComponent = fixture.componentInstance;
        let appservice = TestBed.get(AppService);
        fixture.detectChanges();
    })
    it("check for the bus component instace",()=>{
        fixture = TestBed.createComponent(BusComponent);
        busComponent = fixture.componentInstance;
        expect(busComponent).toBeTruthy();
    })
})