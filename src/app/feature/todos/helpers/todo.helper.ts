import { Todo } from '../models/todo.interface';

/**
 * Filters and returns completed todos from the provided list.
 * @param todos - An array of Todo items.
 * @returns An array of completed Todo items.
 */
export function getCompletedTodoList(todos: Todo[]): Todo[] {
    return todos.filter((todo) => todo.completed);
}

/**
 * Filters and returns completed todos from the provided list.
 * @param todos - An array of Todo items.
 * @returns An array of completed Todo items.
 */
export function getPendingTodosList(todos: Todo[]): Todo[] {
    return todos.filter((todo) => !todo.completed);
}

/**
 * Updates an existing todo in the array or adds a new one if it doesn't exist.
 *
 * @param todos - The array of todo items
 * @param newTodo - The todo item to be updated or added
 * @returns The updated array of todo items
 */
export function updateOrAddTodo(todos: Todo[], newTodo: Todo): Todo[] {
    // Find the index of the todo item with the same id in the array
    const index = todos.findIndex((todo) => todo.id === newTodo.id);


    if (index !== -1) {
        // If the todo exists, update it with the new todo item
        todos[index] = newTodo;
        // todos = [...todos, newTodo]
    } else {
        // If the todo does not exist, add it to the array
        todos = [...todos, newTodo]
    }

    // Return the updated array of todos
    return todos;
}

/**
 * Removes a todo item from the array based on the given id.
 *
 * @param todos - The array of todo items
 * @param id - The unique identifier of the todo item to be removed
 * @returns The updated array of todo items after removal
 */
export function removeTodoById(todos: Todo[], id: string): Todo[] {
    // Filter the array to exclude the todo with the given id
    return todos.filter((todo) => todo.id !== id);
}
