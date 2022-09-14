import React, {useState} from 'react'
import Board from './components/Board'

export default function App() {
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)
    const [winner, setWinner] = useState(false);
    
    function checkWinner() {
        // row
        // column
        // diagonial

        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
          ];
          for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                setWinner(squares[a])
                return squares[a];
            }
          }
          if(squares.every(e => e != null)) {
            setWinner("Nobody")
            console.log(winner)
            return true
          }
          return null;
    }
console.log(winner)
    function handleClick(i) {
        if(winner) {
            return;
        }
        let squaresArray = squares
        if(squares[i] === null) {
            squaresArray[i] = xIsNext ? "X" : "O"
            setSquares(squaresArray)
            setXIsNext(!xIsNext)
        }
        checkWinner()
    }

    function startOver() {
        setSquares(Array(9).fill(null))
        setWinner(false)
        setXIsNext(true)
    }

    return (
        <div className="game">
            <div className="game-board">
                <Board 
                    handleClick={handleClick}
                    squares={squares}
                />
            </div>
            <div className="game-info">
                <div>
                    {
                    winner
                    ? 'game won by '+ winner
                    : 'Next player: '+ (xIsNext ? "X" : "O")
                }
                {winner && (
                    <button onClick={startOver}>Start opnieuw</button>
                )}
                </div>
            </div>
        </div>)
}