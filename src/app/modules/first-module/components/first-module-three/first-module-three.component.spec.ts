import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstModuleThreeComponent } from './first-module-three.component';

describe('FirstModuleThreeComponent', () => {
  let component: FirstModuleThreeComponent;
  let fixture: ComponentFixture<FirstModuleThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstModuleThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstModuleThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
