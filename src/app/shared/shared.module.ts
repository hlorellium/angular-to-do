import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmitButtonComponent } from './components/submit-button/submit-button.component';
import { MakeUppercasePipe } from './pipes/make-uppercase.pipe';
import { LogSomethingDirective } from './directives/log-something.directive';
import { NoNumbersDirective } from './directives/no-numbers.directive';

@NgModule({
  declarations: [SubmitButtonComponent, MakeUppercasePipe, LogSomethingDirective, NoNumbersDirective],
  imports: [CommonModule],
  exports: [SubmitButtonComponent, MakeUppercasePipe, LogSomethingDirective, NoNumbersDirective],
})
export class SharedModule {}
