import { Component } from '@angular/core';

@Component({
  selector: 'bk-courses',
  template: `
    <p>
      courses Works!
    </p>
  `,
  styles: []
})
export class CoursesComponent {

  getCourses () :string[]{
    return ["One1", "Two2", "Three3", "Four4", "Five5"];
  }
}
