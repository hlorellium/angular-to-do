import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-submit-button',
  templateUrl: './submit-button.component.html',
  styleUrls: ['./submit-button.component.css'],
})
export class SubmitButtonComponent implements OnInit {
  @Input() submitText = 'Submit';

  @Input() color: 'warn' | 'success' | 'error' = 'success';

  @Output() submit = new EventEmitter();

  ngOnInit(): void {
    console.log('I have loaded');
  }
}
