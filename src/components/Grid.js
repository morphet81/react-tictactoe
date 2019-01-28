import React, {Component} from 'react'
import styled from 'styled-components'
import Cell from './Cell'

/**
 * The grid of the Tic Tac Toe game
 */
class Grid extends Component {
    render () {
        let cells = []

        for (let i = 0; i < 9; i++) {
            cells.push(
                <Cell key={`cell-${i}`} index={i} size={cellSize}/>
            )
        }

        return (
            <GridStyled>
                {cells}
            </GridStyled>
        )
    }

}

/**
 * Styling variables
 */
const gridWidth = 40
const cellSize = gridWidth / 3

/**
 * Grid component
 */
const GridStyled = styled.div`
  width: ${gridWidth}vw;
  display: flex;
  flex-wrap: wrap;
  background-color: aliceblue;
`

export default Grid