import React from "react";
import styled from "styled-components";

const Dropdown = () => {
  return (
    <StyledWrapper>
      <div className="tooltip-wrapper ">
        <ul className="tooltip-container">
          <li style={{ animationDelay: "1.1s" }} className="nav-link">
            <div className="tooltip-tab">
             
             Category
            </div>
            <div className="tooltip">
              <ul className="tooltip-menu-with-icon">
                <li className="tooltip-link">
                  <a className="tooltip-links" href="#">
                    <svg
                      aria-hidden="true"
                      role="img"
                      height={16}
                      width={16}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="m4.6.7 1.6 1.7c.6.6.7 1.6 0 2.2C5 6.1 5 6.4 7.2 8.7c2.4 2.4 2.7 2.4 4.2 1 .6-.5 1.6-.5 2.2 0l1.7 1.7v.1c.6.5.6 1.5 0 2.1v.1c-1.4 1.4-2.5 2-3.8 2h-.7c-1.6-.3-3.4-1.6-6.1-4.4C-.5 6.1-1 4 2.3.7 2.9.1 3.9.1 4.6.7m-1.2.4c-.2 0-.4.1-.5.3C.1 4 .5 5.9 5.3 10.7s6.6 5.2 9.3 2.4l.2.1-.2-.1c.3-.3.3-.7.1-1L13 10.4a.7.7 0 0 0-1 0c-1.9 1.8-2.7 1.6-5.3-1C4 6.6 3.8 5.8 5.6 4c.3-.3.3-.7 0-1L3.9 1.3a.7.7 0 0 0-.5-.2"
                        fillRule="evenodd"
                        fill="#FFF"
                      />
                    </svg>
                    000-000-1111
                  </a>
                </li>
                <li className="tooltip-link">
                  <a className="tooltip-links" href="#">
                    <svg
                      aria-hidden="true"
                      role="img"
                      viewBox="0 0 13.971 13.971"
                      height={16}
                      width={16}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs />
                      <g id="support-clock_svg__clock">
                        <path
                          className="support-clock_svg__support-clock-cls-1"
                          d="M6.985 13.97a6.985 6.985 0 1 1 6.986-6.985 6.993 6.993 0 0 1-6.986 6.986zm0-13.47a6.485 6.485 0 1 0 6.486 6.485A6.493 6.493 0 0 0 6.985.5"
                        />
                        <path
                          className="support-clock_svg__support-clock-cls-1"
                          d="M11.1 7.235H6.986a.25.25 0 0 1-.25-.25V1.972a.25.25 0 1 1 .5 0v4.763h3.866a.25.25 0 0 1 0 .5z"
                        />
                      </g>
                    </svg>
                    8:30AM - 5PM PST
                  </a>
                </li>
                <li className="tooltip-link">
                  <a className="tooltip-links" href="#">
                    <svg
                      aria-hidden="true"
                      role="img"
                      viewBox="0 0 18.2 13.342"
                      height={16}
                      width={16}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        style={{ fill: "#fff" }}
                        d="M17.9 0H.3a.3.3 0 0 0-.3.3v12.742a.3.3 0 0 0 .3.3h17.6a.3.3 0 0 0 .3-.3V.3a.3.3 0 0 0-.3-.3M.85.5h16.554L9.101 6.364Zm6.983 5.576 1.124.799a.25.25 0 0 0 .29 0l1.527-1.08-.133.13 6.719 6.917H.956ZM.5 12.59V.867l6.918 4.915Zm10.533-6.978L17.7.902v11.574ZM.539.5.5.554V.5Z"
                      />
                    </svg>
                    uiverse.io
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .tooltip-wrapper {
    --clr-btn: rgb(2 22 36);
    --clr-dropdown: rgb(2 22 36);
    --clr-nav-hover: rgb(2 22 36);
    --clr-dropdown-hov: rgb(2 22 36);
    --clr-dropdown-link-hov: rgb(2 22 36);
    --clr-light: #ffffff;
  }
  .nav-link {
    position: relative;
  }
  .tooltip-wrapper > .tooltip-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .tooltip-container,
  .tooltip-menu-with-icon {
    list-style: none;
  }
  .nav-link > .tooltip-tab {
    color: var(--clr-light);
    background: var(--clr-btn);
    padding: 0.8rem 1rem;
    letter-spacing: 1px;
    font-size: 0.75rem;
    display: flex;
    align-items: center;
    column-gap: 12px;
    justify-content: space-between;
    text-transform: uppercase;
    cursor: pointer;
    border: 1px solid #00c1d5;
    transition: 0.3s ease-in-out;
  }
  .nav-link > .tooltip-tab:hover svg {
    transform: rotate(360deg);
    transition: 0.3s ease-in-out;
  }
  .tooltip-links {
    text-decoration: none;
  }
  .nav-link svg {
    fill: #fff;
  }
  .tooltip {
    position: absolute;
    top: 100%;
    left: 0;
    min-width: 12rem;
    max-width: 15rem;
    transform: translateY(10px);
    opacity: 0;
    pointer-events: none;
    transition: 0.5s;
    padding: 15px 0px 0px 0px;
  }
  .tooltip::after {
    content: "";
    width: 15px;
    height: 15px;
    background: #00c1d5 no-repeat -30px -50px fixed;
    top: 0px;
    left: 6%;
    position: absolute;
    display: inline-block;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    transform: rotate(360deg);
    z-index: -1;
    box-shadow: 0px 6px 30px rgb(2 22 36);
  }
  .tooltip .tooltip-menu-with-icon {
    padding: 10px 0px;
    background-color: var(--clr-dropdown);
    border: 1px solid #00c1d5;
    position: relative;
  }
  .tooltip-link {
    position: relative;
  }
  .tooltip-link:not(:nth-last-child(2)) {
    border-bottom: 1px solid var(--clr-dropdown);
  }
  .tooltip-link > a {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    column-gap: 10px;
    background-color: var(--clr-dropdown);
    color: var(--clr-light);
    padding: 0.5rem 1rem;
    font-size: 0.75rem;
    transition: 0.3s;
  }
  .tooltip-menu-with-icon svg {
    height: 20px;
    margin-left: 0px;
  }
  .nav-link:hover > .tooltip-tab {
    transform: scale(1.1);
  }
  .nav-link:hover > .tooltip,
  .tooltip-link:hover > .tooltip {
    transform: translate(0, 0);
    opacity: 1;
    pointer-events: auto;
    -webkit-transform: translate(0, 0);
    -moz-transform: translate(0, 0);
    -ms-transform: translate(0, 0);
    -o-transform: translate(0, 0);
  }
  .nav-link:hover > .tooltip-tab {
    transform: scale(1);
    background-color: var(--clr-nav-hover);
  }
`;

export default Dropdown;
