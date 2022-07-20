import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.css'],
})
export class AddItemFormComponent {
  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    description: [''],
  });

  @Output() submit = new EventEmitter<FormGroup>();

  constructor(private readonly fb: FormBuilder) {}

  onSubmit() {
    this.submit.emit(this.form);
  }
}
