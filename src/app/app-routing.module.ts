import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { UserComponent } from './components/pages/user/user.component';
import { UserProfilComponent } from './components/pages/user/user-profil/user-profil.component';
import { UserDetailsComponent } from './components/pages/admin/user-details/user-details.component';
import { UserCreateComponent } from './components/pages/admin/user-create/user-create.component';
import { UserEditComponent } from './components/pages/admin/user-edit/user-edit.component';
import { UserPermissionsComponent } from './components/pages/admin/user-permissions/user-permissions.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'users',
    component: UserComponent,
    children: [
      { path: '', redirectTo: 'profil', pathMatch: 'full' },
      { path: 'profil', component: UserProfilComponent },
    ],
  },
  {
    path: 'admin',
    component: UserComponent,
    children: [
      { path: '', redirectTo: 'show', pathMatch: 'full' },
      { path: 'show', component: UserDetailsComponent },
      { path: 'new', component: UserCreateComponent },
      { path: 'edit', component: UserEditComponent },
      { path: 'permissions', component: UserPermissionsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
