import { CharacterService } from './../../services/character.service';
import { Characters } from './../../models/characters';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ConnectableObservable, map, Observable } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  public page: number = 1;

  pageEvent!: PageEvent;

  testPage: any = [];
  pageSize = 6;
  pageIndex = 1;
  length = 1;
  pageSizeOptions: number[] = [6, 12, 18]

  allCharacters!: Observable<any>;
  characterId!: Observable<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>(this.testPage);

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    this.getCharacters();
    //this.pagination();
  }

  onPaginateChange($event: { pageSize: number; length: any; pageIndex: number; }) {

    if(this.pageSize !== $event.pageSize)  {
      this.pagination($event.pageIndex + 1, $event.pageSize);
    }else{
      this.pagination($event.pageIndex + 1, $event.pageSize);
    }
    this.dataSource = new MatTableDataSource<any>(this.testPage);
    this.pageSize = $event.pageSize;
    this.length = $event.length;
    //this.pageIndex = $event.pageIndex;

  }

  public getCharacters() {
    this.allCharacters = this.characterService.getAllCharacters()
    console.log(this.allCharacters)

    //paginação
    this.testPage = this.characterService.pagination().subscribe(res => {
      this.testPage = res;
      this.length = res.total;
      this.pageSize = this.pageSize;
      //this.pageIndex = res.CurrentPage - 1;
      console.log(res)
    });

  }

  public getCharacter(id: number) {
    this.characterId = this.characterService.getCharacterById(id);
  }

  public pagination(page?: number | undefined, limit?: number | undefined) {
    this.testPage = this.characterService.pagination()
  }



}
