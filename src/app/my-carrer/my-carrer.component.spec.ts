import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCarrerComponent } from './my-carrer.component';

describe('MyCarrerComponent', () => {
  let component: MyCarrerComponent;
  let fixture: ComponentFixture<MyCarrerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCarrerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCarrerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
