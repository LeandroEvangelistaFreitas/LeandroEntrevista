import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form-initial',
  templateUrl: './form-initial.component.html',
  styleUrls: ['./form-initial.component.scss']
})
export class FormInitialComponent {
  @Input() name = '';
  @Input() cpf = '';
  @Input() birthday: any;
  @Output() continue = new EventEmitter<any>();
  limpar(): void {
    this.name = '';
    this.cpf = '';
    this.birthday = undefined;

  }
  continuar() {
    this.continue.emit(
      {
        name: this.name,
        cpf: this.cpf,
        birthday: this.birthday,
      }
    )
  }
  replace(){
    this.name = this.name.replace(/[0-9.\,]/g,"");
  }
  disabledBtn() {
    return !(!!this.name && (!!this.cpf && this.cpf.length === 11) && !!this.birthday)
  }

}
