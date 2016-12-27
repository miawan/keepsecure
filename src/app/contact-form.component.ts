import { Component } from '@angular/core';


@Component({
  selector: 'bk-contact-form',
  templateUrl: './contact-form.component.html'
})

export class ContactFormComponent {

  firstName:string;

  log(x){
    console.log(x);
    alert('it called');
    alert(x );
  }
}
