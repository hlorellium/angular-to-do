import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TasksApiService {
  getTasks(): string[] {
    return ['Do dishes', 'Go to groceries', 'Wash the car'];
  }
}
