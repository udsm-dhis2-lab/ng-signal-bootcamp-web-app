// ##################################################################################
//     === START: -  TODO APP - NGRX STORE SELECTORS ===
// ##################################################################################

// import { createFeatureSelector, createSelector } from '@ngrx/store';
// import { todoFeatureKey } from './todos.reducer';
// import { TodoState, todoAdapter } from './todos.state';
// import {
//     getCompletedTodoList,
//     getPendingTodosList,
// } from '../helpers/todo.helper';
// import { Todo } from '../models/todo.interface';

// export const getTodoFeature = createFeatureSelector<TodoState>(todoFeatureKey);

// export const {
//     selectEntities: getTodoEntities,
//     selectAll: getTodos,
//     selectIds: getTodoIds,
//     selectTotal: getTodosTotal,
// } = todoAdapter.getSelectors(getTodoFeature);

// // export const getTodoById = (id: string) => (getTodoEntities as any)[id];

// // New selector for completed todos
// export const getCompletedTodos = createSelector(getTodos, (todos: Todo[]) =>
//     getCompletedTodoList(todos)
// );

// // New selector for completed todos
// export const getPendingTodos = createSelector(getTodos, (todos: Todo[]) =>
//     getPendingTodosList(todos)
// );

// export const getTodosLoadingStatus = createSelector(
//     getTodoFeature,
//     (state: TodoState) => state?.loading
// );

// export const getTodosLoadedStatus = createSelector(
//     getTodoFeature,
//     (state: TodoState) => state?.loaded
// );

// export const getTodoLoadingStatus = createSelector(
//     getTodoFeature,
//     (state: TodoState) => state?.loadingTodo
// );

// export const getTodoLoadedStatus = createSelector(
//     getTodoFeature,
//     (state: TodoState) => state?.loadedTodo
// );

// export const getAddingTodoStatus = createSelector(
//     getTodoFeature,
//     (state: TodoState) => state?.addingTodo
// );

// export const getAddedTodoStatus = createSelector(
//     getTodoFeature,
//     (state: TodoState) => state?.addedTodo
// );

// export const getUpdatingTodoStatus = createSelector(
//     getTodoFeature,
//     (state: TodoState) => state?.updatingTodo
// );

// export const getUpdatedTodoStatus = createSelector(
//     getTodoFeature,
//     (state: TodoState) => state?.updatedTodo
// );

// export const getDeletingTodoStatus = createSelector(
//     getTodoFeature,
//     (state: TodoState) => state?.deletingTodo
// );

// export const getDeletedTodoStatus = createSelector(
//     getTodoFeature,
//     (state: TodoState) => state?.deletedTodo
// );

// export const getTodoHttpErrorResponse = createSelector(
//     getTodoFeature,
//     (state: TodoState) => state.httpErrorResponse
// );

// ##################################################################################
//     === END: -  TODO APP - NGRX STORE SELECTORS ===
// ##################################################################################




// ##################################################################################
//     === START: -  TODO APP - ANGULAR SIGNAL SELECTORS ===
// ##################################################################################

import { computed } from "@angular/core";
import { getCompletedTodoList, getPendingTodosList } from "../helpers/todo.helper";
import { initialTodoStateSignal } from "./todos.state";

/**
 * @description
 * Signal for all todos in the state. Derived from the todos signal.
 */
export const getTodos = computed(() => initialTodoStateSignal.todos());

/**
 * @description
 * Signal for the entities of todos. Derived by converting the list of todos into an entity map.
 */
export const getTodoEntities = computed(() => initialTodoStateSignal.todoEntities());

/**
 * @description
 * Signal for the ids of todos. Derived from the ids of the todo entities.
 */
export const getTodoIds = computed(() => initialTodoStateSignal.todoIds());

/**
 * @description
 * Signal for the total number of todos. Derived by counting the number of ids.
 */
export const getTodosTotal = computed(() => getTodoIds().length);

/**
 * @description
 * Signal for the list of completed todos. Derived using a custom function getCompletedTodoList.
 */
export const getCompletedTodos = computed(() => getCompletedTodoList(getTodos()));

/**
 * @description
 * Signal for the list of pending todos. Derived using a custom function getPendingTodosList.
 */
export const getPendingTodos = computed(() => getPendingTodosList(getTodos()));

/**
 * @description
 * Signal for the loading status of the todos. Derived from the loading signal.
 */
export const getTodosLoadingStatus = computed(() => initialTodoStateSignal.loading());

/**
 * @description
 * Signal for the loaded status of the todos. Derived from the loaded signal.
 */
export const getTodosLoadedStatus = computed(() => initialTodoStateSignal.loaded());

/**
 * @description
 * Signal for the loading status of an individual todo. Derived from the loadingTodo signal.
 */
export const getTodoLoadingStatus = computed(() => initialTodoStateSignal.loadingTodo());

/**
 * @description
 * Signal for the loaded status of an individual todo. Derived from the loadedTodo signal.
 */
export const getTodoLoadedStatus = computed(() => initialTodoStateSignal.loadedTodo());

/**
 * @description
 * Signal for the adding status of a todo. Derived from the addingTodo signal.
 */
export const getAddingTodoStatus = computed(() => initialTodoStateSignal.addingTodo());

/**
 * @description
 * Signal for the added status of a todo. Derived from the addedTodo signal.
 */
export const getAddedTodoStatus = computed(() => initialTodoStateSignal.addedTodo());

/**
 * @description
 * Signal for the updating status of a todo. Derived from the updatingTodo signal.
 */
export const getUpdatingTodoStatus = computed(() => initialTodoStateSignal.updatingTodo());

/**
 * @description
 * Signal for the updated status of a todo. Derived from the updatedTodo signal.
 */
export const getUpdatedTodoStatus = computed(() => initialTodoStateSignal.updatedTodo());

/**
 * @description
 * Signal for the deleting status of a todo. Derived from the deletingTodo signal.
 */
export const getDeletingTodoStatus = computed(() => initialTodoStateSignal.deletingTodo());

/**
 * @description
 * Signal for the deleted status of a todo. Derived from the deletedTodo signal.
 */
export const getDeletedTodoStatus = computed(() => initialTodoStateSignal.deletedTodo());

/**
 * @description
 * Signal for the HTTP error response in the state. Derived from the httpErrorResponse signal.
 */
export const getTodoHttpErrorResponse = computed(() => initialTodoStateSignal.httpErrorResponse());

// ##################################################################################
//     === END: -  TODO APP - ANGULAR SIGNAL SELECTORS ===
// ##################################################################################
