import { useState } from 'react';
import './App.css';
import Icon from './components/icons/Icon'
import Rules from './components/icons/Rules'

// Rules: 
// Scissors beats Paper
// Paper beats Rock
// Rock beats Lizard
// Lizard beats Spock
// Spock beats Scissors
// Scissors beats Lizard
// Paper beats Spock
// Rock beats Scissors
// Lizard beats Paper
// Spock beats Rock

// Rock beats: Lizard / Scissors | 1 - 3 / 4
// Paper beats: Rock / Spock | 2 - 1 / 5
// Scissors beats: Paper / Lizard | 3 - 2 / 4
// Lizard beats: Spock / Paper | 4 - 2 / 5
// Spock beats: Scissors / Rock | 5 - 1 / 3





function App() {

  const [playerScore, setPlayerScore] = useState(0)
  const [computerScore, setComputerScore] = useState(0)
  const [userMove, setUserMove] = useState()
  const [computerMove, setComputerMove] = useState()
  const [result, setResult] = useState(0)
  // 1 = user win / 2 = computer win / 3 = draw
  const [rules, setRules] = useState(false)


  const moves = [
    {move: 1, name: 'rock', beats: [3, 4]},
    {move: 2, name: 'paper', beats: [1, 5]},
    {move: 3, name: 'scissors', beats: [2, 4]},
    {move: 4, name: 'lizard', beats: [2, 5]},
    {move: 5, name: 'spock', beats: [1, 3]},
  ]

  const increment = () => setPlayerScore((prevCount) => prevCount + 1)
  const decrement = () => setPlayerScore((prevCount) => prevCount - 1)

  const checkWin = (opponentMove, beats) => {
    if (beats.includes(opponentMove)) {
      return true
    }
    else return false
  }

  const handleComputerMove = () => {
    let num = Math.ceil(Math.random() * 5)
    setComputerMove(moves[num - 1].name)
    let computerBeats = moves[num - 1].beats
    return {move: num, beats: computerBeats}
  }

  const handleUserMove = (move, name, beats) => {
    setUserMove(name)
    let computerMove = handleComputerMove()
    if (move === computerMove.move) {
      console.log(move, computerMove.move)
      setResult(3)
    }
    else {
      // Check user win
      if (checkWin(computerMove.move, beats)) {
        setResult(1)
        increment()
      }
      if (checkWin(move, computerMove.beats)) {
        setResult(2)
        decrement()
      }
    }
    console.log(result)
  }

  return (
    <main className="App">
      <div className="score">
        {playerScore}
      </div>
      <div className="move">
        {userMove ? userMove : null}{" | "}{computerMove ? computerMove : null}
      </div>
      <div className="result">
        {result === 1 ? "User Win!" : result === 2 ? "Computer Win!" : result === 3 ? "Draw" : null}
      </div>
      <div className="moves">
        {moves.map(({move, name, beats}) => (
          <div key={move} id={move} onClick={() => handleUserMove(move, name, beats)}>{name}</div>
        ))}
      </div>
      <button onClick={() => setRules(true)}>Rules</button>
      {rules ? 
      <div className="rules">
        <Rules />
        <div className="close" onClick={() => setRules(false)}>
          <Icon name="Close"/>
        </div>
      </div>
      : null}
    </main>
  );
}

export default App;
