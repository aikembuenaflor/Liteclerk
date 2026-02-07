import { ComponentFixture, TestBed } from '@angular/core/testing';

import { His } from './his';

describe('His', () => {
  let component: His;
  let fixture: ComponentFixture<His>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [His]
    })
    .compileComponents();

    fixture = TestBed.createComponent(His);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
