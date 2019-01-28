import { createStore } from 'redux'
import * as ActionTypes from './actionTypes'
import * as Actions from './actions'

const initialState = {
    cells: [
        ActionTypes.CELL_SYMBOL.SYMBOL_EMPTY,
        ActionTypes.CELL_SYMBOL.SYMBOL_EMPTY,
        ActionTypes.CELL_SYMBOL.SYMBOL_EMPTY,
        ActionTypes.CELL_SYMBOL.SYMBOL_EMPTY,
        ActionTypes.CELL_SYMBOL.SYMBOL_EMPTY,
        ActionTypes.CELL_SYMBOL.SYMBOL_EMPTY,
        ActionTypes.CELL_SYMBOL.SYMBOL_EMPTY,
        ActionTypes.CELL_SYMBOL.SYMBOL_EMPTY,
        ActionTypes.CELL_SYMBOL.SYMBOL_EMPTY,
    ]
}

function ticTactToe (state = initialState, action) {
    switch (action.type) {
        case ActionTypes.TICK_CELL:
            // Clone current state
            let newState = Object.assign({}, state)

            // Find which should be the new symbol for the cell that is ticked
            let newSymbol
            switch (newState.cells[action.index]) {
                case ActionTypes.CELL_SYMBOL.SYMBOL_X:
                    newSymbol = ActionTypes.CELL_SYMBOL.SYMBOL_O
                    break
                case ActionTypes.CELL_SYMBOL.SYMBOL_O:
                    newSymbol = ActionTypes.CELL_SYMBOL.SYMBOL_EMPTY
                    break
                default:
                    newSymbol = ActionTypes.CELL_SYMBOL.SYMBOL_X
            }

            // Update cell's symbol and return new state
            newState.cells[action.index] = newSymbol
            return newState
        default:
            return state
    }
}

export const store = createStore(ticTactToe)

export const boundTickCell = index => store.dispatch(Actions.tickCell(index))