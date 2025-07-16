import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopAbout } from './shop-about';

describe('ShopAbout', () => {
  let component: ShopAbout;
  let fixture: ComponentFixture<ShopAbout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShopAbout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopAbout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
