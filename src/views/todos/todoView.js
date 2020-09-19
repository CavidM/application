import React from 'react';
import TodoFilterComponent from './todo-filter/todoFilterComponent';
import TodoListComponent from './todo-list/todoListComponent';

export default function TodoView(props) {

    return (
        <div className="todo-view">
            <TodoFilterComponent />
            <TodoListComponent />
            <button className="btn btn-primary">send</button>
        </div>
    );
}