import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricipalComponent } from './pricipal.component';

describe('PricipalComponent', () => {
  let component: PricipalComponent;
  let fixture: ComponentFixture<PricipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricipalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
