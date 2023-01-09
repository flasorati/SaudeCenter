import { IBeneficiarioDto } from './../interfaces/IBeneficiario';
import { HttpClient } from '@angular/common/http';
import { IPacienteDto } from '../interfaces/IPacienteDto';
import { Component } from '@angular/core';
import { map } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listagem-paciente',
  templateUrl: './listagem-paciente.component.html',
  styleUrls: ['./listagem-paciente.component.css']
})

export class ListagemPacienteComponent {
  listaPacientes: IBeneficiarioDto[] = [];
  telaParaApresentar = 'lista';
  storageInfo!: Storage;

  constructor(private http: HttpClient, private router: Router){
    this.storageInfo = window.localStorage;
    this.listarTodos();
  }

  listarTodos(){
    this.http.get('https://localhost:7154/Beneficiario/ListarTodos')
    .pipe(
      map((response:any) => {
        return Object.values(response);
      })
    )
    .subscribe((data) => {
      for(let index = 0; index <data.length; index++){
        let contentJson:any = data[index];
        this.listaPacientes.push(contentJson as IBeneficiarioDto);
      }
    })
  }

  editarPaciente(id: number) {
    this.router.navigate([`editar-paciente/${id}`]);
  }

  removerPaciente(id: number) {
    this.http.delete(`https://localhost:7154/Beneficiario/Delete?idBeneficiario=${id}`)
    for (let i = 0; i < this.listaPacientes.length; i++) {
      if (id == this.listaPacientes[i].idBeneficiario){
        this.listaPacientes.splice(i, 1);
      }
    }
  }
}



