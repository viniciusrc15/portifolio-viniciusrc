import { BaseService } from './../services/base.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  contactFormFields: any = {
    from: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required]],
    text: ['', [Validators.required]]
  };
  load: Boolean = false;

  constructor(public fb: FormBuilder,
    private baseService: BaseService,
    public snackBar: MatSnackBar) {
    this.contactForm = this.fb.group(this.contactFormFields);
  }

  ngOnInit() { }

  sendEmail() {
    if (!this.contactForm.valid) {
      this.snackBar.open('Favor preencher todos os campos corretamente!', 'OK', { duration: 10000 });
    } else {
      this.load = true;
      this.baseService.sendMessage(this.contactForm.value).then((d: any) => {
        this.snackBar.open(`Seu email foi enviado com sucesso,
        em breve entrarei em contato no seu email informado!`, 'OK', { duration: 10000 });
        this.contactForm.reset();
        this.load = false;
      }).catch(e => {
        this.snackBar.open(`Erro ao encaminhar email, se quiser efetivar o contato
        mande um email diretamentte para vinicius1595@gmail.com`, 'Fechar', { duration: 10000 });
        this.load = false;
      });
    }
  }
}
