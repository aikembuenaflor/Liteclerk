import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fis } from './fis';

describe('Fis', () => {
  let component: Fis;
  let fixture: ComponentFixture<Fis>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fis]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fis);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
