import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseCardHeaderComponent } from './page-title-panel.component';

describe('BaseCardHeaderComponent', () => {
  let component: BaseCardHeaderComponent;
  let fixture: ComponentFixture<BaseCardHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BaseCardHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BaseCardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
