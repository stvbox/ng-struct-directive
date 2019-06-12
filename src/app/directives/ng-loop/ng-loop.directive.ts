import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[ngLoop]',
})
export class NgLoopDirective {
  @Input('ngLoop') items: number[];
  @Input('ngLoopBy') byValue: string[];

  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>) { }

  ngOnChanges() {
    for (const input of this.byValue) {
      this.container.createEmbeddedView(this.template, {
        $implicit: input,
        revers: [...input].reverse().join(''),
      });
    }
  }

}
