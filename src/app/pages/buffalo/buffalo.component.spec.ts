import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuffaloComponent } from './buffalo.component';

describe('BuffaloComponent', () => {
  let component: BuffaloComponent;
  let fixture: ComponentFixture<BuffaloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuffaloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuffaloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
