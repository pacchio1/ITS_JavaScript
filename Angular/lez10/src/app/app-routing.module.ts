import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StudentiComponent } from './components/studenti/studenti.component';
import { ScienziatiComponent } from './components/scienziati/scienziati.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'studenti', component: StudentiComponent },
  {path: 'scienziati', component: ScienziatiComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
