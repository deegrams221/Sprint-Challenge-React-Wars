import React from 'react';
import styled from "styled-components";

const StyledHeader = styled.header `
    display: flex;
    flex-direction: column;
    color: #443e3e;
    text-shadow: 1px 1px 5px #fff;
    margin: 10px auto;
    margin-bottom: 40px;
    width: 100%;
    border-bottom: 2px solid black;
`;

const StyledH1 = styled.h1 `
    padding: 0;
    margin 0 auto;
    font-size: 4rem;
`;

const StyledH2 = styled.h2 `
    padding: 0;
    margin 0 auto;
    font-size: 2.5rem;
`;

export default function Header () {
   return (
       <StyledHeader>
           <StyledH1>React Wars</StyledH1>
           <StyledH2>Character Data</StyledH2>
        </StyledHeader>
   )
}