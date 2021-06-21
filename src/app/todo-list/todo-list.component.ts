import { TodoService } from '../Todo.Service';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../TodoItem';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoInputString: string;

  constructor(public todoService: TodoService) { }

  ngOnInit(): void {
    this.getTodoList();
  }

  saveTodo(todoName) {
    if(todoName.length > 0){
      this.todoService.saveTodo(todoName).subscribe((response: any) => {
        this.getTodoList();
      });
      this.todoInputString = "";
    };
  };

  getTodoList() {
    this.todoService.getTodoList().subscribe((response: any) => {
      this.todoService.todoList = response;
    });
  };

  changeDoneOrNot(todo: Todo){
    this.todoService.changeDoneOrNot(todo).subscribe((response: any) => {
      this.getTodoList();
    });
  };

  deleteTodo(id: number){
    this.todoService.deleteTodo(id).subscribe((respone) => {
      this.getTodoList();
    });
  };


};