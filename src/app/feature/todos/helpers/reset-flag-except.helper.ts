 // Import the main state function

import { useTodoState } from "../state/todos.state";

/**
 * @description
 * Resets all state flags to `false` except the one specified by the `flag` parameter.
 * This function ensures that only the provided flag remains active (set to `true`),
 * while all other flags are reset (set to `false`). This is useful for maintaining
 * consistent state management across different actions in the application.
 * 
 * @param flag - The flag that should remain active (true) while all other flags are reset.
 */
export function resetFlagsExcept(flag: keyof ReturnType<typeof useTodoState>) {
    // Destructure the state flags from the useTodoState hook
    const {
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
    } = useTodoState();

    // Group all flags into a single object for easier iteration
    const flags = {
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
    };

    // Iterate over all flags and reset each to false unless it's the specified flag
    Object.keys(flags).forEach(key => {
        if (key !== flag) {
            // Set the flag to false if it's not the one we want to keep active
            flags[key as keyof typeof flags].set(false);
        }
    });
}
