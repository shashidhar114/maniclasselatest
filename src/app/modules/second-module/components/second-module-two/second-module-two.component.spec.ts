import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondModuleTwoComponent } from './second-module-two.component';

describe('SecondModuleTwoComponent', () => {
  let component: SecondModuleTwoComponent;
  let fixture: ComponentFixture<SecondModuleTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondModuleTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondModuleTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
