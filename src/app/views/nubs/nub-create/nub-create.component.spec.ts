import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NubCreateComponent } from './nub-create.component';

describe('NubCreateComponent', () => {
  let component: NubCreateComponent;
  let fixture: ComponentFixture<NubCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NubCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NubCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
