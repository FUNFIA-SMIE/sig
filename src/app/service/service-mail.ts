import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

@Injectable({
  providedIn: 'root',
})

export class ServiceMail {

  constructor() { }

  sendMail(data:any): Promise<any> {

    return emailjs.send('service_ehq1n7j', 'template_irznvd3', data, 'MjWZMT3PivBL4cpt1');

  }

}
