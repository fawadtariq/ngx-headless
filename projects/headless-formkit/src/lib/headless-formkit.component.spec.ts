import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadlessFormkitComponent } from './headless-formkit.component';

describe('HeadlessFormkitComponent', () => {
  let component: HeadlessFormkitComponent;
  let fixture: ComponentFixture<HeadlessFormkitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadlessFormkitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadlessFormkitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
