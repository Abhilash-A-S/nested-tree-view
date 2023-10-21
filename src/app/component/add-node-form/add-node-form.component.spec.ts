import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNodeFormComponent } from './add-node-form.component';

describe('AddNodeFormComponent', () => {
  let component: AddNodeFormComponent;
  let fixture: ComponentFixture<AddNodeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNodeFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNodeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
