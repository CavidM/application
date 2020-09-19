import React, { useEffect } from 'react';
import TodoListHtml from './todoListHtml';
import { loadTodos } from '../../../actions/todo/todoActions';

export default function TodoListComponent() {

    useEffect(() => {
        loadTodos();
    }, [])

    return (
        <TodoListHtml/>
    );
}