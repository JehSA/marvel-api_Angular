import { CharacterService } from 'src/app/services/character.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css']
})
export class CoverComponent implements OnInit {

  comicImage!: any;

  constructor(
    public dialogRef: MatDialogRef<CoverComponent>,
    public route: ActivatedRoute,
    public service: CharacterService
  ) { }

  ngOnInit(): void {
    this.getComicsId
  }

  public getComicsId() {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.getComicByCharacter(id).subscribe(comic => {
      this.comicImage = comic.thumbnail;
      console.log(comic, "Comics!!!!")
    });
  }


}
