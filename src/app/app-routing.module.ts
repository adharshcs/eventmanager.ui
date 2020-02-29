import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventlistComponent } from './component/eventlist/eventlist.component';
import { AddEventComponent } from './component/add-event/add-event.component';


const routes: Routes = [
  {
    path : 'events',
    component : EventlistComponent
  },
  {
    path : 'add-events',
    component : AddEventComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
