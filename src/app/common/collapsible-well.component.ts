import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Component, Input } from "@angular/core";

@Component({
selector: 'collapsible-well',
template: `
<div (click)="toggleContent()" class="well pointable">
    <h4>
        <ng-content select="[well-title]"></ng-content>
    </h4>
    <!--ng-content è un componente angular-->
    <ng-content *ngIf="visible" select="[well-body]"></ng-content>
</div>
`
})
export class CollapsibleWellComponent {
 @Input() title: string;
 visible: boolean = true;

 toggleContent() {
     //Nasconde l'html nelle pagine dove ho messo il mio selettore collapsible
    //  Esempio se guardo questa sezione in session-list.components.html
    //  <collapsible-well [title]="session.name">
    //         <h6>{{session.name}}</h6>
    //         <span>Duration: {{session.duration}} </span><br/>
    //         <span>Level: {{session.level}} </span>
    //         <p>Level: {{session.abstract}} </p>
    //     </collapsible-well>

    // Il titolo sessionMame sarà sempre visibile, il resto al click sull'item
    // verrà nascosto o meno in funzione del valore corrente di this.visible

    this.visible = !this.visible;
 }
}