import React, { useState } from 'react'
import styled from 'styled-components'
import IconRules from './icons/Rules'
import Icon from './icons/Icon'

const StyledDiv = styled.div`
position: absolute;
background-color: #FFFFFF;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
z-index: 6;
width: 404px;
height: 416px;
top: 0;
margin: auto;

@media (min-width: 770px) {
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 10px;
  padding-bottom: 46px;

  div {
    width: 336px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 38px;

    h1 {
      margin: 0
    }
  }
}

h1 {
    color: var(--dark-text);
}
.rules-icon {
    overflow: visible;
}
span {
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

@media (max-width: 769px) {
  width: 100vw;
  height: 100vh;

  h1 {
    margin: 13.333% 0 0 0;
  }
  .rules-icon {
    scale: 0.9;
  }
  span {
    margin-bottom: 9%;
  }

}

`

const Rules = ({setRules, width}) => {

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
      {width > 769 ? <div>
        <h1>RULES</h1>
        <span  onClick={handleClose}>
        <Icon name='Close'/>
        </span>
      </div>
      : 
      <h1>RULES</h1>
      }
        <IconRules />
      {width > 769 ? "" 
      :
      <span  onClick={handleClose}>
        <Icon name='Close'/>
      </span>
      }
    </StyledDiv>
  )
}

export default Rules