import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Angular {{name}}!</h1>`,
  styles: [`h1 { font-family:'COMIC SANS MS'; }`]
})
export class HelloComponent  {
  @Input() name: string;
}
