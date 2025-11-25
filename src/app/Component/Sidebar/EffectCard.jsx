import React from 'react';
import styled from 'styled-components';

const EffectCard = () => {
  return (
    <StyledWrapper>
      <div className="card m-5 mt-18 shadow-lg mx-auto">
        <div className="card__border" />
        <div className="card_title__container">
          <span className="text-3xl font-serif">Anime 1.O</span>
          <p className="font-sans text-2xl ">20$</p>
        </div>
        <hr className="line" />
        <ul className="card__list">
          {[
            "Ad-Free Experience",
            "Early Access to New Episodes",
            "HD/4K Streaming",
            "Offline Viewing",
            "Access to Exclusive Content",
            "Customizable Subtitles",
            "Multiple Device Support",
            "No Queue Wait Time",
            "Anime Library Expansion",
            "Exclusive Anime Events/Content",
            "Custom Playlists",
          ].map((item, index) => (
            <li className="card__list_item" key={index}>
              <span className="check">
                <svg
                  className="check_svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                    fillRule="evenodd"
                  />
                </svg>
              </span>
              <span className="list_text">{item}</span>
            </li>
          ))}
        </ul>
        <button className="button font-serif">Purchase</button>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    --white: hsl(0, 0%, 100%);
    --black: hsl(240, 15%, 9%);
    --paragraph: hsl(0, 0%, 83%);
    --line: hsl(240, 9%, 17%);
    --primary: hsl(189, 92%, 58%);

    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    width: 22rem;
    background-color: hsla(240, 15%, 9%, 1);
    background-image: radial-gradient(
        at 88% 40%,
        hsla(240, 15%, 9%, 1) 0px,
        transparent 85%
      ),
      radial-gradient(at 49% 30%, hsla(240, 15%, 9%, 1) 0px, transparent 85%),
      radial-gradient(at 14% 26%, hsla(240, 15%, 9%, 1) 0px, transparent 85%),
      radial-gradient(at 0% 64%, hsl(189, 99%, 26%) 0px, transparent 85%),
      radial-gradient(at 41% 94%, hsl(189, 97%, 36%) 0px, transparent 85%),
      radial-gradient(at 100% 99%, hsl(188, 94%, 13%) 0px, transparent 85%);

    border-radius: 1rem;
    box-shadow: 0px -16px 24px 0px rgba(255, 255, 255, 0.25) inset;

    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-10px);
      animation: hoverMove 0.3s ease-in-out forwards;
    }
  }

  .card__border {
    position: absolute;
    z-index: -10;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: calc(100% + 2px);
    height: calc(100% + 2px);
    background-image: linear-gradient(
      0deg,
      hsl(0, 0%, 100%) -50%,
      hsl(0, 0%, 40%) 100%
    );
    border-radius: 1rem;
    animation: rotate 8s linear infinite;
  }

  @keyframes rotate {
    to {
      transform: rotate(360deg);
    }
  }

  .card__list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .card__list .card__list_item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    opacity: 0;
    animation: slideIn 0.5s ease-out forwards;
  }

  .card__list .card__list_item:nth-child(even) {
    animation-delay: 0.3s;
  }

  .card__list .card__list_item:nth-child(odd) {
    animation-delay: 0.6s;
  }

  .card__list .card__list_item .check {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1rem;
    height: 1rem;
    background-color: var(--primary);
    border-radius: 50%;
  }

  .card__list .card__list_item .check .check_svg {
    width: 0.75rem;
    height: 0.75rem;
    fill: var(--black);
  }

  .card__list .card__list_item .list_text {
    font-size: 0.75rem;
    color: var(--white);
  }

  .button {
    cursor: pointer;
    padding: 0.5rem;
    width: 100%;
    background-image: linear-gradient(
      0deg,
      hsl(189, 92%, 58%),
      hsl(189, 99%, 26%) 100%
    );
    font-size: 0.75rem;
    color: var(--white);
    border: 0;
    border-radius: 9999px;
    box-shadow: inset 0 -2px 25px -4px var(--white);
  }

  @keyframes slideIn {
    from {
      transform: translateX(-20px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes hoverMove {
    0% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

export default EffectCard;
