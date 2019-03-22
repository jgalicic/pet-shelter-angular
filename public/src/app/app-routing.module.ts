import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'new', component: NewComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: '', component: HomeComponent },
  { path: '', pathMatch: 'full', redirectTo: '/' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
