import { Component } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  log(x) { console.log(x) }

  submit(f) {
    // f.value is a json object that we could send to the server for persistence
  }
}
