import {TodoItem} from "../models/todo-item";

export const itemsMock: TodoItem[] = [{
  isChecked: false,
  name: 'Buy things',
  description: 'Buy milk, eggs, and bread',
  timeCreated: new Date().toISOString(),
}, {
  isChecked: false,
  name: 'Do dishes',
  description: 'Do the dishes',
  timeCreated: new Date().toISOString(),
}];
