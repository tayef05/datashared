import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParenttoComponent } from './parentto.component';

describe('ParenttoComponent', () => {
  let component: ParenttoComponent;
  let fixture: ComponentFixture<ParenttoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParenttoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParenttoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
