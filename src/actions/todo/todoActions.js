import { todos } from '../../services/todoServices';

export const loadTodos = async () => {

    let res = await todos();

    return res
}