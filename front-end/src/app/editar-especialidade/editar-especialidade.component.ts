import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IEspecialidadeDto } from '../interfaces/IEspecialidade';

@Component({
  selector: 'app-editar-especialidade',
  templateUrl: './editar-especialidade.component.html',
  styleUrls: ['./editar-especialidade.component.css']
})
export class EditarEspecialidadeComponent {
  especialidade!: IEspecialidadeDto;
  idRecebido!: number;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router){
    this.route.paramMap.subscribe(params => {
      this.idRecebido = Number(params.get('id'));

  });
}
  ngOnInit(): void{
    this.especialidade = {
      idEspecialidade: this.idRecebido ?? 0,
      nome: '',
      descricao: '',
      ativo: true,
    }

    if(this.idRecebido) {
      this.http
      .get(`https://localhost:7154/Especialidade/ConsultarPorEspecialidade/${this.idRecebido}`)
      .subscribe((data) => {
        this.especialidade = data as IEspecialidadeDto;
    });
    }
  }
  /* validaOpcao(opcao:boolean){
    if(opcao = true){
      this.especialidade.ativo = true;
    }
    else {
    this.especialidade.ativo = false;
  }}; */

  salvarAlteracao(){
    if(this.especialidade.idEspecialidade == 0 || this.especialidade.idEspecialidade == null){
      this.http.post('https://localhost:7154/Especialidade/CadastrarEspecialidade', this.especialidade)
      .subscribe((data)=>{
        this.router.navigate([`listagem-especialidades`]);
      });
      } else {
      this.http.patch('https://localhost:7154/Especialidade/Atualizar', this.especialidade)
        .subscribe((data) => {
          this.router.navigate([`listagem-especialidades`]);
        });
    }
  }

}
