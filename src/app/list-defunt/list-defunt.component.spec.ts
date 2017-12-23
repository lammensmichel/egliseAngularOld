import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDefuntComponent } from './list-defunt.component';

describe('ListDefuntComponent', () => {
  let component: ListDefuntComponent;
  let fixture: ComponentFixture<ListDefuntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDefuntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDefuntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
