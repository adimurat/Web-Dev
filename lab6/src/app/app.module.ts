import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { AlbumsComponent } from './albums/albums.component';
import { HomeComponent } from './home/home.component';
import { AlbumPhotoComponent } from './album-photo/album-photo.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AlbumDetailsComponent,
    AlbumsComponent,
    HomeComponent,
    AlbumPhotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'home', pathMatch: "full"},
      {path: 'home', component: HomeComponent},
      {path: 'about', component: AboutComponent},
      {path: 'albums/:id', component: AlbumDetailsComponent},
      {path: 'album-detail', component: AlbumDetailsComponent},
      {path: 'albums/:id/photos', component: AlbumPhotoComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
