import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-hq-description',
  templateUrl: './hq-description.component.html',
  styleUrls: ['./hq-description.component.css']
})
export class HqDescriptionComponent implements OnInit {

  comicId!: any;

  constructor(
    public route: ActivatedRoute,
    public service: CharacterService
  ) { }

  ngOnInit(): void {
    this.getComic();
  }

  getComic() {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.getComicById(id).subscribe(hq => {
      this.comicId = hq;
      console.log(hq, "persona!!!!")
    });
  }

}
