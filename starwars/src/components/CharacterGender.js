import React from "react";
import styled from "styled-components";

const StyledGender = styled.h3 `
    font-size: 1rem;
    margin: 0.5rem auto;
`;

export default function CharacterGender (props) {
    return (
        <StyledGender>Gender: {props.gender}</StyledGender>
    )
}