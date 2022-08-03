import { MatTableDataSource } from '@angular/material/table';
import { CharacterService } from 'src/app/services/character.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

  characterId!: any;
  comicsId: any;
  displayedColumns = ['title', 'description', 'id'];


  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService
  ) { }

  ngOnInit() {
    this.getComicsId()
  }

  public getComicsId() {
    const id = this.route.snapshot.paramMap.get('id')
    this.characterService.getComicByCharacter(id).subscribe(comic => {
      this.comicsId = comic;
      console.log(comic, "Comics!!!!")
    });
  }

  getCharacter() {
    const id = this.route.snapshot.paramMap.get('id')
    this.characterService.getCharacterById(id).subscribe(persona => {
      this.characterId = persona.id;
      console.log(persona, "persona!!!!")
    });
  }

}
