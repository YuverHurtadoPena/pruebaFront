import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormListaRComponent } from './form-lista-r.component';

describe('FormListaRComponent', () => {
  let component: FormListaRComponent;
  let fixture: ComponentFixture<FormListaRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormListaRComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormListaRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
