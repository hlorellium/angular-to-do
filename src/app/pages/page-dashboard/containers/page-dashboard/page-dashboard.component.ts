import { Component, OnDestroy, OnInit } from '@angular/core';
import { TodoItem } from '../../models/todo-item';
import { PageDashboardControllerService } from '../../services/controllers/page-dashboard-controller.service';
import { FormGroup } from '@angular/forms';
import { PageDashboardApiService } from '../../services/api/page-dashboard-api.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-page-dashboard',
  templateUrl: './page-dashboard.component.html',
  styleUrls: ['./page-dashboard.component.css'],
  providers: [PageDashboardControllerService],
})
export class PageDashboardComponent implements OnInit {
  items: TodoItem[] = [];

  drinks$: Observable<string[]> = this.controller.drinks$;

  filteredDrinks$ = this.controller.filteredDrinks$;

  constructor(private readonly controller: PageDashboardControllerService, private readonly api: PageDashboardApiService) {}

  onCheckItem(todoItem: TodoItem): void {
    this.items = this.items.map(item => {
      if (item.name === todoItem.name) {
        item.isChecked = !item.isChecked;
      }

      return item;
    });
  }

  onAddItem(form: FormGroup): void {
    const name = form.get('name')?.value;

    const description = form.get('description')?.value;

    if (name) {
      this.items.push({ name, description, isChecked: false, timeCreated: new Date().toISOString() });

      form.reset();
    }
  }

  ngOnInit() {
    this.items = this.controller.getItems();
  }
}
