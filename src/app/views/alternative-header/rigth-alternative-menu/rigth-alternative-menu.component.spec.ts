import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RigthAlternativeMenuComponent } from './rigth-alternative-menu.component';

describe('RigthAlternativeMenuComponent', () => {
  let component: RigthAlternativeMenuComponent;
  let fixture: ComponentFixture<RigthAlternativeMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RigthAlternativeMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RigthAlternativeMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
