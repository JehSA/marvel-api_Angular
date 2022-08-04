import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-hqs',
  templateUrl: './hqs.component.html',
  styleUrls: ['./hqs.component.css']
})
export class HqsComponent implements OnInit {

  allComics!: Observable<any>;

  constructor(
    public service: CharacterService
  ) { }

  ngOnInit(): void {
    this.getComics();
  }

  getComics() {
    this.allComics = this.service.getAllComics()
    console.log(this.allComics)
  }

}
