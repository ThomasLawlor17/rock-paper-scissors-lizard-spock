import React, { useState } from 'react'
import styled from 'styled-components'
import IconRules from './icons/Rules'
import Icon from './icons/Icon'

const StyledDiv = styled.div`
width: 100vw;
height: 100vh;
position: absolute;
top: 0;
background-color: #FFFFFF;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
z-index: 2;

h1 {
    color: var(--dark-text);
    margin: 13.333% 0 0 0;
}
.rules-icon {
    scale: 0.9;
    overflow: visible;
}
span {
     margin-bottom: 9%;
     overflow: visible;
     cursor: pointer;
}

@keyframes slide-in {
  0% {
    transform: translateY(-100vh);
  }
  100% {
    transform: translateY(0%)
  }
}
@keyframes slide-out {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100vh)
  }
}

`

const Rules = ({setRules}) => {

  const [close, setClose] = useState(false)

  const handleClose = () => {
    setClose(true)
    setTimeout(() => {
      setRules(false)
      setClose(false)
    }, 400)
  }

  return (
    <StyledDiv className={close ? "close" : "open"}>
        <h1>RULES</h1>
        <IconRules />
        <span  onClick={handleClose}>
        <Icon name='Close'/>
        </span>
    </StyledDiv>
  )
}

export default Rules