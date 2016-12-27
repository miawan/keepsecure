import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Album } from '../../../Album';
import {SpotifyService} from "../services/spotify.service";


@Component({
  selector: 'bk-album',
  templateUrl: './album.component.html'
})
export class AlbumComponent implements OnInit {

  private id:string;
  private album: Album[];

  constructor(
    private ss: SpotifyService,
    private rout:ActivatedRoute) {

  }

  ngOnInit() {
    this.rout.params
      .map(params => params['id'])
      .subscribe((id) => {
        this.ss.getAlbum(id)
          .subscribe(album => {
            this.album = album;
          })
      });
  }

}
