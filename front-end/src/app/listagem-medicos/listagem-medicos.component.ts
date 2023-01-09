import { HttpClient } from '@angular/common/http';
import { IProfissionalDto } from './../interfaces/IProfissionalDto';

import { Component, Input } from '@angular/core';

import { map } from 'rxjs';
import { Router } from '@angular/router';



@Component({

  selector: 'app-listagem-medico',

  templateUrl: './listagem-medicos.component.html',

  styleUrls: ['./listagem-medicos.component.css']

})

export class ListagemMedicoComponent {
  listaProfissionais: IProfissionalDto[] = [];
  telaParaApresentar = 'lista'
  storageInfo!: Storage;


  constructor(private http: HttpClient, private router: Router){
    this.storageInfo = window.localStorage;
    this.listarTodos();
  }

  listarTodos(){

    this.http.get('https://localhost:7154/Profissional/ListarTodos')
    .pipe(
      map((response:any) => {
        return Object.values(response);
      })
    )
    .subscribe((data) => {
      for(let index = 0; index <data.length; index++){
        let contentJson:any = data[index];
        //let conteudoTipoTemp:IProfissionalDto = conteudoJson as IProfissionalDto;

        //this.listaProfissionais.push({idProfissional:contentJson.idProfissional, nome:contentJson.nome, telefone:contentJson.telefone, endereco:contentJson.endereco, ativo:contentJson.ativo});
       this.listaProfissionais.push(contentJson as IProfissionalDto);
      }
    });
  }

  editarProfissional(id: number) {
    this.router.navigate([`editar-medico/${id}`]);
  }

  removerProfissional(id: number) {
    this.http.delete(`https://localhost:7154/Profissional/Delete?idProfissional=${id}`)
    for (let i = 0; i < this.listaProfissionais.length; i++) {
      if (id == this.listaProfissionais[i].idProfissional){
        this.listaProfissionais.splice(i, 1);
      }
    }
  }

}


