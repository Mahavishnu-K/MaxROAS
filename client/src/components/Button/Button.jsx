import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Button = ({text = "Start Scaling Now", shadowStatus = false, invert = false, navigateTo = true }) => {
  const navigate = useNavigate();
  
  // Determine dot color based on invert state
  const dotColor = invert ? "#ffffff" : "#000000";

  const handleClick = () => {
    if (navigateTo) {
     
      window.scrollTo({ top: 0, left: 0, behavior: "instant" }); 
      
      navigate('/contact');
    }
  };

  return (
    <StyledWrapper shadowStatus={shadowStatus} invert={invert}>
      <button onClick={handleClick} className="Btn-Container">
        <span className="text">{text}</span>
        <span className="icon-Container">
          <svg viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="1.61321" cy="1.61321" r="1.5" fill={dotColor} />
            <circle cx="5.73583" cy="1.61321" r="1.5" fill={dotColor} />
            <circle cx="5.73583" cy="5.5566" r="1.5" fill={dotColor} />
            <circle cx="9.85851" cy="5.5566" r="1.5" fill={dotColor} />
            <circle cx="9.85851" cy="9.5" r="1.5" fill={dotColor} />
            <circle cx="13.9811" cy="9.5" r="1.5" fill={dotColor} />
            <circle cx="5.73583" cy="13.4434" r="1.5" fill={dotColor} />
            <circle cx="9.85851" cy="13.4434" r="1.5" fill={dotColor} />
            <circle cx="1.61321" cy="17.3868" r="1.5" fill={dotColor} />
            <circle cx="5.73583" cy="17.3868" r="1.5" fill={dotColor} />
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
    /* Logic: Invert = White BG, Default = Black BG */
    background-color: ${({ invert }) => (invert ? "#ffffff" : "#000000")};
    box-shadow: ${({ shadowStatus }) =>
      shadowStatus ? "0px 5px 10px #bebebe" : "none"};
    justify-content: space-between;
    align-items: center;
    border: none;
    cursor: pointer;
    /* Optional: Add a border if inverted so it shows up on white backgrounds */
    border: ${({ invert }) => (invert ? "1px solid #000000" : "none")};
  }
  
  .Btn-Container:hover {
    scale: 1.05;
    transition: 0.5s;
    transform: 0.3s;
  }
  
  .icon-Container {
    width: 60px;
    height: 60px;
    /* Logic: Invert = Black Box, Default = White Box */
    background-color: ${({ invert }) => (invert ? "#000000" : "#ffffff")};
    display: flex;
    align-items: center;
    margin-right: 1px;
    justify-content: center;
    /* Logic: Border matches the main background color */
    border: 3px solid ${({ invert }) => (invert ? "#ffffff" : "#1d2129")};
    overflow: hidden;
    /* Removed border-radius to make it a SQUARE */
    border-radius: 0; 
  }
  
  .text {
    width: 220px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    /* Logic: Invert = Black Text, Default = White Text */
    color: ${({ invert }) => (invert ? "#000000" : "#ffffff")};
    font-size: 1.2em;
    letter-spacing: 1.2px;
    font-weight: 600;
    padding: 15px 0;
  }
  
  .icon-Container svg {
    width: 24px; 
    height: auto; 
    animation: arrow 1s linear infinite;
  }
  
  @keyframes arrow {
    0% {
      transform: translateX(-180%);
    }
    100% {
      transform: translateX(180%);
    }
  }

  @media (max-width: 768px) {
    .text {
      width: 150px;
      font-size: 0.8em;
    }
    .icon-Container svg {
      width: 18px; 
    }
    .icon-Container {
      width: 50px;
      height: 50px;
    }
  }

  @media(max-height:600px) {
    .text {
      width: 180px;
      font-size: 1em;
    }
    .icon-Container svg {
      width: 22px; 
    }
    .icon-Container {
      width: 56px;
      height: 56px;
    }
  }
`;

export default Button;