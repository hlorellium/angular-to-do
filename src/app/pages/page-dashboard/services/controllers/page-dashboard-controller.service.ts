import { Injectable } from '@angular/core';
import { filter, map, Observable, shareReplay } from 'rxjs';
import { TodoItem } from '../../models/todo-item';
import { PageDashboardApiService } from '../api/page-dashboard-api.service';
import { Drink } from '../../models/drink';

@Injectable()
export class PageDashboardControllerService {
  public drinks$: Observable<string[]> = this.api.getDrinks().pipe(
    map(res => {
      return res.drinks.map(drink => drink.strDrink);
    }),
    shareReplay(1),
  );

  public filteredDrinks$ = this.drinks$.pipe(map(drinks => drinks.filter(drink => drink.split(' ').length !== 2)));

  constructor(private readonly api: PageDashboardApiService) {}

  public getItems(): TodoItem[] {
    return this.api.getItems();
  }
}
