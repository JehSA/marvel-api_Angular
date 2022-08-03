import { Characters } from './../../models/characters';
import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  characterId!: any;
  comic!: any;
  series!: any;

  constructor(
    private characterService: CharacterService,
    private route: ActivatedRoute,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getCharacter();
    this.getComic();
    this.getSeries();
  }

  getCharacter() {
    const id = this.route.snapshot.paramMap.get('id')
    this.characterService.getCharacterById(id).subscribe(persona => {
      this.characterId = persona;
      console.log(persona, "persona!!!!")
    });
  }

  // buscando informações a partir do id do character e associando a lista de comics associados ao mesmo.
  getComic() {
    const id = this.route.snapshot.paramMap.get('id')
    this.comic = this.characterService.getComicByCharacter(id).subscribe(comic => {
      this.comic = comic;
      console.log(comic, "Series!!!!")
    });
  }

  // buscando informações a partir do id do character e associando a lista de series associados ao mesmo.
  getSeries() {
    const id = this.route.snapshot.paramMap.get('id')
    this.characterService.getSeriesByCharacter(id).subscribe(serie => {
      this.series = serie;
      console.log(serie, "Series!!!!")
    });
  }

}
