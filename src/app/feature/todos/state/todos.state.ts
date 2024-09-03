import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { HttpErrorResponse } from '@angular/common/http';
import { Todo } from '../models/todo.interface';
import { computed, signal } from '@angular/core';

// ##################################################################################
//     === START: -  TODO APP - NGRX STORE INITIAL STATE ===
// ##################################################################################

// export interface TodoState extends EntityState<Todo> {
//     loading: boolean;
//     loaded: boolean;
//     loadingTodo: boolean;
//     loadedTodo: boolean;
//     addingTodo: boolean;
//     addedTodo: boolean;
//     updatingTodo: boolean;
//     updatedTodo: boolean;
//     deletingTodo: boolean;
//     deletedTodo: boolean;
//     httpErrorResponse: HttpErrorResponse | null;
// }

// export const defaultTodo: TodoState = {
//     ids: [],
//     entities: {},
//     loading: false,
//     loaded: false,
//     loadingTodo: false,
//     loadedTodo: false,
//     addingTodo: false,
//     addedTodo: false,
//     updatingTodo: false,
//     updatedTodo: false,
//     deletingTodo: false,
//     deletedTodo: false,
//     httpErrorResponse: null,
// };

// export const todoAdapter: EntityAdapter<Todo> = createEntityAdapter<Todo>();

// export const initialTodoState = todoAdapter.getInitialState(defaultTodo);

// ##################################################################################
//     === END: -  TODO APP - NGRX STORE INITIAL STATE ===
// ##################################################################################

// ##################################################################################
//     === START: -  TODO APP - ANGULAR SIGNAL STORE INITIAL STATE ===
// ##################################################################################
/**
 * @description
 * The `useTodoState` function replaces the NgRx store with Angular Signals.
 * It manages the state of Todo entities with Signals, allowing the same
 * state management capabilities in a more streamlined way.
 */
export function useTodoState() {
    // Signals to manage the state of the todos
    const todos = signal<Todo[]>([]);
    const loading = signal<boolean>(false);
    const loaded = signal<boolean>(false);
    const loadingTodo = signal<boolean>(false);
    const loadedTodo = signal<boolean>(false);
    const addingTodo = signal<boolean>(false);
    const addedTodo = signal<boolean>(false);
    const updatingTodo = signal<boolean>(false);
    const updatedTodo = signal<boolean>(false);
    const deletingTodo = signal<boolean>(false);
    const deletedTodo = signal<boolean>(false);
    const httpErrorResponse = signal<HttpErrorResponse | null>(null);

    // Computed signals to derive state based on the current signals
    const todoEntities = computed(() =>
        todos().reduce((acc, todo) => {
            acc[todo.id] = todo;
            return acc;
        }, {} as { [id: string]: Todo })
    );

    const todoIds = computed(() => todos().map((todo) => todo.id));

    // Computed variable to filter completed todos
    const completedTodos = computed(() =>
        todos().filter((todo) => todo.completed)
    );

    // Computed variable to filter incomplete (not completed) todos
    const pendingTodos = computed(() =>
        todos().filter((todo) => !todo.completed)
    );

    /**
     * @description
     * The state object exposes the signals and computed properties, providing
     * a similar interface to the NgRx state but using Signals.
     */
    return {
        todos,
        loading,
        loaded,
        loadingTodo,
        loadedTodo,
        addingTodo,
        addedTodo,
        updatingTodo,
        updatedTodo,
        deletingTodo,
        deletedTodo,
        httpErrorResponse,
        todoEntities,
        todoIds,
        completedTodos,
        pendingTodos
    };
}

/**
 * @description
 * The `initialTodoState` function can be used to get the initial state, similar
 * to how the `initialTodoState` object was used in NgRx. However, here, it
 * returns the initialized signals.
 */
export const initialTodoStateSignal = useTodoState();

// ##################################################################################
//     === START: -  TODO APP - ANGULAR SIGNAL STORE INITIAL STATE ===
// ##################################################################################
