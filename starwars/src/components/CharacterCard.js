import React from "react";
import styled from "styled-components";
import CharGender from "./CharacterGender.js";
import CharBirthYear from "./characterBirthYear";
import CharHomeworld from "./characterHomeworld";

const StyledCards = styled.div`
  width: 400px;
  margin: 20px auto;
  background: #7ba20a;
  border: 2px solid black;
`;
const StyledNames = styled.h3`
  font-weight: 700px;
`;

export default function CharacterCard(props) {
  //console.log("card: props: ", props);
  return (
    <StyledCards>
      <StyledNames>Name: {props.people.name}</StyledNames>
      <CharGender gender={props.people.gender} />
      <CharBirthYear birthyear={props.people.birth_year} />
      <CharHomeworld homeworld={props.people.homeworld} />
    </StyledCards>
  );
}