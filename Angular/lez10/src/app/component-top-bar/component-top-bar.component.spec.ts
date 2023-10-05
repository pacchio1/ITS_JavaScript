import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentTopBarComponent } from './component-top-bar.component';

describe('ComponentTopBarComponent', () => {
  let component: ComponentTopBarComponent;
  let fixture: ComponentFixture<ComponentTopBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentTopBarComponent]
    });
    fixture = TestBed.createComponent(ComponentTopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
