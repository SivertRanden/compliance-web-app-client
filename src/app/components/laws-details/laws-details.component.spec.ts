import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LawsDetailsComponent } from './laws-details.component';

describe('LawsDetailsComponent', () => {
  let component: LawsDetailsComponent;
  let fixture: ComponentFixture<LawsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LawsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LawsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
