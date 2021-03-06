import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import Header from "./components/Header";
import CharacterCard from "./components/CharacterCard";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

    const[charactersState, setCharactersState] = useState([]);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

    useEffect(() => {
      axios
        .get(`https://swapi.co/api/people`)
        .then(response => {
          const charactersState = response.data.results;
          console.log(charactersState);
          setCharactersState(charactersState);
        })
        .catch(error => {
          console.log(`API currently down: `, error);
        })
    }, [])

    return (
      <div className="App">
        <Header />
        {charactersState.map(data => {
          return ( 
            <CharacterCard key = {data.props} data = {data} /> 
          );
        })}
      </div>
    );
}

export default App;
