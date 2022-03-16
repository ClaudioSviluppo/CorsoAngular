import { Component, Input, Output } from '@angular/core';
import { IEvent } from './shared/index';

@Component ({
   selector: 'event-thumbnail' ,
   template: `
    <div [routerLink]="['/event',event.id]" class="well hoverwell thumbnail">
     <h2>{{event?.name | uppercase }}</h2>
     <div>Date:{{event?.date | date:'shortDate'}}</div>

   <!-- usa la classe well se il metodo ritorna array -->
     <div class="well" [ngClass]="getStartTimeClass()"  [ngSwitch]
     ="event?.time">
       Time:{{event?.time}}
       <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
       <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
       <span *ngSwitchDefault>(Normal Start)</span>
     </div>

     <div>Price:{{event?.price | currency:'USD'}}</div>
     <!--Rimuove dal DOM  il div solo se non è valorizzato-->
     <div  *ngIf="event?.location">
        <span>Location: {{event?.location?.address}}</span>
        <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
     </div>
     <!--Mostra il div solo se è valorizzato-->
      <div *ngIf="event?.onlineUrl">  
         OnlineUrl:{{event.onlineUrl}}
      </div>
    </div>
   `,
   styles:[`
   .green { color: #003300 !important; }
   .bold { font-weight: bold; }
   .mySize { font-size: 25px }
   .thumbnail { min-height: 210px;}
   .pad-left { margin-left: 10px;}
   .well div { color: #bbb;}
   `]
})
export class EventThumbnailComponent {
@Input() event : IEvent

getStartTimeClass():any {
   const isEarlyStart = this.event && this.event.time ==='8:00 am';
   if (this.event && this.event.time ==='8:00 am')
   return ['green bold mySize'];
   return [];
}

}