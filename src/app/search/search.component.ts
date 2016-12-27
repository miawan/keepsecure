import { Component } from '@angular/core';
import {SpotifyService} from "../services/spotify.service";
import { Artist } from '../../../Artist';

@Component({
  selector: 'bk-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  searchStr: string;
  searchRes: Artist[];

  constructor(private ss:SpotifyService){

  }


  searchMusic(){
    this.ss.serachMusic(this.searchStr).subscribe(res =>  {
        this.searchRes = res.artists.items;
    } );
  }
}
