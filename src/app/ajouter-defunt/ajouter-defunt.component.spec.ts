import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterDefuntComponent } from './ajouter-defunt.component';

describe('AjouterDefuntComponent', () => {
  let component: AjouterDefuntComponent;
  let fixture: ComponentFixture<AjouterDefuntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterDefuntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterDefuntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
