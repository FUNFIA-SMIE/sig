import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

@Injectable({ providedIn: 'root' })
export class ServiceMail {

  sendMail(data: { to_email: string; subject: string; message: string }): Promise<any> {
    console.log('📧 Tentative envoi EmailJS avec:', data);

    return emailjs
      .send(
        'service_ehq1n7j',
        'template_irznvd3',
        {
          to_email: data.to_email,
          subject:  data.subject,
          message:  data.message,
        },
        'MjWZMT3PivBL4cpt1'
      )
      .then((res) => {
        console.log('✅ EmailJS succès:', res.status, res.text);
        return res;
      })
      .catch((err) => {
        console.error('❌ EmailJS erreur:', err);
        throw err;
      });
  }
}