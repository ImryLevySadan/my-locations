import { Directive, Input, EmbeddedViewRef, TemplateRef, Inject, SimpleChanges } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Directive({
  selector: '[teleportTo]',
})
export class TeleportDirective {
  @Input('teleportTo') selector: string;

  private viewRef: EmbeddedViewRef<any>;
  private host: Element;

  constructor(
    private tpl: TemplateRef<any>,
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit() {
    this.viewRef = this.tpl.createEmbeddedView({});
    this.viewRef.detectChanges();
    this.host = this.document.querySelector(this.selector);
    if (this.host) {
      this.viewRef.rootNodes.forEach((node) => this.host.appendChild(node));
    }
  }

  ngOnDestroy() {
    this.viewRef.destroy();
    this.viewRef = null;
    this.host.innerHTML = '';
  }
}
