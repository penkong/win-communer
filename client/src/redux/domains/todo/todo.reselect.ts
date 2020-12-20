// ------------------------- Packages ------------------------------

import { createSelector } from 'reselect'

// ------------------------ Local ----------------------------------

import { IApplicationStateModel } from '../../rootReducer'

// -----------------------------------------------------------------

const todoStateSelector = (state: IApplicationStateModel) => state.todo

// -----------------------------------------------------------------

export const todoSelector = createSelector([todoStateSelector], (info) => info)
