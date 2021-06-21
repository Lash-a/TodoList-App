import { TodoService } from '../Todo.Service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todosummary',
  templateUrl: './todosummary.component.html',
  styleUrls: ['./todosummary.component.css']
})
export class TodosummaryComponent implements OnInit {

  constructor(public todoService: TodoService) { }


  ngOnInit(): void {
  }

  get completeItemCount(): number {
    return this.todoService.completeItemsCount();
  }

  get inCompleteItemCount(): number {
    return this.todoService.incompleteItemsCount();
  }

}
