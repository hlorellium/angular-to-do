import { Injectable } from '@angular/core';
import {TodoItem} from "../../models/todo-item";
import {itemsMock} from "../../consts/items-mock";

@Injectable({
  providedIn: 'root'
})
export class PageDashboardApiService {
  constructor() { }

  public getItems(): TodoItem[] {
    return itemsMock;
  }
}
