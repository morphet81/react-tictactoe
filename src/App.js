import React, { Component } from 'react'
import { boundTickCell } from './redux/store'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.css'
import './App.scss';
import Grid from './components/Grid'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { CELL_SYMBOL } from './redux/actionTypes'

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Container>
                    <h1>Tic Tac Toe</h1>
                    <Grid />
                    <Confirm onClick={this.onConfirmClick}>Confirm</Confirm>
                </Container>
            </Provider>
        );
    }

    /**
     * Confirm humand player's turn and let the computer playing
     */
    onConfirmClick = () => {
        // Get current cells' states
        const cells = store.getState().cells
        let availableIndices = []

        // Build a list of non-assigned cells
        cells.forEach((cellSymbol, index) => {
            if (cellSymbol === CELL_SYMBOL.SYMBOL_EMPTY) {
                availableIndices.push(index)
            }
        });

        // Randomly tick an available cell
        const randomIndex = availableIndices[Math.floor(Math.random() * (availableIndices.length - 1))]
        boundTickCell(randomIndex)
    }
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Confirm = styled.button`
  margin-top: 2vh;
`

export default App;
