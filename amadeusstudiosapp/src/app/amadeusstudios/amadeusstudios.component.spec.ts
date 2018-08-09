import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmadeusstudiosComponent } from './amadeusstudios.component';

describe('AmadeusstudiosComponent', () => {
  let component: AmadeusstudiosComponent;
  let fixture: ComponentFixture<AmadeusstudiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmadeusstudiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmadeusstudiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
