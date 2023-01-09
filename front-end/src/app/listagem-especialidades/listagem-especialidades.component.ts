import { IEspecialidadeDto } from './../interfaces/IEspecialidade';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivationEnd, Router } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-listagem-especialidades',
  templateUrl: './listagem-especialidades.component.html',
  styleUrls: ['./listagem-especialidades.component.css']
})
export class ListagemEspecialidadesComponent {
  listaEspecialidades: IEspecialidadeDto[] = [];
  telaParaApresentar = "lista";
  storageInfo!: Storage;


  constructor(private http: HttpClient, private router: Router){
    this.storageInfo = window.localStorage;
    this.listarTodos();
  }

  listarTodos(){

    this.http.get('https://localhost:7154/Especialidade/ListarTodos')
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
       this.listaEspecialidades.push(contentJson as IEspecialidadeDto);
      }
    });
  }

  editarEspecialidade(id: number) {
    this.router.navigate([`editar-especialidade/${id}`]);
  }

  removerEspecialidade(id: number) {
    this.http.delete(`https://localhost:7154/Especialidade/Delete?idEspecialidade=${id}`)
    for (let i = 0; i < this.listaEspecialidades.length; i++) {
      if (id == this.listaEspecialidades[i].idEspecialidade){
        this.listaEspecialidades.splice(i, 1);
      }
    }
  }
}
