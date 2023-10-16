import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Juros } from 'src/app/enum/juros';
import { CalcJurosService } from 'src/app/services/calc-juros.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent {
  @Output() novaSimulacao = new EventEmitter<any>();
  juros = Juros.juros;

  constructor(public calcJuros: CalcJurosService) {
  }



}
