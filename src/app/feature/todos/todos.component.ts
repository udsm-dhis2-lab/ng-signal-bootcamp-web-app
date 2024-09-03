// ##################################################################################
//     === START: -  TODO APP - NGRX TODOS COMPONENTS ===
// ##################################################################################

// import { Component } from '@angular/core';
// import { LayoutStandaloneComponents } from '../../layout/layout';
// import { MatIconModule } from '@angular/material/icon';
// import { MatCardModule } from '@angular/material/card';
// import { MatProgressBarModule } from '@angular/material/progress-bar'; // Import Angular Material Progress Bar module

// import { select, Store } from '@ngrx/store';
// import { TodoActions } from './state/todos.actions';
// import { TodoState } from './state/todos.state';
// import { MatButtonModule } from '@angular/material/button';
// import { CommonModule } from '@angular/common';
// import { TodoHeaderComponent } from './components/todo-header/todo-header.component';
// import { TodoListComponent } from './components/todo-list/todo-list.component';
// import { TodoFooterComponent } from './components/todo-footer/todo-footer.component';
// import { TodoMainComponent } from './containers/todo-main/todo-main.component';
// import { EMPTY, Observable, of } from 'rxjs';
// import { Todo } from './models/todo.interface';
// import {
//   getAddedTodoStatus,
//   getAddingTodoStatus,
//   getCompletedTodos,
//   getDeletedTodoStatus,
//   getDeletingTodoStatus,
//   getPendingTodos,
//   getTodoLoadedStatus,
//   getTodoLoadingStatus,
//   getTodos,
//   getTodosLoadedStatus,
//   getTodosLoadingStatus,
//   getUpdatedTodoStatus,
//   getUpdatingTodoStatus,
// } from './state/todos.selectors';
// import { FormsModule } from '@angular/forms';
// import { generateUID } from './helpers/uid-generator.helper';
// import { Update } from '@ngrx/entity';

// @Component({
//   selector: 'app-todos',
//   standalone: true,
//   imports: [
//     CommonModule,
//     LayoutStandaloneComponents,
//     MatIconModule,
//     MatButtonModule,
//     MatCardModule,
//     FormsModule,
//     MatProgressBarModule,
//     TodoHeaderComponent,
//     TodoListComponent,
//     TodoFooterComponent,
//     TodoMainComponent,
//   ],
//   templateUrl: './todos.component.html',
//   styleUrls: ['./todos.component.scss'], // Fixed typo from `styleUrl` to `styleUrls`
// })
// export class TodosComponent {
//   // Observables for managing the state of todos
//   completedTodos$: Observable<Todo[]> = EMPTY; // Observable for completed todos
//   pendingTodos$: Observable<Todo[]> = EMPTY; // Observable for pending todos

//   todoTitle!: string; // Title for the current todo being edited or added
//   todo!: Todo | null; // Current todo being edited
//   progressValue = 50; // Example progress value for UI

//   // Observables for various loading and status states
//   loading$: Observable<boolean> = of(false); // Observable for overall todos loading status
//   loaded$: Observable<boolean> = of(false); // Observable for overall todos loaded status
//   loadingTodo$: Observable<boolean> = of(false); // Observable for individual todo loading status
//   loadedTodo$: Observable<boolean> = of(false); // Observable for individual todo loaded status
//   addingTodo$: Observable<boolean> = of(false); // Observable for adding todo status
//   addedTodo$: Observable<boolean> = of(false); // Observable for todo added status
//   updatingTodo$: Observable<boolean> = of(false); // Observable for updating todo status
//   updatedTodo$: Observable<boolean> = of(false); // Observable for todo updated status
//   deletingTodo$: Observable<boolean> = of(false); // Observable for deleting todo status
//   deletedTodo$: Observable<boolean> = of(false); // Observable for todo deleted status

//   // Inject the NgRx store for managing the todo state
//   constructor(private todoState$: Store<TodoState>) {}

//   ngOnInit() {
//     // Initialize observables by selecting the appropriate state slices
//     this.completedTodos$ = this.todoState$.pipe(select(getCompletedTodos));
//     this.pendingTodos$ = this.todoState$.pipe(select(getPendingTodos));

//     this.loading$ = this.todoState$.pipe(select(getTodosLoadingStatus));
//     this.loaded$ = this.todoState$.pipe(select(getTodosLoadedStatus));
//     this.loadingTodo$ = this.todoState$.pipe(select(getTodoLoadingStatus));
//     this.loadedTodo$ = this.todoState$.pipe(select(getTodoLoadedStatus));
//     this.addingTodo$ = this.todoState$.pipe(select(getAddingTodoStatus));
//     this.addedTodo$ = this.todoState$.pipe(select(getAddedTodoStatus));
//     this.updatingTodo$ = this.todoState$.pipe(select(getUpdatingTodoStatus));
//     this.updatedTodo$ = this.todoState$.pipe(select(getUpdatedTodoStatus));
//     this.deletingTodo$ = this.todoState$.pipe(select(getDeletingTodoStatus));
//     this.deletedTodo$ = this.todoState$.pipe(select(getDeletedTodoStatus));
//   }

//   // Create a new todo object with the specified title and optional existing todo data
//   createTodo(title: string, todo?: Todo | null): Todo {
//     return {
//       id: todo && todo.id ? todo.id : generateUID(), // Generate a new ID if not provided
//       title,
//       completed: false, // New todos are initially incomplete
//     };
//   }

//   // Generate an update object for a todo with new title
//   updateTodo(todo: Todo): Update<Todo> {
//     return {
//       id: todo.id,
//       changes: {
//         ...todo,
//         title: this.todoTitle, // Update the title with the new value
//       },
//     };
//   }

//   // Generate an update object for toggling the completion status of a todo
//   updateCompletionStatus(todo: Todo): Update<Todo> {
//     return {
//       id: todo.id,
//       changes: {
//         ...todo,
//         completed: !todo.completed, // Toggle the completion status
//       },
//     };
//   }

//   // Add a new todo to the store and dispatch relevant actions
//   addTodo() {
//     if (this.todoTitle) {
//       const todo: Todo = this.createTodo(this.todoTitle, this.todo);
//       this.todoState$.dispatch(TodoActions.addTodo({ todo }));
//       this.todoTitle = ''; // Clear the title input

//       // Simulate an asynchronous operation by dispatching success action after a delay
//       setTimeout(() => {
//         this.todoState$.dispatch(TodoActions.addTodoSuccess({ todo }));
//       }, 500); // 500 milliseconds delay
//     }
//   }

//   // Edit an existing todo by setting the current title and todo
//   editTodo(todo: Todo) {
//     if (todo) {
//       this.todoTitle = todo.title;
//       this.todo = todo;
//     }
//   }

//   // Delete a todo and dispatch relevant actions
//   deleteTodo(todo: Todo) {
//     this.todoState$.dispatch(TodoActions.deleteTodo({ todo }));

//     // Simulate an asynchronous operation by dispatching success action after a delay
//     setTimeout(() => {
//       this.todoState$.dispatch(TodoActions.deleteTodoSuccess({ todo }));
//     }, 500); // 500 milliseconds delay
//   }

//   // Toggle the completion status of a todo and dispatch relevant actions
//   markAsCompleted(todo: Todo) {
//     const updatedTodo: Update<Todo> = this.updateCompletionStatus(todo);
//     this.todoState$.dispatch(TodoActions.updateTodo({ todo: updatedTodo }));

//     // Simulate an asynchronous operation by dispatching success action after a delay
//     setTimeout(() => {
//       this.todoState$.dispatch(
//         TodoActions.updateTodoSuccess({ todo: updatedTodo })
//       );
//     }, 10); // 10 milliseconds delay
//   }
// }

// ##################################################################################
//     === END: -  TODO APP - NGRX TODOS COMPONENTS ===
// ##################################################################################

// ##################################################################################
//     === START: -  TODO APP - ANGULAR SIGNAL TODOS COMPONENTS ===
// ##################################################################################

import { Component, signal } from '@angular/core';
import { LayoutStandaloneComponents } from '../../layout/layout';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar'; // Import Angular Material Progress Bar module

import { select, Store } from '@ngrx/store'; // Import NgRx Store and select function for state management
import { TodoActions } from './state/todos.actions'; // Import TodoActions for dispatching actions
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { TodoHeaderComponent } from './components/todo-header/todo-header.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoFooterComponent } from './components/todo-footer/todo-footer.component';
import { TodoMainComponent } from './containers/todo-main/todo-main.component';
import { EMPTY, Observable, of } from 'rxjs';
import { Todo } from './models/todo.interface'; // Import Todo interface
import {
  getAddedTodoStatus,
  getAddingTodoStatus,
  getCompletedTodos,
  getDeletedTodoStatus,
  getDeletingTodoStatus,
  getPendingTodos,
  getTodoLoadedStatus,
  getTodoLoadingStatus,
  getTodos,
  getTodosLoadedStatus,
  getTodosLoadingStatus,
  getUpdatedTodoStatus,
  getUpdatingTodoStatus,
} from './state/todos.selectors'; // Import selectors for state management
import { FormsModule } from '@angular/forms'; // Import FormsModule for template-driven forms
import { generateUID } from './helpers/uid-generator.helper'; // Import helper function to generate unique IDs
import { Update } from '@ngrx/entity'; // Import Update interface for entity updates
import {
  addTodo,
  addTodoSuccess,
  deleteTodo,
  deleteTodoSuccess,
  updateTodo,
  updateTodoSuccess,
} from './state/todos.reducer'; // Import reducer actions for handling todos
import { initialTodoStateSignal } from './state/todos.state'; // Import initial state signal for todos

@Component({
  selector: 'app-todos', // Define the selector used in the HTML template
  standalone: true, // Mark this component as standalone
  imports: [
    CommonModule,
    LayoutStandaloneComponents,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    MatProgressBarModule,
    TodoHeaderComponent,
    TodoListComponent,
    TodoFooterComponent,
    TodoMainComponent,
  ],
  templateUrl: './todos.component.html', // Path to the template file
  styleUrls: ['./todos.component.scss'], // Path to the styles file
})
export class TodosComponent {
  // Observables for managing the state of todos
  completedTodos$: Observable<Todo[]> = EMPTY; // Observable for completed todos
  pendingTodos$: Observable<Todo[]> = EMPTY; // Observable for pending todos

  todoTitle = signal<string>(''); // Signal for managing the title of the current todo

  todo!: Todo | null; // Current todo being edited or null if no todo is being edited
  progressValue = 50; // Example progress value to display in the UI

  initialTodoStateSignal = initialTodoStateSignal; // Initialize the signal for the initial state of todos

  constructor() { }

  ngOnInit() {
    // Initialize the todo list with example tasks on component load
    initialTodoStateSignal.todos.set([
      { title: 'Software is like sex, it is better when it is free!', completed: false, id: "qkkpWDy2br4" },
      { title: 'Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away.', completed: true, id: "qpYLb46g4MH" }
    ]);
  }

  // Create a new todo object with the specified title and optional existing todo data
  createTodo(title: string, todo?: Todo | null): Todo {
    return {
      id: todo && todo.id ? todo.id : generateUID(), // Generate a new ID if not provided
      title,
      completed: false, // New todos are initially incomplete
    };
  }

  // Generate an update object for a todo with the new title
  updateTodo(todo: Todo): Update<Todo> {
    return {
      id: todo.id,
      changes: {
        ...todo,
        title: this.todoTitle(), // Update the title with the new value
      },
    };
  }

  // Generate a new todo object with the completion status toggled
  updateCompletionStatus(todo: Todo): Todo {
    return {
      ...todo,
      completed: !todo.completed, // Toggle the completion status
    };
  }

  // Add a new todo to the store and dispatch relevant actions
  addTodo() {
    if (this.todoTitle) {
      const todo: Todo = this.createTodo(this.todoTitle(), this.todo);
      addTodo(); // Dispatch action to add a new todo
      updateTodo(); // Dispatch action to update todo

      this.todoTitle.set(''); // Clear the title input after adding

      // Simulate an asynchronous operation by dispatching success actions after a delay
      setTimeout(() => {
        addTodoSuccess(todo); // Dispatch action for successful addition of a todo
        updateTodoSuccess(todo); // Dispatch action for successful update of a todo
      }, 1000); // Delay of 1000 milliseconds
    }
  }

  // Edit an existing todo by setting the current title and todo for editing
  editTodo(todo: Todo) {
    if (todo) {
      this.todoTitle.set(todo.title); // Set the todo title for editing
      this.todo = todo; // Set the current todo being edited
    }
  }

  // Delete a todo and dispatch relevant actions
  deleteTodo(todo: Todo) {
    deleteTodo(); // Dispatch action to delete a todo

    // Simulate an asynchronous operation by dispatching success action after a delay
    setTimeout(() => {
      deleteTodoSuccess(todo.id); // Dispatch action for successful deletion of a todo
    }, 500); // Delay of 500 milliseconds
  }

  // Toggle the completion status of a todo and dispatch relevant actions
  markAsCompleted(todo: Todo) {
    const updatedTodo: Todo = this.updateCompletionStatus(todo);
    updateTodo(); // Dispatch action to update the todo

    // Simulate an asynchronous operation by dispatching success action after a delay
    setTimeout(() => {
      updateTodoSuccess(updatedTodo); // Dispatch action for successful update of a todo
    }, 10); // Delay of 10 milliseconds
  }
}

// ##################################################################################
//     === END: -  TODO APP - ANGULAR SIGNAL TODOS COMPONENTS ===
// ##################################################################################


