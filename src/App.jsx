import { useState, useEffect } from 'react';
import styled from 'styled-components';
import './App.css';
import Active from './components/Active';
import Header from './components/Header';
import MoveSelect from './components/MoveSelect';
import Rules from './components/Rules';

const StyledMain = styled.main`
width: 100vw;
height: 100vh;
background: var(--background);
position: absolute;

.rules-toggle {
  position: absolute;
  bottom: 32px;
  right: 30px;
  margin: auto;
  width: 130px;
  height: 40px;
  border-radius: 8px;
  background: none;
  border: solid 1px #F9F9F9;
  color: #F9F9F9;
  font-family: 'Bralow semi condensed', sans-serif;
  font-size: 15px;
  letter-spacing: 1px;
  cursor: pointer;
}

.dim {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  z-index: 5;
  background-color: black;
  opacity: 0.5;
  animation: fade-in 0.4s linear;
}

&:has(.close) .dim {
  animation: fade-out 0.4s linear;
}

@keyframes fade-in {
  0% {opacity: 0}
  100% {opacity: 0.5}
}
@keyframes fade-out {
  0% {opacity: 0.5}
  100% {opacity: 0}
}

@media (max-width: 769px) {
  .rules-toggle {
    bottom: 7.6%;
    left: 0;
    right: 0;
  }
}

`



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
  const [userMove, setUserMove] = useState()
  const [computerMove, setComputerMove] = useState()
  const [result, setResult] = useState(0)
  // 1 = user win / 2 = computer win / 3 = draw
  const [rules, setRules] = useState(false)

  const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResizeWindow = () => setWidth(window.innerWidth);
		window.addEventListener("resize", handleResizeWindow);
		return () => {
			window.removeEventListener("resize", handleResizeWindow);
		};
	}, []);


  const moves = [
    {move: 1, name: 'Rock', beats: [3, 4]},
    {move: 2, name: 'Paper', beats: [1, 5]},
    {move: 3, name: 'Scissors', beats: [2, 4]},
    {move: 4, name: 'Lizard', beats: [2, 5]},
    {move: 5, name: 'Spock', beats: [1, 3]},
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
    setTimeout(() => {
      let computerMove = handleComputerMove()
      setTimeout(() => {
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
      }, 1500)
    }, 1500)
  }

  const handleRestart = () => {
    setUserMove(undefined)
    setComputerMove(undefined)
    setResult(0)

  }

  return (
    <StyledMain className="App">
      <Header playerScore={playerScore}/>
      {userMove ? 
      <Active userMove={userMove} computerMove={computerMove} result={result} handleRestart={handleRestart} width={width} />
      :
      <MoveSelect handleUserMove={handleUserMove} moves={moves} width={width} />
      }
      {rules ? 
      <>
      <Rules setRules={setRules} width={width} />
      {width > 769 ? 
      <div className="dim"></div>
      : ""}
      </>
      :
      null}
      <button className='rules-toggle' onClick={() => setRules(true)}>RULES</button> 
    </StyledMain>
  );
}

export default App;
