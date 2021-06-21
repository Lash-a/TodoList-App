import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './TodoItem';

@Injectable({
    providedIn: 'root',
})
export class TodoService {

    public todoList: Todo[];

    constructor(private http: HttpClient) {
        this.todoList = [];
    }

    saveTodo(todoName: string): Observable<any> {
        var todo = new Todo();
        todo.ID = 0;
        todo.Description = todoName;
        todo.Done = false;

        const httpOptions = {
            headers: new HttpHeaders({ "Content-Type": "application/json" }),
        };

        return this.http.post("http://localhost:49731/api/Todo/SaveTodo", todo, httpOptions);
    };

    getTodoList(): Observable<Todo[]> {
        const httpOptions = {
            headers: new HttpHeaders({ "Content-Type": "application/json" }),
        };

        return this.http.post<Todo[]>("http://localhost:49731/api/Todo/GetTodoList", null, httpOptions);
    };

    changeDoneOrNot(todo: Todo): Observable<Todo>{
        const httpOptions = {
            headers: new HttpHeaders({ "Content-Type": "application/json" }),
        };
    
        return this.http.post<Todo>("http://localhost:49731/api/Todo/ChangeDoneOrNot", todo, httpOptions);
    };

    deleteTodo(id: number): Observable<Todo>{
        const httpOptions = {
            headers: new HttpHeaders({ "Content-Type": "application/json" }),
        };

        return this.http.post<Todo>("http://localhost:49731/api/Todo/DeleteTodo", id, httpOptions);
    };

    completeItemsCount(): number {
        return this.todoList.filter(item => item.Done == true).length;
    };

    incompleteItemsCount(): number {
        return this.todoList.filter(item => item.Done == false).length;
    }

};
