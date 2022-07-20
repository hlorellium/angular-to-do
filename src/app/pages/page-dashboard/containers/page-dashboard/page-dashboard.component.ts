import {Component, OnInit} from '@angular/core';
import { TodoItem } from "../../models/todo-item";
import { PageDashboardControllerService } from "../../services/controllers/page-dashboard-controller.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-page-dashboard',
  templateUrl: './page-dashboard.component.html',
  styleUrls: ['./page-dashboard.component.css'],
  providers: [PageDashboardControllerService]
})
export class PageDashboardComponent implements OnInit {
  items: TodoItem[] = [];

  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    description: [''],
  })

  constructor(private readonly pageDashboardControllerService: PageDashboardControllerService, private readonly fb: FormBuilder) { }

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
      this.items.push({name, description, isChecked: false, timeCreated: new Date().toISOString()});

      form.reset();
    }

  }

  ngOnInit() {
    this.items = this.pageDashboardControllerService.getItems();
  }
}
