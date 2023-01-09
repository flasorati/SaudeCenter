import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemEspecialidadesComponent } from './listagem-especialidades.component';

describe('ListagemEspecialidadesComponent', () => {
  let component: ListagemEspecialidadesComponent;
  let fixture: ComponentFixture<ListagemEspecialidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemEspecialidadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListagemEspecialidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
