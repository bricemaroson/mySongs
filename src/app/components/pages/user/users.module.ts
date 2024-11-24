import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { UserProfilComponent } from './user-profil/user-profil.component';


const routes: Routes = [
  {
    path: 'users',
    component: UserComponent,
    children: [
      { path: '', redirectTo: 'profil', pathMatch: 'full' },
      { path: 'profil', component: UserProfilComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [

  
    UserProfilComponent
  ]
})
export class UsersRoutingModule { }
