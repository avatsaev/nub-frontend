import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NubListComponent } from './nub-list.component';

describe('NubListComponent', () => {
  let component: NubListComponent;
  let fixture: ComponentFixture<NubListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NubListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NubListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
