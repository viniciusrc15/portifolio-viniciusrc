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
    to: [''],
    subject: [''],
    text: ['']
  };

  constructor(public fb: FormBuilder,
    private baseService: BaseService,
    public snackBar: MatSnackBar) {
    this.contactFormFields = {
      from: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required]],
      text: ['', [Validators.required]]
    };
    this.contactForm = this.fb.group(this.contactFormFields);
  }

  ngOnInit() { }

  sendEmail() {
    if (!this.contactForm.valid) {
      this.snackBar.open('Favor preencher todos os campos corretamente!', 'OK');
    } else {
      this.baseService.sendMessage(this.contactForm.value).then((d: any) => {
        this.snackBar.open(d.message, 'Fechar', { duration: 3000 });
        this.contactForm.reset();
      }).catch(e => {
        console.log(e.message, 'Fechar', { duration: 3000 });
      });
    }

  }

}
