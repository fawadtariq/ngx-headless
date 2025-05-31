import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisclosureComponent } from './disclosure.component';

describe('DisclosureComponent', () => {
  let component: DisclosureComponent;
  let fixture: ComponentFixture<DisclosureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisclosureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisclosureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
