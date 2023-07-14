import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondModuleOneComponent } from './second-module-one.component';

describe('SecondModuleOneComponent', () => {
  let component: SecondModuleOneComponent;
  let fixture: ComponentFixture<SecondModuleOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondModuleOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondModuleOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
