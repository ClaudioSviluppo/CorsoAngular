import { Component, Input } from "@angular/core";
import { ISession } from '../shared/index'

@Component({
    selector: 'session-list',
    templateUrl: './session-list.component.html'
})
export class SessionListComponent {
    //Il compnente si aspetta in input un interfaccia ISession
    //presente in event.model.ts  e importato da ../shared/index
   @Input() sessions:ISession[]

}