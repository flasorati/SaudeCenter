import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { IHospitalDto } from './../interfaces/IHospitalDto';
import { Component } from '@angular/core';

@Component({
  selector: 'app-editar-hospital',
  templateUrl: './editar-hospital.component.html',
  styleUrls: ['./editar-hospital.component.css']
})
export class EditarHospitalComponent {
 hospital!: IHospitalDto;
 idRecebido!: number;

 constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router){
    this.route.paramMap.subscribe(params => {
      this.idRecebido = Number(params.get('id'));
  });
 }

 ngOnInit(): void {
  this.hospital = {
    idHospital: this.idRecebido ?? 0,
    nome: '',
    cnpj: '',
    endereco: '',
    telefone: '',
    cnes: '',
    ativo: true
  }

  if(this.idRecebido) {
    this.http
    .get(`https://localhost:7154/Hospital/ConsultarPorHospital/${this.idRecebido}`)
    .subscribe((data) => {
      this.hospital = data as IHospitalDto;
    });
  }
}

  salvarAlteracao(){
    if(this.hospital.idHospital == 0 || this.hospital.idHospital == null){
      this.http.post('https://localhost:7154/Hospital/CadastrarHospital', this.hospital)
      .subscribe((data)=>{
        this.router.navigate([`listagem-hospitais`]);
      });
      } else {
      this.http.patch('https://localhost:7154/Hospital/Atualizar', this.hospital)
        .subscribe((data) => {
          this.router.navigate([`listagem-hospitais`]);
        });
    }
  }
}
