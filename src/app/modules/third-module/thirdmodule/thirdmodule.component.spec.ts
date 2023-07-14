import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdmoduleComponent } from './thirdmodule.component';

describe('ThirdmoduleComponent', () => {
  let component: ThirdmoduleComponent;
  let fixture: ComponentFixture<ThirdmoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdmoduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirdmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
