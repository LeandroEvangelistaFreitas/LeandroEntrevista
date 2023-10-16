import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-default',
  templateUrl: './text-default.component.html',
  styleUrls: ['./text-default.component.scss']
})
export class TextDefaultComponent {
  @Input() size = 'md';
  @Input() text = '';
  @Input() color = 'black';
  @Input() emphasis = '';
  @Input() weight = 'sm';
  @Input() padding = 'p-5';

}
