import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ToastrService } from './common/toastr.service';
import { Error404Component } from './errors/404.component';

import { EventsAppComponent } from './events-app.component';
import { CreateEventComponent } from './events/create-event.component';
import { CreateSessionComponent } from './events/event-details/create-session.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventRouteActivator } from './events/event-details/event-route.activator.service';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { EventsListComponent } from './events/events-list.component';
import { SessionListComponent } from './events/shared';
import { EventListResolver } from './events/shared/event-list-resolver.service';
import { EventService } from './events/shared/event.service';
import { NavbarComponent } from './nav/navbar.component';
import { appRoutes } from './routes';
import { AuthService } from './user/auth.service';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    NavbarComponent,
    CreateEventComponent,
    Error404Component,
    CreateEventComponent,
    CreateSessionComponent,
    SessionListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivator,
    {provide: 'canDeactivateCreateEvent', useValue: checkDirtyState},
    EventListResolver,
    AuthService
],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState (createEventComponent:CreateEventComponent) {
  if (createEventComponent.isDirty){
    return window.confirm('You have not saved this event, do you really want to cancel?')
  }
  return true;
}