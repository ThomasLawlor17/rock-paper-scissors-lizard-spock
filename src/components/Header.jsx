import styled from "styled-components"
import Icon from './icons/Icon'

const StyledHeader = styled.header`
display: flex;
align-items: center;
justify-content: space-between;
border: solid 3px var(--header-outline);
border-radius: 10px;
position: relative;
margin: 48px auto 0 auto;
padding: 18px 24px 18px 30px;
height: 114px;
width: 646px;
z-index: 4;

.logo-icon {
    position: relative;
}

.score {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #F9F9F9;
    border-radius: 5px;
    height: 116px;
    width: 152px;
    gap: 10px;

    .score-title {
        color: var(--score-text);
        font-size: 18px;
        letter-spacing: 1px;
        padding-top: 18px;
    }
    .score-number {
        color: var(--dark-text);
        font-weight: 700;
        font-size: 64px;
        line-height: 46px;
    }
}

@media (max-width: 769px) {
    width: calc(84% - 24px);
    height: 76px;
    margin: 32px auto 0 auto;
    padding: 12px;

    .logo-icon {
        scale: 0.47;
        left: -22px;
    }
    .score {
        gap: 4px;
        width: 85px;
        height: 75px;

        .score-title {
            font-size: 12px;
            padding-top: 10px;
        }
        .score-number {
            font-size: 40px;
            line-height: 32px;
        }
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