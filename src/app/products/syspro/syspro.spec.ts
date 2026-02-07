import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Syspro } from './syspro';

describe('Syspro', () => {
  let component: Syspro;
  let fixture: ComponentFixture<Syspro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Syspro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Syspro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
