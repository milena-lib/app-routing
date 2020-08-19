import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsPagesComponent } from './tabs-pages.component';

describe('TabsPagesComponent', () => {
  let component: TabsPagesComponent;
  let fixture: ComponentFixture<TabsPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
