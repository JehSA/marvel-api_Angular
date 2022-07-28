import { Characters } from './../../models/characters';
import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  characterId!: any;
  comic!: any;

  constructor(
    private characterService: CharacterService,
    private route: ActivatedRoute,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCharacter();
    this.getComic();
  }

  getCharacter() {
    const id = this.route.snapshot.paramMap.get('id')
    this.characterService.getCharacterById(id).subscribe(persona => {
      this.characterId = persona;
    });
  }

  getComic() {
    const id = this.route.snapshot.paramMap.get('id')
    this.characterService.getComicByCharacter(id).subscribe(comic => {
      this.comic = comic;
    });
  }

}
