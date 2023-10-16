import { Component, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Juros } from 'src/app/enum/juros';
import { CalcJurosService } from 'src/app/services/calc-juros.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent {
  @Output() confirme = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<any>();
  juros = Juros.juros;
  constructor(public calcJuros: CalcJurosService) {
  }


  cancelar() {
    this.cancel.emit();
  }

  confirmar() {
    this.confirme.emit();
  }
}