import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageDashboardComponent } from './containers/page-dashboard/page-dashboard.component';
import { PageDashboardRoutingModule } from './page-dashboard-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { AddItemFormComponent } from './components/add-item-form/add-item-form.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import {MatSelectModule} from "@angular/material/select";

@NgModule({
  declarations: [PageDashboardComponent, TodoItemComponent, AddItemFormComponent],
  imports: [CommonModule, PageDashboardRoutingModule, FormsModule, ReactiveFormsModule, SharedModule, MatSelectModule],
})
export class PageDashboardModule {}
