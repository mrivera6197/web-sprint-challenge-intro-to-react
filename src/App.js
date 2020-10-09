import React, { useState, useEffect } from 'react';
import Character from './components/Character'
// import CharacterDetails from './components/CharacterDetails'
import styled, { keyframes } from 'styled-components'
import axios from 'axios'
import './App.css';

const App = () => {

  const [characters, setCharacters] = useState([])
  const [characterId, setCharacterId] = useState(null)

  // const openDetails = id => {
  //   setCharacterId(id)
  // }

  // const closeDetails = () => {
  //   setCharacterId(null)
  // }

  useEffect (() => {
    axios.get('https://rickandmortyapi.com/api/character/?page=19')
    .then(res => {
      setCharacters(res.data.results)
    })
    .catch(err => {
      debugger
    })
  }, [])


  return (
    <div className="App">
      <h1 className='header'> Characters</h1>
      {
        characters.map(char => {
          return <Character key={char.id} info={char} />
        })
      }
    </div>
  );
}

export default App;
