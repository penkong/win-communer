// ------------------------- Packages ------------------------------

import { all, fork } from 'redux-saga/effects'

// ------------------------ Local ----------------------------------

import { todoSagas } from './domains/todo'

// -----------------------------------------------------------------

export function* rootSaga() {
  yield all([fork(todoSagas)])
}
