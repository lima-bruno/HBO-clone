import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerOptionsComponent } from './banner-options.component';

describe('BannerOptionsComponent', () => {
  let component: BannerOptionsComponent;
  let fixture: ComponentFixture<BannerOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
