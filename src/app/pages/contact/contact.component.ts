import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-web-form',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  imports: [FormsModule]
})
export class ContactComponent {
  firstName = '';
  lastName = '';
  email = '';
  confirmEmail = '';
  question = '';

  // Form submission handler
  submitForm() {
    if (this.email !== this.confirmEmail) {
      alert('The email addresses do not match!');
    } else {
      alert('Thank you for your submission!');
      // You can add form submission logic here, like sending data to the server.
    }
  }
}
