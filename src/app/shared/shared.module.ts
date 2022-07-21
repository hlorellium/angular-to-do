import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmitButtonComponent } from './components/submit-button/submit-button.component';
import { MakeUppercasePipe } from './pipes/make-uppercase.pipe';
import { LogSomethingDirective } from './directives/log-something.directive';
import { NoNumbersDirective } from './directives/no-numbers.directive';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [SubmitButtonComponent, MakeUppercasePipe, LogSomethingDirective, NoNumbersDirective],
  imports: [CommonModule, MatFormFieldModule, MatInputModule, HttpClientModule],
  exports: [
    CommonModule,
    SubmitButtonComponent,
    MakeUppercasePipe,
    LogSomethingDirective,
    NoNumbersDirective,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
  ],
})
export class SharedModule {}
