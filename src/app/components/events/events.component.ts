import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  @Input() id="College Culturals";
  @Input() name="Non Technical";
  @Input() phone="17/06/2020";
  @Input() address="Main Auditorium"

  constructor() { }

  ngOnInit(): void {
  }

}
