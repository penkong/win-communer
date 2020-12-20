// ------------------------- Packages ------------------------------

// ------------------------ Local ----------------------------------

import { ITodoItem, EnumTodoAction } from '.'

// ------------------------- Loading Action ---------------------------------

export interface LoadingStartActionType {
  type: EnumTodoAction.LOADING_STATE
  payload: boolean
}

export const LoadingStartAction = () => ({
  type: EnumTodoAction.LOADING_STATE,
  payload: true
})

export interface LoadingFinishedActionType {
  type: EnumTodoAction.LOADING_STATE
  payload: boolean
}

export const LoadingFinishedAction = () => ({
  type: EnumTodoAction.LOADING_STATE,
  payload: false
})

// ------------------------- TODO Actions ---------------------------------

export interface TodoGetStartActionType {
  type: EnumTodoAction.TODO_GET_START
  payload: any
}

export const TodoGetStartAction = () => ({
  type: EnumTodoAction.TODO_GET_START,
  payload: null
})

// ---

export interface TodoGetSuccessActionType {
  type: EnumTodoAction.TODO_GET_SUCCESS
  payload: ITodoItem[]
}

export const TodoGetSuccessAction = (info: ITodoItem[]) => ({
  type: EnumTodoAction.TODO_GET_SUCCESS,
  payload: info
})

// ---

export interface TodoGetFailureActionType {
  type: EnumTodoAction.TODO_GET_FAILURE
  payload: string
}

export const TodoGetFailureAction = (
  error: string = 'there is problem with get todos'
) => ({
  type: EnumTodoAction.TODO_GET_FAILURE,
  payload: error
})

// ------------------------- Choose Items Actions ---------------------------------

export interface TodoChooseStartActionType {
  type: EnumTodoAction.TODO_CHOOSE_START
  payload: ITodoItem
}

export const TodoChooseStartAction = (info: ITodoItem) => ({
  type: EnumTodoAction.TODO_CHOOSE_START,
  payload: info
})

// ---

export interface TodoChooseSuccessActionType {
  type: EnumTodoAction.TODO_CHOOSE_SUCCESS
  payload: any
}

export const TodoChooseSuccessAction = () => ({
  type: EnumTodoAction.TODO_CHOOSE_SUCCESS,
  payload: null
})

// ---

export interface TodoChooseFailureActionType {
  type: EnumTodoAction.TODO_CHOOSE_FAILURE
  payload: string
}

export const TodoChooseFailureAction = (
  error: string = 'there is problem with select item'
) => ({
  type: EnumTodoAction.TODO_CHOOSE_FAILURE,
  payload: error
})

// --------------------------------------------------------------------------------

export type TodoAction =
  | typeof LoadingStartAction
  | typeof TodoGetStartAction
  | typeof TodoGetSuccessAction
  | typeof TodoGetFailureAction
  | typeof TodoChooseStartAction
  | typeof TodoChooseSuccessAction
  | typeof TodoChooseFailureAction

export type TodoActionsType =
  | LoadingStartActionType
  | TodoGetStartActionType
  | TodoGetSuccessActionType
  | TodoGetFailureActionType
  | TodoChooseStartActionType
  | TodoChooseSuccessActionType
  | TodoChooseFailureActionType
