import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisstressBeaconComponent } from './disstress-beacon.component';

describe('DisstressBeaconComponent', () => {
  let component: DisstressBeaconComponent;
  let fixture: ComponentFixture<DisstressBeaconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisstressBeaconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisstressBeaconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
