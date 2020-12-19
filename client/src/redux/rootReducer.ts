// ------------------------- Packages ------------------------------

import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// ------------------------ Local ----------------------------------

import { ITodoStateModel, todoReducer, TodoActionsType } from './domains/todo'

// ------------------- App State Model ---------------------------------

export interface IApplicationStateModel {
  todo: ITodoStateModel
}

// ------------------- Persist state to local -----------------------------------

const persistConfig = {
  key: 'root',
  storage,
  whitelist: []
}

// --------------------- Create rootReducer ---------------------------------

export const rootReducer = combineReducers<
  IApplicationStateModel,
  TodoActionsType
>({
  todo: todoReducer
})

export type RootState = ReturnType<typeof rootReducer>

// ---------------------- Persisted Reducer --------------------------------

export const persistedReducer = persistReducer(persistConfig, rootReducer)
