export interface ITodoStateModel {
  todos: ITodoItem[]
  selectedTodo: string
  loading: boolean
  errorMessage: string
}

export interface ITodoItem {
  id?: string
  todo: string
  isActive: boolean
}
