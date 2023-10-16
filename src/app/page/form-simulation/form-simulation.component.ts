import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-simulation',
  templateUrl: './form-simulation.component.html',
  styleUrls: ['./form-simulation.component.scss']
})
export class FormSimulationComponent {
  @Input() valor = '';
  @Input() parcelas = '';
  @Input() vencimento = '';
  @Input() verMais = false;
  @Input() parcelasInput = '';
  @Output() simular = new EventEmitter<any>();


  selectBtn(event: any) {
    this.parcelas = this.parcelas === event ? '' : event;
  }
  selectedBtnClass(event: any) {
    return event === this.parcelas ? 'selected' : '';
  }

  vencimentoBtn(event: any) {
    this.vencimento = this.vencimento === event ? '' : event;
  }
  vencimentoBtnClass(event: any) {
    return event === this.vencimento ? 'selected' : '';
  }
  verMaisBtn() {
    this.parcelasInput = '';
    this.parcelas = '';
    this.verMais = !this.verMais;
    this.selectBtn('')
  }

  simularBtn() {
    this.simular.emit(
      {
        valor: Number(this.valor),
        parcelas: Number(!this.verMais ? this.parcelas : this.parcelasInput),
        vencimento: this.vencimento,
        verMais: this.verMais,
      }
    )
  }
  disabledBtn() {
    return !(!!this.valor && !!this.vencimento && !!(!!this.parcelas || !!this.parcelasInput));
  }
}