import React from "react";
import styled from "styled-components";

const StyledBirthYear = styled.h3 `
    font-size: 1rem;
    margin: 0.5rem auto;
`;

export default function CharacterBirthYear (props) {
    return (
        <StyledBirthYear>Birth Year: {props.birth_year}</StyledBirthYear>
    )
}