import React from "react";
import styled from "styled-components";

const StyledHomeworld = styled.h3 `
    font-size: 1.4rem;
    color: white;
`;

export default function CharacterHomeworld  (props) {
    return (
        <StyledHomeworld >Homeworld : {props.homeworld}</StyledHomeworld >
    )
}