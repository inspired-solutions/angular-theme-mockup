import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Step3SecondComponent } from './step3-second.component';

describe('Step3SecondComponent', () => {
  let component: Step3SecondComponent;
  let fixture: ComponentFixture<Step3SecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step3SecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step3SecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
