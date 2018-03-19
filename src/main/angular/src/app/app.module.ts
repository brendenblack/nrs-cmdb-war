import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { 
  ApiService,
  JwtService,
  AuthGuard,
  SharedModule,
  UserService,
  HeaderComponent, 
  FooterComponent,
  SidebarComponent
 } from './shared';
 import { AuthModule } from './auth/auth.module';
 import { HomeModule } from './home/home.module';
 import { ServersModule } from './servers/servers.module';

 const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: true });

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    rootRouting,
    AuthModule,
    HomeModule,
    SharedModule,
    ServersModule,
  ],
  providers: [
    ApiService,
    AuthGuard,
    JwtService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
