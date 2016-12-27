import { Component } from '@angular/core';

@Component({
  selector: 'bk-author',
  template: ''
})

export class AuthorComponent {

  getAuothers() :string[]{
    return ["Author1","Author2","Author3","Author4","Author5"];
  }
}
