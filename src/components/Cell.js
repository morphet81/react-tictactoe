import React, {Component} from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { CELL_SYMBOL } from '../redux/actionTypes'
import { boundTickCell } from '../redux/store'
import { getSymbol } from '../redux/selectors'

/**
 * A cell of the game
 */
class Cell extends Component {
    render () {
        return (
            <CellBody size={this.props.size} onClick={this.onCellClick}>
                <div>{this.symbol()}</div>
            </CellBody>
        )
    }

    /**
     * Trigger a click on the cell
     */
    onCellClick = () => {
        boundTickCell(this.props.index)
    }

    /**
     * Manages which symbol to display on the cell
     */
    symbol () {
        switch (this.props.symbol) {
            case CELL_SYMBOL.SYMBOL_X:
                return 'X'
            case CELL_SYMBOL.SYMBOL_O:
                return 'O'
            default:
                return ''
        }
    }
}

/**
 * Ensure the right props are provided
 */
Cell.propTypes = {
    index: PropTypes.number.isRequired
}

/**
 * Cell body component
 */
const CellBody = styled.div`
    width: ${props => props.size}vw;
    height: ${props => props.size}vw;
    border: solid 1px black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3em;
    user-select: none;

    &:hover {
        cursor: pointer;
    }
`

/**
 * Connect the cell to redux
 */
export default connect(
    (state, cell) => ({
        symbol: getSymbol(state, cell.index)
    })
)(Cell)