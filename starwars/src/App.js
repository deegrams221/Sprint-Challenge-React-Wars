import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import Styled from "styled-components";
import Header from "./components/Header";
import CharacterCard from "./components/CharacterCard";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

    const[name, setName] = useState("");
    const[homeworld, setHomeworld] = useState("");
    const[species, setSpecies] = useState("");
    const[films, setFilms] = useState("");

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

    useEffect(() => {
      axios
        .get(``)
        .then(response => {
          const charName = response.data.name;
          setName(charName);

          const charHomeworld = response.data.homeworld;
          setHomeworld(charHomeworld);

          const charSpecies = response.data.species;
          setSpecies(charSpecies);
          
          const charFilms = response.data.films;
          setFilms(charFilms);
        })
        .catch(error => {
          console.log(`API currently down: `, error);
        })
    }, [])

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Header  />
      <CharacterCard charName = {name} charHomeworld = {homeworld} charSpecies = {species} charFilms = {films} />
    </div>
  );
}

export default App;
