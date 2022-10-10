import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appResalta]',
})
export class ResaltaDirective implements OnInit {
  @Input() appResalta: string = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.setStyle(
      this.el.nativeElement,
      'backgroundColor',
      this.appResalta || 'yellow'
    );
  }
}

/*  Ciclo de vida del componente o directiva
 *
    1. constructor
    2. valores propiedades  <- orange
    3. onInit <-- orange
    ...


    <input type="text" name="telefono" validatePhone="ES">

 */
