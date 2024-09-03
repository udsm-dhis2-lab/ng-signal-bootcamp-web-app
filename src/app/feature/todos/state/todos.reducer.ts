// ##################################################################################
//     === START: -  TODO APP - NGRX STORE REDUCER ===
// ##################################################################################

// import { Action, createReducer, on } from '@ngrx/store';
// import { TodoActions } from './todos.actions';
// import { initialTodoState, todoAdapter, TodoState } from './todos.state';

// export const todoFeatureKey = 'todos';

// const todoReducer = createReducer(
//   initialTodoState,
//   on(TodoActions.addTodo, (state: TodoState, { todo }) => {
//     return {
//       ...state,
//       loading: false,
//       loaded: false,
//       loadingTodo: false,
//       loadedTodo: false,
//       addingTodo: true,
//       addedTodo: false,
//       updatingTodo: false,
//       updatedTodo: false,
//       deletingTodo: false,
//       deletedTodo: false,
//       httpErrorResponse: null,
//     };
//   }),
//   on(TodoActions.addTodoSuccess, (state: TodoState, { todo }) => {
//     return todoAdapter.upsertOne(todo, {
//       ...state,
//       loading: false,
//       loaded: false,
//       loadingTodo: false,
//       loadedTodo: false,
//       addingTodo: false,
//       addedTodo: true,
//       updatingTodo: false,
//       updatedTodo: false,
//       deletingTodo: false,
//       deletedTodo: false,
//       httpErrorResponse: null,
//     });
//   }),
//   on(TodoActions.addTodoFailure, (state: TodoState, { httpErrorResponse }) => ({
//     ...state,
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
//     httpErrorResponse,
//   })),
//   on(TodoActions.loadTodo, (state: TodoState) => {
//     return {
//       ...state,
//       loading: false,
//       loaded: false,
//       loadingTodo: true,
//       loadedTodo: false,
//       addingTodo: false,
//       addedTodo: false,
//       updatingTodo: false,
//       updatedTodo: false,
//       deletingTodo: false,
//       deletedTodo: false,
//       httpErrorResponse: null,
//     };
//   }),
//   on(TodoActions.loadTodoSuccess, (state: TodoState, { todo }) => {
//     return todoAdapter.upsertOne(todo, {
//       ...state,
//       loading: false,
//       loaded: false,
//       loadingTodo: false,
//       loadedTodo: true,
//       addingTodo: false,
//       addedTodo: false,
//       updatingTodo: false,
//       updatedTodo: false,
//       deletingTodo: false,
//       deletedTodo: false,
//       httpErrorResponse: null,
//     });
//   }),
//   on(
//     TodoActions.loadTodoFailure,
//     (state: TodoState, { httpErrorResponse }) => ({
//       ...state,
//       loading: false,
//       loaded: false,
//       loadingTodo: false,
//       loadedTodo: false,
//       addingTodo: false,
//       addedTodo: false,
//       updatingTodo: false,
//       updatedTodo: false,
//       deletingTodo: false,
//       deletedTodo: false,
//       httpErrorResponse,
//     })
//   ),
//   on(TodoActions.loadTodos, (state: TodoState) => {
//     return {
//       ...state,
//       loading: true,
//       loaded: false,
//       loadingTodo: false,
//       loadedTodo: false,
//       addingTodo: false,
//       addedTodo: false,
//       updatingTodo: false,
//       updatedTodo: false,
//       deletingTodo: false,
//       deletedTodo: false,
//       httpErrorResponse: null,
//     };
//   }),
//   on(TodoActions.loadTodosSuccess, (state: TodoState, { todos }) => {
//     return todoAdapter.upsertMany(todos, {
//       ...state,
//       loading: false,
//       loaded: true,
//       loadingTodo: false,
//       loadedTodo: false,
//       addingTodo: false,
//       addedTodo: false,
//       updatingTodo: false,
//       updatedTodo: false,
//       deletingTodo: false,
//       deletedTodo: false,
//       httpErrorResponse: null,
//     });
//   }),
//   on(
//     TodoActions.loadTodosFailure,
//     (state: TodoState, { httpErrorResponse }) => ({
//       ...state,
//       loading: false,
//       loaded: false,
//       loadingTodo: false,
//       loadedTodo: false,
//       addingTodo: false,
//       addedTodo: false,
//       updatingTodo: false,
//       updatedTodo: false,
//       deletingTodo: false,
//       deletedTodo: false,
//       httpErrorResponse,
//     })
//   ),
//   on(TodoActions.updateTodo, (state: TodoState, { todo }) => {
//     return {
//       ...state,
//       loading: false,
//       loaded: false,
//       loadingTodo: false,
//       loadedTodo: false,
//       addingTodo: false,
//       addedTodo: false,
//       updatingTodo: true,
//       updatedTodo: false,
//       deletingTodo: false,
//       deletedTodo: false,
//       httpErrorResponse: null,
//     };
//   }),
//   on(TodoActions.updateTodoSuccess, (state: TodoState, { todo }) => {
//     return todoAdapter.updateOne(todo, {
//       ...state,
//       loading: false,
//       loaded: false,
//       loadingTodo: false,
//       loadedTodo: false,
//       addingTodo: false,
//       addedTodo: false,
//       updatingTodo: false,
//       updatedTodo: true,
//       deletingTodo: false,
//       deletedTodo: false,
//       httpErrorResponse: null,
//     });
//   }),
//   on(
//     TodoActions.updateTodoFailure,
//     (state: TodoState, { httpErrorResponse }) => ({
//       ...state,
//       loading: false,
//       loaded: false,
//       loadingTodo: false,
//       loadedTodo: false,
//       addingTodo: false,
//       addedTodo: false,
//       updatingTodo: false,
//       updatedTodo: false,
//       deletingTodo: false,
//       deletedTodo: false,
//       httpErrorResponse,
//     })
//   ),
//   on(TodoActions.deleteTodo, (state: TodoState, { todo }) => {
//     return {
//       ...state,
//       loading: false,
//       loaded: false,
//       loadingTodo: false,
//       loadedTodo: false,
//       addingTodo: false,
//       addedTodo: false,
//       updatingTodo: false,
//       updatedTodo: false,
//       deletingTodo: true,
//       deletedTodo: false,
//       httpErrorResponse: null,
//     };
//   }),
//   on(TodoActions.deleteTodoSuccess, (state: TodoState, { todo }) => {
//     return todoAdapter.removeOne(todo?.id, {
//       ...state,
//       loading: false,
//       loaded: false,
//       loadingTodo: false,
//       loadedTodo: false,
//       addingTodo: false,
//       addedTodo: false,
//       updatingTodo: false,
//       updatedTodo: false,
//       deletingTodo: false,
//       deletedTodo: true,
//       httpErrorResponse: null,
//     });
//   }),
//   on(
//     TodoActions.deleteTodoFailure,
//     (state: TodoState, { httpErrorResponse }) => ({
//       ...state,
//       loading: false,
//       loaded: false,
//       loadingTodo: false,
//       loadedTodo: false,
//       addingTodo: false,
//       addedTodo: false,
//       updatingTodo: false,
//       updatedTodo: false,
//       deletingTodo: false,
//       deletedTodo: false,
//       httpErrorResponse,
//     })
//   )
// );

// export function TodoReducer(state: TodoState | undefined, action: Action) {
//   return todoReducer(state, action);
// }

// ##################################################################################
//     === END: -  TODO APP - NGRX STORE REDUCER ===
// ##################################################################################

import { HttpErrorResponse } from '@angular/common/http';
import { resetFlagsExcept } from '../helpers/reset-flag-except.helper';
import { Todo } from '../models/todo.interface';
import { initialTodoStateSignal, useTodoState } from './todos.state';
import { removeTodoById, updateOrAddTodo } from '../helpers/todo.helper';

export function addTodo() {
    resetFlagsExcept('addingTodo');
    const { addingTodo, httpErrorResponse, todos } = useTodoState();
    initialTodoStateSignal.addingTodo.set(true);
    initialTodoStateSignal.httpErrorResponse.set(null);
}

export function addTodoSuccess(todo: Todo) {
    resetFlagsExcept('addedTodo');
    const { addedTodo, todos } = useTodoState();
    const updateTodos: Todo[] = updateOrAddTodo(
        initialTodoStateSignal.todos(),
        todo
    );

    initialTodoStateSignal.todos.set([...todos(), ...updateTodos]);
    initialTodoStateSignal.addingTodo.set(false);
    initialTodoStateSignal.addedTodo.set(true);
}

export function addTodoFailure(error: HttpErrorResponse) {
    resetFlagsExcept('httpErrorResponse');
    const { httpErrorResponse } = useTodoState();
    initialTodoStateSignal.httpErrorResponse.set(error);
}

export function loadTodo() {
    resetFlagsExcept('loadingTodo');
    const { loadingTodo, httpErrorResponse } = useTodoState();
    initialTodoStateSignal.loadingTodo.set(true);
    initialTodoStateSignal.httpErrorResponse.set(null);
}

export function loadTodoSuccess(todo: Todo) {
    resetFlagsExcept('loadedTodo');
    const { loadedTodo, todos } = useTodoState();
    const updateTodos: Todo[] = updateOrAddTodo(
        initialTodoStateSignal.todos(),
        todo
    );

    initialTodoStateSignal.todos.set([...todos(), ...updateTodos]);
    initialTodoStateSignal.loadedTodo.set(true);
}

export function loadTodoFailure(error: HttpErrorResponse) {
    resetFlagsExcept('httpErrorResponse');
    const { httpErrorResponse } = useTodoState();
    initialTodoStateSignal.httpErrorResponse.set(error);
}

export function loadTodos() {
    resetFlagsExcept('loading');
    const { loading, httpErrorResponse } = useTodoState();
    loading.set(true);
    initialTodoStateSignal.httpErrorResponse.set(null);
}

export function loadTodosSuccess(todosArray: Todo[]) {
    resetFlagsExcept('loaded');
    const { loaded, todos } = useTodoState();
    initialTodoStateSignal.loaded.set(true);
    initialTodoStateSignal.todos.set([...todos(), ...todosArray]);
}

export function loadTodosFailure(error: HttpErrorResponse) {
    resetFlagsExcept('httpErrorResponse');
    const { httpErrorResponse } = useTodoState();
    initialTodoStateSignal.httpErrorResponse.set(error);
}

export function updateTodo() {
    resetFlagsExcept('updatingTodo');
    const { updatingTodo, httpErrorResponse } = useTodoState();
    initialTodoStateSignal.updatingTodo.set(true);
    initialTodoStateSignal.httpErrorResponse.set(null);
}

export function updateTodoSuccess(todo: Todo) {
    resetFlagsExcept('updatedTodo');
    const { updatedTodo, todos } = useTodoState();
    const updateTodos: Todo[] = updateOrAddTodo(
        initialTodoStateSignal.todos(),
        todo
    );

    initialTodoStateSignal.updatingTodo.set(false);
    initialTodoStateSignal.updatedTodo.set(true);
    initialTodoStateSignal.todos.set([...todos(), ...updateTodos]);
}

export function updateTodoFailure(error: HttpErrorResponse) {
    resetFlagsExcept('httpErrorResponse');
    const { httpErrorResponse } = useTodoState();
    initialTodoStateSignal.httpErrorResponse.set(error);
}

export function deleteTodo() {
    resetFlagsExcept('deletingTodo');
    const { deletingTodo, httpErrorResponse } = useTodoState();
    initialTodoStateSignal.deletingTodo.set(true);
    initialTodoStateSignal.httpErrorResponse.set(null);
}

export function deleteTodoSuccess(todoId: string) {
    resetFlagsExcept('deletedTodo');
    const { deletedTodo, todos } = useTodoState();
    const updateTodos: Todo[] = removeTodoById(
        initialTodoStateSignal.todos(),
        todoId
    );
    initialTodoStateSignal.todos.set([...todos(), ...updateTodos]);
    initialTodoStateSignal.deletingTodo.set(false);
    initialTodoStateSignal.deletedTodo.set(true);
}

export function deleteTodoFailure(error: HttpErrorResponse) {
    resetFlagsExcept('httpErrorResponse');
    const { httpErrorResponse } = useTodoState();
    initialTodoStateSignal.httpErrorResponse.set(error);
}
