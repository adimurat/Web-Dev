import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../albums.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-album-photo',
  templateUrl: './album-photo.component.html',
  styleUrl: './album-photo.component.css'
})
export class AlbumPhotoComponent implements OnInit{
  constructor(
    private albumService: AlbumsService,
    private route: ActivatedRoute,
  ) {
  }
  photos$: Observable<{ albumId: number; id: number; title: string; url: string; thumbnailUrl: string; }[]> | undefined;
  albumPhotos: { albumId: number; id: number; title: string; url: string; thumbnailUrl: string; }[] | undefined;
  albums$: Observable<{ id: number; title: string; }[]> | undefined;
  album: { id: number; title: string } | undefined;
  ngOnInit(): void {
    this.photos$ = this.albumService.getPhotos();
    const routeParams = this.route.snapshot.paramMap;
    const albumIdFromRoute = Number(routeParams.get('id'));
    this.photos$.subscribe((photos) => {
      this.albumPhotos = photos.filter((photo) => photo.albumId === albumIdFromRoute);
    });
  }
}
