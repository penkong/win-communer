// ------------------------- Packages ------------------------------

// ------------------------- Local ---------------------------------

import { ITodoStateModel, EnumTodoAction, TodoActionsType } from '.'

// ------------------------ Types ----------------------------------

//  ----------------------- Raw State -----------------------------

const INITIAL_STATE: ITodoStateModel = {
  todos: [],
  selectedTodo: '',
  loading: false,
  errorMessage: ''
}

// ------------------------ Reducer -------------------------------

export const todoReducer = (
  state: ITodoStateModel = INITIAL_STATE,
  action: TodoActionsType
) => {
  switch (action.type) {
    // ---

    case EnumTodoAction.TODO_GET_START:
      return { ...state }

    // ---

    case EnumTodoAction.TODO_GET_SUCCESS:
      return { ...state }

    // ---

    case EnumTodoAction.TODO_GET_FAILURE:
      return { ...state }

    // ---

    case EnumTodoAction.TODO_CHOOSE_START:
      return { ...state }

    // ---

    case EnumTodoAction.TODO_CHOOSE_SUCCESS:
      return { ...state }

    // ---

    case EnumTodoAction.TODO_CHOOSE_FAILURE:
      return { ...state }

    // ---
    default:
      return state
  }
}
