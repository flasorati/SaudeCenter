import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro-paciente/cadastro.component';
import { AgendamentoComponent } from './agendamento/agendamento.component';
import { CadastroHospitalComponent } from './cadastro-hospital/cadastro-hospital.component';
import { CadastroMedicoComponent } from './cadastro-medico/cadastro-medico.component';
import { CadastroEspecialidadeComponent } from './cadastro-especialidade/cadastro-especialidade.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CadastroDadosBancariosComponent } from './cadastro-dados-bancarios/dados-bancarios.component';
import { ListagemMedicoComponent } from './listagem-medicos/listagem-medicos.component';
import { ListagemPacienteComponent } from './listagem-paciente/listagem-paciente.component';
import { ListagemHospitaisComponent } from './listagem-hospitais/listagem-hospitais.component';
import { EditarHospitalComponent } from './editar-hospital/editar-hospital.component';
import { EditarPacienteComponent } from './editar-paciente/editar-paciente.component';
import { EditarMedicoComponent } from './editar-medico/editar-medico.component';
import { ListagemEspecialidadesComponent } from './listagem-especialidades/listagem-especialidades.component';
import { EditarEspecialidadeComponent } from './editar-especialidade/editar-especialidade.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    AgendamentoComponent,
    CadastroHospitalComponent,
    CadastroMedicoComponent,
    CadastroEspecialidadeComponent,
    HomeComponent,
    CadastroDadosBancariosComponent,
    ListagemMedicoComponent,
    ListagemPacienteComponent,
    ListagemHospitaisComponent,
    EditarHospitalComponent,
    EditarPacienteComponent,
    EditarMedicoComponent,
    ListagemEspecialidadesComponent,
    EditarEspecialidadeComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
