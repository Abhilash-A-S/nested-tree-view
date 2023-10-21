import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNodePopupComponent } from './add-node-popup.component';

describe('AddNodePopupComponent', () => {
  let component: AddNodePopupComponent;
  let fixture: ComponentFixture<AddNodePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNodePopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNodePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
