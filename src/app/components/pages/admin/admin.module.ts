import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserPermissionsComponent } from './user-permissions/user-permissions.component';
import { UserCreateComponent } from './user-create/user-create.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'show', pathMatch: 'full' },
      { path: 'show', component: UserDetailsComponent },
      { path: 'edit', component: UserEditComponent },
      { path: 'permissions', component: UserPermissionsComponent },
      { path: 'create', component: UserCreateComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [
    UserDetailsComponent,
    UserEditComponent,
    UserPermissionsComponent,
    UserCreateComponent,
  ],
})
export class UsersRoutingModule {}
