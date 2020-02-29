import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsComponent } from './components/events/events.component';
import { EventlistComponent } from './component/eventlist/eventlist.component';
import {HttpClientModule} from '@angular/common/http';
import { AddEventComponent } from './component/add-event/add-event.component'

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    EventlistComponent,
    AddEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
