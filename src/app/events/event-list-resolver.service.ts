import { Injectable } from '@angular/core';
import { Resolve} from '@angular/router';
import { EventService } from './shared/event.service';
import  { map } from 'rxjs/operators';

@Injectable()
export class EventListResolver implements Resolve<any> {
    constructor(private eventService: EventService ){}
    resolve( ){
        //Metodo asincrono, qui faccio una tipico metodo asincrono
        //simile ad una chiamata AJAX
        return this.eventService.getEvents().pipe(map(events => events));
    }
    
}