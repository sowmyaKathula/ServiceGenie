import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCatComponent } from './service-cat.component';

describe('ServiceCatComponent', () => {
  let component: ServiceCatComponent;
  let fixture: ComponentFixture<ServiceCatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceCatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
