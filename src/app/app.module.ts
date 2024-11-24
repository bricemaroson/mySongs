import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { FooterComponent } from './components/partials/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { UserComponent } from './components/pages/user/user.component';
import { UserPermissionsComponent } from './components/pages/admin/user-permissions/user-permissions.component';
import { AdminComponent } from './components/pages/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    UserComponent,
    UserPermissionsComponent,
    AdminComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
