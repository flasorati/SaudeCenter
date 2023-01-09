
import { ListagemEspecialidadesComponent } from './listagem-especialidades/listagem-especialidades.component';
import { EditarMedicoComponent } from './editar-medico/editar-medico.component';
import { EditarPacienteComponent } from './editar-paciente/editar-paciente.component';
import { EditarHospitalComponent } from './editar-hospital/editar-hospital.component';
import { ListagemMedicoComponent } from './listagem-medicos/listagem-medicos.component';
import { AgendamentoComponent } from './agendamento/agendamento.component';
import { NgModule, Component, LOCALE_ID} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroMedicoComponent } from './cadastro-medico/cadastro-medico.component';
import { CadastroHospitalComponent } from './cadastro-hospital/cadastro-hospital.component';
import { CadastroComponent } from './cadastro-paciente/cadastro.component';
import { CadastroEspecialidadeComponent } from './cadastro-especialidade/cadastro-especialidade.component'
import { HomeComponent } from './home/home.component';
import { CadastroDadosBancariosComponent } from './cadastro-dados-bancarios/dados-bancarios.component';
import { ListagemPacienteComponent } from './listagem-paciente/listagem-paciente.component';
import { ListagemHospitaisComponent } from './listagem-hospitais/listagem-hospitais.component';
import { EditarEspecialidadeComponent } from './editar-especialidade/editar-especialidade.component';
import { registerLocaleData }from '@angular/common';
import localePT from '@angular/common/locales/pt';
registerLocaleData(localePT);


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cadastro-paciente', component: CadastroComponent },
  { path: 'cadastro-medico', component: CadastroMedicoComponent },
  { path: 'cadastro-hospital', component: CadastroHospitalComponent },
  { path: 'cadastro-especialidade', component: CadastroEspecialidadeComponent },
  { path: 'agendamento', component: AgendamentoComponent},
  { path: 'cadastro-dados-bancarios', component: CadastroDadosBancariosComponent },
  { path: 'listagem-medicos', component: ListagemMedicoComponent},
  { path: 'listagem-paciente', component: ListagemPacienteComponent},
  { path: 'listagem-hospitais', component: ListagemHospitaisComponent},
  { path: 'listagem-especialidades', component: ListagemEspecialidadesComponent},
  { path: 'editar-hospital', component: EditarHospitalComponent},
  { path: 'editar-hospital/:id', component: EditarHospitalComponent},
  { path: 'editar-paciente', component: EditarPacienteComponent},
  { path: 'editar-paciente/:id', component: EditarPacienteComponent},
  { path: 'editar-medico', component: EditarMedicoComponent},
  { path: 'editar-medico/:id', component: EditarMedicoComponent},
  { path: 'editar-especialidade', component: EditarEspecialidadeComponent},
  { path: 'editar-especialidade/:id', component: EditarEspecialidadeComponent},
  { path: 'agendamento', component: AgendamentoComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [{provide: LOCALE_ID, useValue: 'pt-br'}],
  exports: [RouterModule]
})
export class AppRoutingModule { }
