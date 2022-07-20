import { Injectable } from '@angular/core';
import {TodoItem} from "../../models/todo-item";
import {PageDashboardApiService} from "../api/page-dashboard-api.service";

@Injectable()
export class PageDashboardControllerService {
  constructor(private readonly api: PageDashboardApiService) { }

  public getItems(): TodoItem[] {
    return this.api.getItems();
  }
}
