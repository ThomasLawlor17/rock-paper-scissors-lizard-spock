import styled from "styled-components"
import Icon from "./icons/Icon"

const StyledDiv = styled.div`
position: relative;
width: 100%;
display: flex;
flex-direction: column;
margin-top: 13vh;



.moves {
    position: relative;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: 319px;
    margin: auto;
    
    .move-container {
        display: flex;
        flex-direction: column;
        gap: 24px;
    
        .move {
            height: 132px;
            width: 132px;
            border-radius: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            cursor: pointer;
            margin: auto;
          
            &:not(.computer-move-empty)::before {
              content: '';
              position: absolute;
              width: 101px;
              height: 101px;
              border-radius: 100%;
              background-color: #f9f9f9;
              box-shadow: inset 0 6px lightgray;
            }
            .icon {
              scale: 1;
            }
        }
        .computer-move-empty::before {
            content: '';
            position: absolute;
            width: 101px;
            height: 101px;
            border-radius: 100%;
            background-color: #192946;
        }
        span {
            color: #F9F9F9;
            letter-spacing: 1px;
            font-size: 16px;
            font-weight: 700;
            z-index: 2;
        }
        .winner {
            transition: all 0.4s ease-in-out;
        }
    }
}
.result {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 12vh;
    gap: 24px;

    h1 {
        margin: 0;
        font-size: 50px;
        color: #F9F9F9;
        line-height: 42px;
    }

    button {
        width: 222px;
        height: 53px;
        border-radius: 10px;
        background-color: #F9F9F9;
        color: var(--dark-text);
        font-family: "Barlow semi condensed", sans-serif;
        font-weight: 600;
        font-size: 18px;
        letter-spacing: 1px;
        word-spacing: 2px;
        border: none;
    }
}


`

const Active = ({userMove, computerMove, result, handleRestart}) => {
  return (
    <StyledDiv>
        <div className="moves">
            <div className="move-container">
                <div className={result === 1 ? "winner move" : "move"} style={{'background': `var(--${userMove}-gradient)`, 'boxShadow': `inset 0 -6px var(--${userMove}-shadow)${result === 1 ? ", 0 0 0 50px rgba(31, 55, 86, 0.25), 0 0 0 30px rgba(31, 55, 86, 0.45), 0 0 0 10px rgba(31, 55, 86,0.85)" : ''}`}}>
                    <Icon name={userMove}/>
                </div>
                <span>YOU PICKED</span>
            </div>
            <div className="move-container">
                {computerMove ? 
                <div className={result === 2 ? "winner move" : "move"}  style={{'background': `var(--${computerMove}-gradient)`, 'boxShadow': `inset 0 -6px var(--${computerMove}-shadow)${result === 2 ? ", 0 0 0 50px rgba(31, 55, 86, 0.25), 0 0 0 30px rgba(31, 55, 86, 0.45), 0 0 0 10px rgba(31, 55, 86,0.85)" : ''}`}}>
                    <Icon name={computerMove}/>
                </div>
                :
                <div className="computer-move-empty move"></div>
                }
                <span>THE HOUSE PICKED</span>
            </div>
        </div>
        {result ? 
        <div className="result">
            <h1>{result === 1 ? "YOU WIN" : result === 2 ? "YOU LOSE" : result === 3 ? "DRAW" : null}</h1>
            <button className="restart-btn" onClick={handleRestart}>PLAY AGAIN</button>
        </div>
        : null}
    </StyledDiv>
  )
}

export default Active