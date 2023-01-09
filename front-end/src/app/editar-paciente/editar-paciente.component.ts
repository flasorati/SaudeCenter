import { IBeneficiarioDto } from './../interfaces/IBeneficiario';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-paciente',
  templateUrl: './editar-paciente.component.html',
  styleUrls: ['./editar-paciente.component.css']
})
export class EditarPacienteComponent {
  beneficiario!: IBeneficiarioDto;
  idRecebido!: number;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router){
    this.route.paramMap.subscribe(params => {
      this.idRecebido = Number(params.get('id'));
  });
}
  ngOnInit(): void{
    this.beneficiario = {
      idBeneficiario: this.idRecebido ?? 0,
      nome:'',
      cpf:'',
      email:'',
      senha:'',
      endereco:'',
      telefone:'',
      numeroCarteirinha:'',
      ativo: true,
    }

    if(this.idRecebido) {
      this.http
      .get(`https://localhost:7154/Beneficiario/ConsultarPorBeneficiario/${this.idRecebido}`)
      .subscribe((data) => {
        this.beneficiario = data as IBeneficiarioDto;
    });
    }
  }
  salvarAlteracao(){
    if(this.beneficiario.idBeneficiario == 0 || this.beneficiario.idBeneficiario == null){
      this.http.post('https://localhost:7154/Beneficiario/CadastrarBeneficiario', this.beneficiario)
      .subscribe((data)=>{
        this.router.navigate([`listagem-paciente`]);
      });
      } else {
      this.http.patch('https://localhost:7154/Beneficiario/Atualizar', this.beneficiario)
        .subscribe((data) => {
          this.router.navigate([`listagem-paciente`]);
        });
    }
  }
}

