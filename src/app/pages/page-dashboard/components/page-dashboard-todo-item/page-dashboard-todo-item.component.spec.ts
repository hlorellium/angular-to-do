import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDashboardTodoItemComponent } from './page-dashboard-todo-item.component';

describe('PageDashboardTodoItemComponent', () => {
  let component: PageDashboardTodoItemComponent;
  let fixture: ComponentFixture<PageDashboardTodoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageDashboardTodoItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageDashboardTodoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
