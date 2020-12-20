// ------------------------- Packages ------------------------------

import { put, select, takeLatest } from 'redux-saga/effects'

// ------------------------- Local ---------------------------------

import {
  EnumTodoAction,
  TodoService,
  ITodoItem,
  LoadingStartAction,
  TodoGetStartActionType,
  TodoGetSuccessAction,
  TodoGetFailureAction
} from '..'

// -----------------------------------------------------------------

// ------------------------- Search --------------------------------

export function* TodoGetListSaga({ payload }: TodoGetStartActionType) {
  yield put(LoadingStartAction())
  try {
    const data: ITodoItem[] = yield TodoService.getTodos('fsdfsd')

    if (data) {
      yield put(TodoGetSuccessAction(data))
    }
  } catch (error) {
    console.log(error.response)
    yield put(TodoGetFailureAction(error.reponse))
  }
}

// ------------------------- Main -----------------------------------

export function* TodoGetListStartSaga() {
  yield takeLatest<TodoGetStartActionType>(
    EnumTodoAction.TODO_GET_START,
    TodoGetListSaga
  )
}
