import * as ActionTypes from './actionTypes'

export const tickCell = index => ({
    type: ActionTypes.TICK_CELL,
    index: index,
})