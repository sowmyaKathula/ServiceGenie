import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabScreenComponent } from './tab-screen.component';

describe('TabScreenComponent', () => {
  let component: TabScreenComponent;
  let fixture: ComponentFixture<TabScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
