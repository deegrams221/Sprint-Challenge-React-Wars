import React from "react";
import styled from "styled-components";
import CharGender from "./CharacterGender.js";
import CharBirthYear from "./characterBirthYear";
import CharHomeworld from "./characterHomeworld";

const StyledCards = styled.div`
  width: 400px;
  margin: 10px auto;
  background: #fdf3e8;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  text-align: center;
`;
const StyledNames = styled.h3`
    font-size: 1.2rem;
    margin-top: 1rem;
    margin-bottom: 0;
`;

export default function CharacterCard(props) {
  //console.log("card: props: ", props);
  return (
    <StyledCards>
      <StyledNames>Name: {props.data.name}</StyledNames>
      <CharGender gender={props.data.gender} />
      <CharBirthYear birth_year={props.data.birth_year} />
      <CharHomeworld homeworld={props.data.homeworld} />
    </StyledCards>
  );
}