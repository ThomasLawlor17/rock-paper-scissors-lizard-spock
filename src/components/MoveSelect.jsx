import styled from "styled-components"
import Icon from "./icons/Icon"

const StyledDiv = styled.div`
width: 100%;
background-repeat: no-repeat;
background-position: center;
position: relative;
width: 476px;
height: 466px;
margin: 45px auto 0 auto;

.select {
  width: 148px;
  height: 148px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  position: absolute;
  margin: auto;

  &::before {
    content: '';
    width: 112px;
    height: 112px;
    position: absolute;
    border-radius: 100%;
    background-color: #f9f9f9;
    box-shadow: inset 0 6px lightgray;
  }
  svg {
    z-index: 2;
  }
}
.select-Rock {
  bottom: 0;
  right: 66px;
}
.select-Paper {
  top: 130px;
  right: 0;
}
.select-Scissors {
  top: 0;
  left: 0;
  right: 0;
}
.select-Lizard {
  bottom: 0;
  left: 66px;
}
.select-Spock {
  top: 130px;
  left: 0;
}

@media (max-width: 769px) {
  max-width: 375px;
  margin: 4% auto auto;
  height: 400px;
  background-size: 58%;
  background-position: center 6rem;

  .select {
    height: 94px;
    width: 94px;

    &::before {
      width: 72px;
      height: 72px;
      box-shadow: inset 0 4px lightgray;
    }
    .icon {
      scale: 0.65;
    }

  }
  .select-Rock {
    top: 16.6rem;
    right: 4.9rem;
  }
  .select-Paper {
    top: 9rem;
    right: 2.3rem;
  }
  .select-Scissors {
    top: 4rem;
    left: 0;
    right: 0;
  }
  .select-Lizard {
    top: 16.6rem;
    left: 4.8rem;
  }
  .select-Spock {
    top: 9rem;
    left: 2.2rem;
  }
}


`

const MoveSelect = ({handleUserMove, moves, width}) => {


  return (
    <StyledDiv className="moves-container">
        {moves && moves.map(({move, name, beats}) => (
            <div key={move} className={"select select-" + name} onClick={() => handleUserMove(move, name, beats)} id={move} style={{'background': `var(--${name}-gradient)`, 'boxShadow': `inset 0 ${width > 770 ? '-7px' : '-4px'} var(--${name}-shadow)`}}>
                <Icon name={name} />
            </div>
        ))}
    </StyledDiv>
  )
}

export default MoveSelect