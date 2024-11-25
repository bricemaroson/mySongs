import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { UserProfilComponent } from './user-profil/user-profil.component';
import { AuthComponent } from './auth/auth.component';


const routes: Routes = [
  {
    path: 'users',
    component: UserComponent,
    children: [
      { path: '', redirectTo: 'profil', pathMatch: 'full' },
      { path: 'profil', component: UserProfilComponent },
      { path: 'auth', component: AuthComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [

  
    UserProfilComponent,
          AuthComponent
  ]
})
export class UsersRoutingModule { }
