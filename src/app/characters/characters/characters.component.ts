import { DescriptionComponent } from './../description/description.component';
import { CharacterService } from './../../services/character.service';
import { Characters } from './../../models/characters';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ConnectableObservable, map, Observable } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {PageEvent} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  public page: number = 1;

  pageEvent!: PageEvent;

  testPage: any = [];
  pageSize = 20;
  pageIndex = 1;
  length = 0;
  pageSizeOptions: number[] = [20, 50, 100]

  allCharacters!: Observable<any>;
  characterId!: Observable<any>;

  /** @ignore*/
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>([this.testPage]);

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(private characterService: CharacterService,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.getCharacters();
    //this.pagination();
  }

  //onPaginateChange($event: { pageSize: number; length: any; pageIndex: number; }) {
//
  //  if(this.pageSize !== $event.pageSize)  {
  //    this.pagination($event.pageIndex + 1, $event.pageSize);
  //  }
  //  this.pageSize = $event.pageSize;
  //  this.length = $event.length;
  //  this.pageIndex = $event.pageIndex;
//
  //}

  public getCharacters() {
    this.allCharacters = this.characterService.getAllCharacters()
    console.log(this.allCharacters)

    //paginação
    //this.characterService.pagination().subscribe(res => {
    //  this.testPage = res;
    //  this.length = res.total;
    //  this.pageSize = this.pageSize;
    //  //this.pageIndex = res.CurrentPage - 1;
    //  console.log(res)
    //});

  }

  public getCharacter(id: number) {
    this.characterId = this.characterService.getCharacterById(id);
  }

  //*Função de paginação mais próxima de estar certa!!!!
  //public pagination(page?: number | undefined, limit?: number | undefined) {
  //  console.log(page, limit)
  //  this.testPage = this.characterService.pagination(page, limit);
  //  this.testPage.subscribe((res: any) => {
  //  })
  //}

  //openDialog() {
  //  const dialogRef = this.dialog.open(DescriptionComponent, {
  //    width: '75%',
  //    height: '85%',
  //    data: {}
  //  });
  //  dialogRef.afterClosed().subscribe(result => {
  //    console.log(`Dialog result: ${result}`);
  //  });
  //}



}
