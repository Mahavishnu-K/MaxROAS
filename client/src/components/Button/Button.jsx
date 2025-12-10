import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Button = ({text = "Start Scaling Now"}) => {
  const navigate = useNavigate();
  return (
    <StyledWrapper>
      <button onClick={() => navigate('/contact')} className="Btn-Container">
        <span className="text">{text}</span>
        <span className="icon-Container">
          <svg viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="1.61321" cy="1.61321" r="1.5" fill="black" />
            <circle cx="5.73583" cy="1.61321" r="1.5" fill="black" />
            <circle cx="5.73583" cy="5.5566" r="1.5" fill="black" />
            <circle cx="9.85851" cy="5.5566" r="1.5" fill="black" />
            <circle cx="9.85851" cy="9.5" r="1.5" fill="black" />
            <circle cx="13.9811" cy="9.5" r="1.5" fill="black" />
            <circle cx="5.73583" cy="13.4434" r="1.5" fill="black" />
            <circle cx="9.85851" cy="13.4434" r="1.5" fill="black" />
            <circle cx="1.61321" cy="17.3868" r="1.5" fill="black" />
            <circle cx="5.73583" cy="17.3868" r="1.5" fill="black" />
          </svg>
        </span>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .Btn-Container {
    display: flex;
    width: auto;
    height: fit-content;
    background-color: #000000;
    box-shadow: 0px 5px 10px #bebebe;
    justify-content: space-between;
    align-items: center;
    border: none;
    cursor: pointer;
  }
  
  .icon-Container {
    /* Increased from 45px to 60px */
    width: 60px;
    height: 60px;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    margin-right: 1px;
    justify-content: center;
    border: 3px solid #1d2129;
    overflow: hidden;
  }
  
  .text {
    /* Increased width and font size */
    width: 220px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.2em; /* Larger text */
    letter-spacing: 1.2px;
    font-weight: 600; /* Added weight for better scaling look */
    padding: 15px 0; /* Added padding for height */
  }
  
  .icon-Container svg {
    /* Set specific larger size for the arrow */
    width: 24px; 
    height: auto; 
    /* IMPORTANT: Removed transition-duration to prevent glitching */
  }

  .Btn-Container:hover .icon-Container svg {
    animation: arrow 1s linear infinite;
  }
  
  @keyframes arrow {
    0% {
      /* Increased distance because the box is wider now */
      transform: translateX(-180%);
    }
    100% {
      transform: translateX(180%);
    }
  }
`;

export default Button;