import { DatePipe } from "@angular/common";

export interface IAgendamentoDto {
  idAgendamento:number,
  idHospital:number,
  idEspecialidade:number,
  idProfissional:number,
  dataHoraAgendamento:DatePipe,
  idBeneficiario:number,
  ativo:boolean,
}
