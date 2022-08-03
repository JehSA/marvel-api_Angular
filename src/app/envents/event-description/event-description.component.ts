import { ActivatedRoute } from '@angular/router';
import { CharacterService } from 'src/app/services/character.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-description',
  templateUrl: './event-description.component.html',
  styleUrls: ['./event-description.component.css']
})
export class EventDescriptionComponent implements OnInit {

  event!: any;

  constructor(
    private service: CharacterService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getEvent();
  }

  getEvent() {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.getEventById(id).subscribe(eventId => {
      this.event = eventId;
      console.log(eventId, "persona!!!!")
    });
  }

}
