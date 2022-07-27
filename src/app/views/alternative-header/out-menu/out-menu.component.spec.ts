import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutMenuComponent } from './out-menu.component';

describe('OutMenuComponent', () => {
  let component: OutMenuComponent;
  let fixture: ComponentFixture<OutMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
