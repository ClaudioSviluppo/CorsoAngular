import { Routes } from '@angular/router';
import { Error404Component } from './errors/404.component';

import {
EventsListComponent,
EventDetailsComponent,
CreateEventComponent,
EventListResolver,
CreateSessionComponent,
EventResolver
} from './events/index'

 export const appRoutes: Routes = [
     { path: 'event/new', component: CreateEventComponent, canDeactivate:
     ['canDeactivateCreateEvent']},//Qui uso una function definita in appModules
     { path: 'events', component: EventsListComponent,resolve:{events:EventListResolver}},//events è una property della classe EventsListComponent
     { path: 'event/:id', component: EventDetailsComponent, resolve:{event:EventResolver}}, //Qui uso il mio service
     { path: '404', component: Error404Component}, 
     { path: '', redirectTo: '/events', pathMatch: 'full'},
     {
        path: 'user', 
        loadChildren: () => import ('./user/user.module')
        .then(m => m.UserModule)
      },
      { path: 'events/session/new', component: CreateSessionComponent}
 ]