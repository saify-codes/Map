import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoPositioningComponent } from './demo-positioning.component';

describe('DemoPositioningComponent', () => {
  let component: DemoPositioningComponent;
  let fixture: ComponentFixture<DemoPositioningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoPositioningComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoPositioningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
