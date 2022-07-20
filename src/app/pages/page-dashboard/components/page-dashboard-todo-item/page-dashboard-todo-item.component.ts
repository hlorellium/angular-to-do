import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TodoItem} from "../../models/todo-item";

@Component({
  selector: 'app-page-dashboard-todo-item',
  templateUrl: './page-dashboard-todo-item.component.html',
  styleUrls: ['./page-dashboard-todo-item.component.css']
})
export class PageDashboardTodoItemComponent {
  @Input() todoItem?: TodoItem;

  @Output() checkItem = new EventEmitter<void>();
}
