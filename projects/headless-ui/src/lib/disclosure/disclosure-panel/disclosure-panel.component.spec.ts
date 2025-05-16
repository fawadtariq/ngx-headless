import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisclosurePanelComponent } from './disclosure-panel.component';

describe('DisclosurePanelComponent', () => {
  let component: DisclosurePanelComponent;
  let fixture: ComponentFixture<DisclosurePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisclosurePanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisclosurePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
