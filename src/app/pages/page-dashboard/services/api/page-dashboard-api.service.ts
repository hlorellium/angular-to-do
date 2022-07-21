import { Injectable } from '@angular/core';
import { TodoItem } from '../../models/todo-item';
import { itemsMock } from '../../consts/items-mock';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Drink } from '../../models/drink';

@Injectable({
  providedIn: 'root',
})
export class PageDashboardApiService {
  constructor(private http: HttpClient) {}

  public getItems(): TodoItem[] {
    return itemsMock;
  }

  public getDrinks(): Observable<{ drinks: Drink[] }> {
    return this.http.get<{ drinks: Drink[] }>('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita');
  }
}
