import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HarrypotterDetailComponent } from './harrypotter-detail.component';

describe('HarrypotterDetailComponent', () => {
  let component: HarrypotterDetailComponent;
  let fixture: ComponentFixture<HarrypotterDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HarrypotterDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HarrypotterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
