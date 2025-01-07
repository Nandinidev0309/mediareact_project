import React from 'react';
import styled from 'styled-components';

const HomeButton = ({Click,children}) => {
  return (
    <StyledWrapper>
      <button onClick={Click}>
        {children}
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  button {
    width: 165px;
    height: 62px;
    cursor: pointer;
    color: #fff;
    font-size: 17px;
    border-radius: 1rem;
    border: none;
    position: relative;
    background: #100720;
    transition: 0.1s;
  }

  button::after {
    content: '';
    width: 100%;
    height: 100%;
    background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(255,94,247,1) 17.8%, rgba(2,245,255,1) 100.2% );
    filter: blur(15px);
    z-index: -1;
    position: absolute;
    left: 0;
    top: 0;
  }

  button:active {
    transform: scale(0.9) rotate(3deg);
    background: radial-gradient( circle farthest-corner at 10% 20%,  rgba(255,94,247,1) 17.8%, rgba(2,245,255,1) 100.2% );
    transition: 0.5s;
  }`;

export default HomeButton;
