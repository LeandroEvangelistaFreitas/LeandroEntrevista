import { Injectable } from '@angular/core';
import { Juros } from '../enum/juros';

@Injectable({
  providedIn: 'root'
})
export class CalcJurosService {
  public valorTotal = 0;
  public valorParcelas = 0;
  public percent = 0;
  public valor = 0;
  public parcelas = 0;
  public vencimento = 0
  constructor() { }

  setData(initData: any) {
    this.valor = initData[1].valor;
    this.parcelas = initData[1].parcelas;
    this.vencimento = initData[1].vencimento;
    const percent = Juros.juros / 100;
    this.valorTotal = (this.valor + (this.valor * percent))
    this.valorParcelas = this.valorTotal / this.parcelas;
  }
}
