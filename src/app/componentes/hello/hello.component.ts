import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Angular {{version}}!</h1>`,
  styles: [`h1 { font-family:'COMIC SANS MS'; }`]
})
export class HelloComponent  {
  @Input() version: string;
}
