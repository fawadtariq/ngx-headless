import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadlessUiComponent } from './headless-ui.component';

describe('HeadlessUiComponent', () => {
  let component: HeadlessUiComponent;
  let fixture: ComponentFixture<HeadlessUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadlessUiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadlessUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
