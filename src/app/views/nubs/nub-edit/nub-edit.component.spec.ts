import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NubEditComponent } from './nub-edit.component';

describe('NubEditComponent', () => {
  let component: NubEditComponent;
  let fixture: ComponentFixture<NubEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NubEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NubEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
