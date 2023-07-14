import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstModuleTwoComponent } from './first-module-two.component';

describe('FirstModuleTwoComponent', () => {
  let component: FirstModuleTwoComponent;
  let fixture: ComponentFixture<FirstModuleTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstModuleTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstModuleTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
