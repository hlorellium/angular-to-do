import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TasksApiService {
  // constructor(private http: HttpCli)

  getTasks(): string[] {
    return ['Do dishes', 'Go to groceries', 'Wash the car'];
  }
}
