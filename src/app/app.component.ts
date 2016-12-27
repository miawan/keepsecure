import { Component } from '@angular/core';
import {CoursesComponent} from "./courses.component";
import {AuthorComponent} from "./author.component";
import {SpotifyService} from "./services/spotify.service";

@Component({
  selector: 'bk-root',
  templateUrl: './app.component.html',
  providers: [CoursesComponent, AuthorComponent, SpotifyService]
})

export class AppComponent {
  title = 'bk works!';
  courses;
  authors;

  constructor(coursesComponent :CoursesComponent, author :AuthorComponent){
    this.courses = coursesComponent.getCourses();
    this.authors = author.getAuothers();
  }

}
