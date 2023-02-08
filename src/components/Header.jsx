import styled from "styled-components"
import Icon from './icons/Icon'

const StyledHeader = styled.header`
display: flex;
align-items: center;
justify-content: space-between;
width: calc(84% - 24px);
height: 76px;
margin: 32px auto 0 auto;
padding: 12px;
border: solid 3px var(--header-outline);
border-radius: 10px;
position: relative;

.logo-icon {
    scale: 0.47;
    position: relative;
    left: -22px;
}

.score {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    width: 85px;
    height: 75px;
    background-color: #F9F9F9;
    border-radius: 5px;

    .score-title {
        color: var(--score-text);
        font-size: 12px;
        letter-spacing: 1px;
        padding-top: 10px;
    }
    .score-number {
        color: var(--dark-text);
        font-weight: 700;
        font-size: 40px;
        line-height: 32px;
    }
}

`

const Header = ({playerScore}) => {
  return (
    <StyledHeader>
        <Icon name="Logo" />
        <div className="score">
            <span className="score-title">SCORE</span>
            <span className="score-number">{playerScore}</span>
        </div>
    </StyledHeader>
  )
}

export default Header