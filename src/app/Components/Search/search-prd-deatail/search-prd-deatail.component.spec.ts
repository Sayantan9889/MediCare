import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPrdDeatailComponent } from './search-prd-deatail.component';

describe('SearchPrdDeatailComponent', () => {
  let component: SearchPrdDeatailComponent;
  let fixture: ComponentFixture<SearchPrdDeatailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchPrdDeatailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchPrdDeatailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
