// ------------------------- Packages ------------------------------

import { all, fork } from 'redux-saga/effects'
import { TodoGetListStartSaga } from '.'

// ------------------------- Local ---------------------------------

// -----------------------------------------------------------------

export function* todoSagas() {
  yield all([
    // search list
    fork(TodoGetListStartSaga)
  ])
}

// -----------------------------------------------------------------
