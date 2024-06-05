import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {

  contactForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(3)]]
    });
  }
  ngOnInit(): void {

  }

  enviar($event: Event) {
    let objeto = this.contactForm.value;
    console.log(objeto);
    this.contactForm.reset();
  }
  hasErrors(field: string, validationType: string) {
    return (this.contactForm.get(field)?.hasError(validationType)
      && this.contactForm.get(field)?.touched);
  }
  isTouched(field: string) {
    return this.contactForm.get(field)?.touched;
  }
}
