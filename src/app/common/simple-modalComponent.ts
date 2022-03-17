import { Component, ElementRef, Inject, Input, ViewChild } from "@angular/core";
import { $ } from 'protractor';
import { JQUERY_TOKEN } from './jQuery.service';

@Component({
  selector: 'simple-modal',
  template: `
<div id={{elementId}}  #modalcontainer class="modal fade" tabindex="-1">
  <div class="moda-dialog">
    <div class="modal-content">
      <div class="Modal-header">
        <button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
        <h4 class="modal-title">{{title}}</h4>
      </div>
      <div class="modal.body" (click)="closeModal()">
        <ng-content></ng-content>
      </div>
    </div>
  </div>
</div>
`,
  styles: [`
 .modal-body {height: 250px; ovrerflow-y: scroll;}
`]
})
export class SimpleModalComponent {
  @Input() title: string;
  @Input() elementId: string; //Per esempio  elementId="searchResults" in nav-bar.component.html
  /*
     Riceve in input una stringa che indica ad angular2 riferimentpo a variabile locale
     in questo caso l'elemento del dom dreferenziato con #modalcontainer in questa pagina
  */

  @Input() closeOnBodyClick: string;
  constructor(@Inject(JQUERY_TOKEN) private $: any) {

  }
  @ViewChild('modalcontainer') contaierEl: ElementRef
  closeModal() {
    if (this.closeOnBodyClick.toLocaleLowerCase() === "true") {
      this.$(this.contaierEl.nativeElement).modal('hide');
    }
  }
}