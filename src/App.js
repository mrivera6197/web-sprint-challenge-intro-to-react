import React, { useState, useEffect } from 'react';
import Character from './components/Character'
import styled, { keyframes } from 'styled-components'
import axios from 'axios'
import './App.css';

const App = () => {

  const [characters, setCharacters] = useState([])
  const [currentCharacter, setCurrentCharacter] = useState(null)

  useEffect (() => {
    axios.get('https://rickandmortyapi.com/api/character/?page=19')
    .then(res => {
      setCharacters(res.data.results)
    })
    .catch(err => {
      debugger
    })
  }, [])

  const openDetails = id => {
    setCurrentCharacter(id)
  }

  const closeDetails = () => {
    setCurrentCharacter(null)
  }

  const StyledCharacters = styled.div`
    .names {
      font-family: 'Shadows Into Light', cursive;
        padding: 2%;
        margin: 1%;
        font-size: 2rem;
        font-weight: bold;
        color: #00cc00;
        background-color: white;
        box-shadow: 0 4px 8px #751aff;
        &:hover {
            transform: scale(1.2);
            transition: all 0.3s ease-in-out;
        }
        transition: all 0.3s ease-in-out;
    }

    .bodyContainer {
      display: flex; 
      justify-content: center;
    }

    .leftContainer, .rightContainer {
      margin: 5%;
    }

  `

  const Characters = (props) => (
    <div className='names'> 
      {props.info.name}
      <button onClick={() => 
        props.info.id === currentCharacter
          ? closeDetails() : openDetails(props.info.id)
      }>
        {props.info.id === currentCharacter ? '' : '+'}

      </button>
    </div>
  )


  return (
    <div className="App">
      <h1 className='header'> Characters</h1>

      <StyledCharacters>
        <div className='bodyContainer'>
          <div className='leftContainer'>
          {
              characters.map(char => {
                return <Characters key={char.id} info={char} />
              })
            }
          </div>
          <div className='rightContainer'>
          {
              currentCharacter && (
                <Character character={currentCharacter} characters={characters} />
              )
            }
          </div>
        </div>
      </StyledCharacters>
    </div>
  );
}

export default App;
