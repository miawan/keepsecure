import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Artist } from '../../../Artist';
import { Album } from '../../../Album';
import {SpotifyService} from "../services/spotify.service";

@Component({
  selector: 'bk-artist',
  templateUrl: './artist.component.html'
})
export class ArtistComponent implements OnInit {

  id: string;
  artist: Artist[];
  albums: Album[];


  constructor(
    private ss:SpotifyService,
    private rout: ActivatedRoute) {

  }

  ngOnInit() {
    this.rout.params
      .map(params => params['id'])
      .subscribe((id) => {
        this.ss.getArtist(id)
          .subscribe(artist => {
            this.artist = artist;
          })
        this.ss.getAlbums(id)
          .subscribe(albums =>{
            this.albums = albums.items;
          })
      });
  }

}
