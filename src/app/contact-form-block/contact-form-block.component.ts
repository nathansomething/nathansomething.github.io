import { Component, OnInit } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { ContactForm } from './contact-form';

@Component({
  selector: 'contact-form-block',
  templateUrl: './contact-form-block.component.html',
  styleUrls: ['./contact-form-block.component.scss']
})
export class ContactFormBlockComponent {

  public contact_form:ContactForm
  public submitted:boolean
  public headers:Headers
  public message:Object

  constructor(private http:Http) {
    this.contact_form = new ContactForm()
    this.submitted = false
    this.headers = new Headers()
  }

  onSubmit() {
    this.submitted = true
    this.headers.append("Accept","application/json")
    this.message = {
      name: this.contact_form.first_name + ' ' + this.contact_form.last_name,
      email: this.contact_form.email,
      subject: this.contact_form.subject,
      message: this.contact_form.message
    }
    this.http.post("https://formspree.io/nathan.goodman49@gmail.com", this.headers, this.message).subscribe((res:Response) => console.log(res))
  }
}
