import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialTreeViewComponent } from './material-tree-view.component';

describe('MaterialTreeViewComponent', () => {
  let component: MaterialTreeViewComponent;
  let fixture: ComponentFixture<MaterialTreeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialTreeViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialTreeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
