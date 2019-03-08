import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CityComponent } from './city/city.component';

const routes: Routes = [
  { 
    path: 'seattle', 
    component: CityComponent
  },
  { 
    path: 'sanjose', 
    component: CityComponent 
  },
  { 
    path: 'burbank', 
    component: CityComponent 
  },
  { 
    path: 'dallas', 
    component: CityComponent 
  },
  { 
    path: 'dc', 
    component: CityComponent 
  },
  { 
    path: 'chicago', 
    component: CityComponent 
  },
  {
    path:'',
    redirectTo: 'seattle',
    pathMatch: 'full',
  },
  {
    path:'**',
    redirectTo: 'seattle',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
