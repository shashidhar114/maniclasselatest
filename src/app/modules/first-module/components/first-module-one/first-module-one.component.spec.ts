import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstModuleOneComponent } from './first-module-one.component';

describe('FirstModuleOneComponent', () => {
  let component: FirstModuleOneComponent;
  let fixture: ComponentFixture<FirstModuleOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstModuleOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstModuleOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
