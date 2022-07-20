import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageDashboardComponent } from './containers/page-dashboard/page-dashboard.component';
import {PageDashboardRoutingModule} from "./page-dashboard-routing.module";
import { PageDashboardTodoItemComponent } from './components/page-dashboard-todo-item/page-dashboard-todo-item.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../../shared/shared.module";



@NgModule({
  declarations: [
    PageDashboardComponent,
    PageDashboardTodoItemComponent
  ],
  imports: [
    CommonModule,
    PageDashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class PageDashboardModule { }
