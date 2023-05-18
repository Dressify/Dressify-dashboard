import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductQuestionsComponent } from './product-questions.component';

describe('ProductQuestionsComponent', () => {
  let component: ProductQuestionsComponent;
  let fixture: ComponentFixture<ProductQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductQuestionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
