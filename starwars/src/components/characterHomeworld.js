import React from "react";
import styled from "styled-components";

const StyledHomeworld = styled.h3 `
    font-size: 1rem;
    margin: 0.5rem auto;
`;

export default function CharacterHomeworld (props) {
    return (
        <StyledHomeworld>Homeworld: {props.homeworld}</StyledHomeworld>
    )
}