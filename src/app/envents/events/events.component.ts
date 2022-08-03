import { ActivatedRoute } from '@angular/router';
import { CharacterService } from 'src/app/services/character.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  allEvents!: any;
  event!: any;

  constructor(
    private serviceEvents: CharacterService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.getAllEvents();
    this.getEventById();
  }

  getAllEvents() {
    this.allEvents = this.serviceEvents.getAllEvent();
    console.log(this.allEvents)
  }

  getEventById() {
    const id = this.route.snapshot.paramMap.get('id')
    this.event = this.serviceEvents.getEventById(id).subscribe(eventId => {
      this.event = eventId;
      console.log(eventId)
    })
  }

}
