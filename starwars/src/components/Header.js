import React from 'react';
import styled from "styled-components";

const StyledHeader = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #443e3e;
    text-shadow: 1px 1px 5px #fff;
    font-size: calc(10px + 2vmin);
`;

export default function Header () {
   return (
       <StyledHeader>React Wars</StyledHeader>
   )
}