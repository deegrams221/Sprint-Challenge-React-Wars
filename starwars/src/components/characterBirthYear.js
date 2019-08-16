import React from "react";
import styled from "styled-components";

const StyledBirthYear = styled.h3 `
    font-size: 1.4rem;
    color: white;
`;

export default function CharacterBirthYear  (props) {
    return (
        <StyledBirthYear >Birth Year : {props.birthYear}</StyledBirthYear >
    )
}