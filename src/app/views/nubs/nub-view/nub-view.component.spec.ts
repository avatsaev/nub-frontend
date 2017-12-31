import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NubViewComponent } from './nub-view.component';

describe('NubViewComponent', () => {
  let component: NubViewComponent;
  let fixture: ComponentFixture<NubViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NubViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NubViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
