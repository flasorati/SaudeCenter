import { IProfissionalDto } from './../interfaces/IProfissionalDto';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-medico',
  templateUrl: './editar-medico.component.html',
  styleUrls: ['./editar-medico.component.css']
})
export class EditarMedicoComponent {
  profissional!: IProfissionalDto;
  idRecebido!: number;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router){
    this.route.paramMap.subscribe(params => {
      this.idRecebido = Number(params.get('id'));
  });
}
  ngOnInit(): void{
    this.profissional = {
      idProfissional: this.idRecebido ?? 0,
      nome: '',
      endereco: '',
      telefone: '',
      ativo: true,
    }

    if(this.idRecebido) {
      this.http
      .get(`https://localhost:7154/Profissional/ConsultarPorProfissional/${this.idRecebido}`)
      .subscribe((data) => {
        this.profissional = data as IProfissionalDto;
    });
    }
  }
  salvarAlteracao(){
    if(this.profissional.idProfissional == 0 || this.profissional.idProfissional == null){
      this.http.post('https://localhost:7154/Profissional/CadastrarProfissional', this.profissional)
      .subscribe((data)=>{
        this.router.navigate([`listagem-medicos`]);
      });
      } else {
      this.http.patch('https://localhost:7154/Profissional/Atualizar', this.profissional)
        .subscribe((data) => {
          this.router.navigate([`listagem-medicos`]);
        });
    }
  }

}
