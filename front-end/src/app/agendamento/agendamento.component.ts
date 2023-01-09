import { IAgendamentoDto } from './../interfaces/IAgendamento';
import { IBeneficiarioDto } from './../interfaces/IBeneficiario';
import { IProfissionalDto } from './../interfaces/IProfissionalDto';
import { IEspecialidadeDto } from './../interfaces/IEspecialidade';
import { IHospitalDto } from './../interfaces/IHospitalDto';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.css']
})
export class AgendamentoComponent implements OnInit{
  formulario!: FormGroup;
  hospital!: IHospitalDto;
  listaHospitais: IHospitalDto[] = [];
  especialidade!: IEspecialidadeDto;
  listaEspecialidades: IEspecialidadeDto[] = [];
  profissional!: IProfissionalDto;
  listaProfissionais: IProfissionalDto[] = [];
  beneficiario!: IBeneficiarioDto;
  opcoes!: any[];
  opcao!: string;
  desc!: string;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,

  ){}

 ngOnInit(){
     this.formulario = this.formBuilder.group({
      hospital: [null],
      especialidade: [null],
      profissional: [null],
      beneficiario: [null],
      status: true
    });

    this.http.get('https://localhost:7154/Hospital/ListarTodos')
      .pipe(
        map((response:any) => {
          return Object.values(response);
        })
      )
      .subscribe((data) => {
        for(let index = 0; index <data.length; index++){
          let contentJson:any = data[index];
          this.listaHospitais.push(contentJson as IHospitalDto);
          console.log(data)
        }
      });



      this.http.get('https://localhost:7154/Profissional/ListarTodos')
      .pipe(
        map((response:any) => {
          return Object.values(response);
        })
      )
      .subscribe((data) => {
        for(let index = 0; index <data.length; index++){
          let contentJson:any = data[index];
          this.listaProfissionais.push(contentJson as IProfissionalDto);
          console.log(data)
        }
      });



      this.http.get('https://localhost:7154/Especialidade/ListarTodos')
      .pipe(
        map((response:any) => {
          return Object.values(response);
        })
      )
      .subscribe((data) => {
        for(let index = 0; index <data.length; index++){
          let contentJson:any = data[index];
          this.listaEspecialidades.push(contentJson as IEspecialidadeDto);
          console.log(data)
        }
      });


  }



confirmar() {
  //implementar o objeto na api, chamar a api(subcribe)
  this.http.post('https://localhost:7154/Agendamento/CadastrarAgendamento', this.formulario)
    .subscribe((data: any) => {
        this.router.navigate(['agendamento']);
        this.formulario.reset();
    });
}

onSubmit() {
  this.confirmar();
}

resetar(){
  this.formulario.reset();
}




  /* varificaValidTouched(campo: any){
    return this.formulario.get(campo).valid && this.formulario.get(campo)?.touched
  }

  aplicaCSSErro(campo: any){
    return{
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    } */

  }








