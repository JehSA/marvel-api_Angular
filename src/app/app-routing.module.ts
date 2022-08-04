import { HqDescriptionComponent } from './hqs/hq-description/hq-description.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CharactersComponent } from './characters/characters/characters.component';
import { DescriptionComponent } from './characters/description/description.component';
import { ComicsComponent } from './characters/comics/comics.component';
import { HqsComponent } from './hqs/hqs/hqs.component';
import { HomeComponent } from './home/home/home.component';
import { EventDescriptionComponent } from './envents/event-description/event-description.component';
import { EventsComponent } from './envents/events/events.component';


const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: 'full' },
  { path: "home", component: HomeComponent },
  { path: "characters", component: CharactersComponent },
  { path: "comics/:id", component: ComicsComponent },
  { path: "hqs", component: HqsComponent },
  { path: "hqs/:id", component: HqDescriptionComponent },
  { path: "description/:id", component: DescriptionComponent },
  { path: "events", component: EventsComponent },
  { path: "events/:id", component: EventDescriptionComponent },
  { path: "**", redirectTo: "home", pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
