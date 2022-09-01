import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SidebarComponent} from "./left-sidebar/sidebar.component";
import { LocalNavigationComponent } from './local-navigation/local-navigation.component';
import { SocialNetworksComponent } from './social-networks/social-networks.component';
import { AdditionalContentComponent } from './additional-content/additional-content.component';
import { PhotoOfTheDayComponent } from './photo-of-the-day/photo-of-the-day.component';
import { DividerComponent } from './divider/divider.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LocalNavigationComponent,
    SocialNetworksComponent,
    AdditionalContentComponent,
    PhotoOfTheDayComponent,
    DividerComponent,
    PostComponent
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
