import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SidebarComponent} from "./left-sidebar/sidebar.component";
import { LocalNavigationComponent } from './local-navigation/local-navigation.component';
import { SocialNetworksComponent } from './social-networks/social-networks.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LocalNavigationComponent,
    SocialNetworksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
