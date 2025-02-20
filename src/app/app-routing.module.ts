import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResidencesComponent } from './residences/residences.component';
import { ResidenceDetailsComponent } from './residences/residence-details/residence-details.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'residences', component: ResidencesComponent },
  { path: 'home', component: HomeComponent },
  { path: 'residences/:id', component: ResidenceDetailsComponent }, // Route dynamique pour les détails
  { path: '**', component:NotFoundComponent } // Redirige vers la liste des résidences si la route n'existe pas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
