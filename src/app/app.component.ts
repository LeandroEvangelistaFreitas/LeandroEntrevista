import { Component } from '@angular/core';
import { CalcJurosService } from './services/calc-juros.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'leandroEvangelista';
  page = 1;
  initData: any = [{}, {}];
  constructor(public calcJuros: CalcJurosService) {
  }

  setNextPage(event: any) {
    switch (this.page) {
      case 1:
        this.initData[0] = event;
        break;
      case 2:
        this.initData[1] = event;
        this.calcJuros.setData(this.initData);
        break;
      default:
        break;
    }
    this.page = this.page + 1;

    console.log(this.initData);
  }
  voltar() {
    this.page = this.page - 1;
  }
}
