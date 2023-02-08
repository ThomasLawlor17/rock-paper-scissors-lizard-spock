import styled from "styled-components"
import Icon from "./icons/Icon"

const StyledDiv = styled.div`
position: relative;
display: flex;
flex-direction: column;
margin-top: 78px;

.moves {
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin: auto;
    height: 388px;
    gap: 66px;
    
    .move-container {
        display: flex;
        flex-direction: column-reverse;
        gap: 68px;
    
        .move {
            border-radius: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            cursor: pointer;
            margin: auto;
            height: 304px;
            width: 304px;
          
            &:not(.computer-move-empty)::before {
              content: '';
              height: 226px;
              width: 226px;
              position: absolute;
              border-radius: 100%;
              background-color: #f9f9f9;
              box-shadow: inset 0 10px lightgray;
            }
            .icon {
                scale: 2;
              }
        }
        .computer-move-empty::before {
            content: '';
            position: absolute;
            border-radius: 100%;
            background-color: #192946;
            width: 226px;
            height: 226px;
        }
        span {
            color: #F9F9F9;
            font-weight: 700;
            font-size: 24px;
            letter-spacing: 2px;
            z-index: 2;
            @media (min-width: 770px) {
                line-height: 18px;
            }
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
    gap: 26px;
    z-index: 3;
    animation: scale-up 0.3s linear;

    @media (min-width: 770px) {
        width: 220px;
        margin-bottom: 104px;
    }

    h1 {
        margin: 0;
        color: #F9F9F9;
        font-size: 56px;

        @media (min-width: 770px) {
            line-height: 44px;
        }
    }

    button {
        border-radius: 10px;
        background-color: #F9F9F9;
        color: var(--dark-text);
        font-family: "Barlow semi condensed", sans-serif;
        font-weight: 600;
        border: none;
        width: 220px;
        height: 53px;
        font-size: 18px;
        letter-spacing: 1px;
        word-spacing: 2px;
    }
}

@media (max-width: 769px) {
    width: 100%;
    margin-top: 13vh;

    .moves {
        height: 100%;
        width: 319px;

        .move-container {
            gap: 24px;
            flex-direction: column;

            .move {
                height: 132px;
                width: 132px;

                &:not(.computer-move-empty)::before {
                    width: 101px;
                    height: 101px;
                    box-shadow: inset 0 6px lightgray;
                }
                .icon {
                    scale: 1;
                  }
            }
            .computer-move-empty::before {
                width: 101px;
                height: 101px;
            }
            span {
                letter-spacing: 1px;
                font-size: 16px;
            }
        }
    }

    .result {
        margin-top: 12vh;
        gap: 24px;

        h1 {
            font-size: 50px;
            line-height: 42px;
        }
    }
}

.slide-left {
    animation: slide-left 0.51s linear;
    animation-delay: 1s;
}
.slide-right {
    animation: slide-right 0.51s linear;
    animation-delay: 1s;
}

@keyframes slide-left {
    0% {transform: translateX(0);}
    100% {transform: translateX(-143px);}
}
@keyframes slide-right {
    0% {transform: translateX(0);}
    100% {transform: translateX(143px);}
}
@keyframes scale-up {
    0% {scale: 0}
    100% {scale: 1}
}

`

const Active = ({userMove, computerMove, result, handleRestart, width}) => {
  return (
    <StyledDiv>
        <div className="moves">
            <div className={userMove && computerMove && !result && width > 769 ? "slide-left move-container" : "move-container"}>
                <div className={result === 1 ? "winner move" : "move"} style={{'background': `var(--${userMove}-gradient)`, 'boxShadow': `inset 0 ${width > 769 ? '-10px' : '-6px'} var(--${userMove}-shadow)${result === 1 ? `, 0 0 0 ${width > 769 ? '200px' : '50px'} rgba(31, 55, 86, 0.25), 0 0 0 ${width > 769 ? '120px' : '30px'} rgba(31, 55, 86, 0.45), 0 0 0 ${width > 769 ? '40px' : '10px'} rgba(31, 55, 86,0.85)` : ''}`}}>
                    <Icon name={userMove}/>
                </div>
                <span>YOU PICKED</span>
            </div>
            {result && width > 769 ? 
        <div className="result">
            <h1>{result === 1 ? "YOU WIN" : result === 2 ? "YOU LOSE" : result === 3 ? "DRAW" : null}</h1>
            <button className="restart-btn" onClick={handleRestart}>PLAY AGAIN</button>
        </div>
        : null}
            <div className={userMove && computerMove && !result && width > 769 ? "slide-right move-container" : "move-container"}>
                {computerMove ? 
                <div className={result === 2 ? "winner move" : "move"}  style={{'background': `var(--${computerMove}-gradient)`, 'boxShadow': `inset 0 ${width > 769 ? '-10px' : '-6px'} var(--${computerMove}-shadow)${result === 2 ?  `, 0 0 0 ${width > 769 ? '200px' : '50px'} rgba(31, 55, 86, 0.25), 0 0 0 ${width > 769 ? '120px' : '30px'} rgba(31, 55, 86, 0.45), 0 0 0 ${width > 769 ? '40px' : '10px'} rgba(31, 55, 86,0.85)` : ''}`}}>
                    <Icon name={computerMove}/>
                </div>
                :
                <div className="computer-move-empty move"></div>
                }
                <span>THE HOUSE PICKED</span>
            </div>
        </div>
        {result && width < 770 ? 
        <div className="result">
            <h1>{result === 1 ? "YOU WIN" : result === 2 ? "YOU LOSE" : result === 3 ? "DRAW" : null}</h1>
            <button className="restart-btn" onClick={handleRestart}>PLAY AGAIN</button>
        </div>
        : null}
    </StyledDiv>
  )
}

export default Active