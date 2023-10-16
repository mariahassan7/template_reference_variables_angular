import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducativeComponentComponent } from './educative-component.component';

describe('EducativeComponentComponent', () => {
  let component: EducativeComponentComponent;
  let fixture: ComponentFixture<EducativeComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EducativeComponentComponent]
    });
    fixture = TestBed.createComponent(EducativeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
