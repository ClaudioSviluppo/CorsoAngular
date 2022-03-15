import { Routes } from '@angular/router';
import { Error404Component } from './errors/404.component';
import { CreateEventComponent } from './events/create-event.component';
import { CreateSessionComponent } from './events/event-details/create-session.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventRouteActivator } from './events/event-details/event-route.activator.service';
import { EventsListComponent } from './events/events-list.component';
import { EventListResolver } from './events/shared/event-list-resolver.service';

 export const appRoutes: Routes = [
     { path: 'event/new', component: CreateEventComponent,
       canDeactivate:['canDeactivateCreateEvent']},//Qui uso una function definita in appModules
     { path: 'events', component: EventsListComponent,resolve:
        {events:EventListResolver}},//events è una property della classe EventsListComponent
     { path: 'event/:id', component: EventDetailsComponent, canActivate:[EventRouteActivator]}, //Qui uso il mio service
     { path: '404', component: Error404Component}, 
     { path: '', redirectTo: '/events', pathMatch: 'full'},
     {
        path: 'user', 
        loadChildren: () => import ('./user/user.module')
        .then(m => m.UserModule)
      },
      { path: 'events/session/new', component: CreateSessionComponent}
 ]