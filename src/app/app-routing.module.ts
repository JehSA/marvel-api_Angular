import { EventDescriptionComponent } from './envents/event-description/event-description.component';
import { EventsComponent } from './envents/events/events.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CharactersComponent } from './characters/characters/characters.component';
import { DescriptionComponent } from './characters/description/description.component';
import { ComicsComponent } from './characters/comics/comics.component';


const routes: Routes = [
  { path: "", component: CharactersComponent, pathMatch: 'full' },
  { path: "characters", component: CharactersComponent },
  { path: "comics/:id", component: ComicsComponent },
  { path: "description/:id", component: DescriptionComponent },
  { path: "events", component: EventsComponent },
  { path: "events/:id", component: EventDescriptionComponent },
  { path: "**", redirectTo: "hocharacters", pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
