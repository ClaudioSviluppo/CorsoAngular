import { Directive, OnInit, Inject, ElementRef,Input } from "@angular/core";
import { JQUERY_TOKEN } from './jQuery.service';

@Directive({
    //Questa è una direttiva che sto creando, quello che si viuole fare
    // è attaccargli un gestore click event handler a qualsiasi elemento in cui la richiamo
    //
    selector: '[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit {
    private el: HTMLElement;

    //Il nome di questo input è il nome dell'attributo
    // per esempio modal-trigger="searchResults"  in nav-bar.components.html
    //Lo riceve come parametro in @input  e lo assegna a modalId property
    //che in onInit jquery cercherà nel dom per agganciargli l'eventListener
    @Input('modal-trigger') modalId:string ;
    //Abbiamo bisogno di iniettare JQuery dentro la classe
    constructor(ref: ElementRef, @Inject(JQUERY_TOKEN) private $: any) {
        this.el = ref.nativeElement;
    }

    ngOnInit(): void {
        //Alla funzione di jquery passo l'elemento del dom definito (in questo caso)
        // in simple-modal.components <div id="simple-modal" 
        // e qui vogliamo ascoltare l'evento click
        this.el.addEventListener('click', e => {
           // console.log('Click',e)
            this.$(`#${this.modalId}`).modal({});
        });

    }

}