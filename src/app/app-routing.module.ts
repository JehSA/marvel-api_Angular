import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CharactersComponent } from './characters/characters/characters.component';
import { DescriptionComponent } from './characters/description/description.component';


const routes: Routes = [
  { path: "", component: AppComponent },
  { path: "characters", component: CharactersComponent },
  { path: "description/:id", component: DescriptionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
