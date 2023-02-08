import styled from "styled-components"
import Icon from "./icons/Icon"

const StyledDiv = styled.div`
width: 100%;
max-width: 375px;
margin: 4% auto auto;
height: 400px;
background-repeat: no-repeat;
background-size: 58%;
background-position: center 6rem;
position: relative;


.select {
  height: 94px;
  width: 94px;
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
    position: absolute;
    width: 72px;
    height: 72px;
    border-radius: 100%;
    background-color: #f9f9f9;
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

`

const MoveSelect = ({handleUserMove, moves}) => {
  return (
    <StyledDiv className="moves-container">
        {moves && moves.map(({move, name, beats}) => (
            <div key={move} className={"select select-" + name} onClick={() => handleUserMove(move, name, beats)} id={move} style={{'background': `var(--${name}-gradient)`, 'boxShadow': `inset 0 -4px var(--${name}-shadow)`}}>
                <Icon name={name} />
            </div>
        ))}
    </StyledDiv>
  )
}

export default MoveSelect