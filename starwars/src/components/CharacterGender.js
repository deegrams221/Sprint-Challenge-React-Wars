import React from "react";
import styled from "styled-components";

const StyledGender = styled.h3 `
    font-size: 1.4rem;
    color: ${props => (props.gender === "male" ? "blue" : "green")};
`;

export default function CharacterGender (props) {
    return (
        <StyledGender>Gender: {props.gender}</StyledGender>
    )
}