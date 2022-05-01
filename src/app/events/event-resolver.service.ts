import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { EventService } from './shared/event.service';

@Injectable()
export class EventResolver implements Resolve<any> {
    constructor(private eventService: EventService ){}

    resolve(route :ActivatedRouteSnapshot){
        //Metodo asincrono, qui faccio una tipico metodo asincrono
        //simile ad una chiamata AJAX
        return this.eventService.getEvent(route.params['id']);
    }   
}
