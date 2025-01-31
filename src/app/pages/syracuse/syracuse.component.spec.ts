import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyracuseComponent } from './syracuse.component';

describe('SyracuseComponent', () => {
  let component: SyracuseComponent;
  let fixture: ComponentFixture<SyracuseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SyracuseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SyracuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
