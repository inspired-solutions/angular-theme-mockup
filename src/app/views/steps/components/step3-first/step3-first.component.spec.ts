import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Step3FirstComponent } from './step3-first.component';

describe('Step3FirstComponent', () => {
  let component: Step3FirstComponent;
  let fixture: ComponentFixture<Step3FirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step3FirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step3FirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
