// Write your Character component here
import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import axios from 'axios'

const StyledCharacter = styled.div`

    .characterList {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        width: 60%;
        line-height: 1;
        font-size: 1.5rem;
    }

    .info {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    img {
        width: 30%;
        margin: 2%;
    }

    .details {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    button {
        font-family: 'Shadows Into Light', cursive;
        padding: 0.75%;
        margin: 1%;
        font-size: 1.6rem;
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
`
export default function Character (props) {
    const { info } = props 
    const [characterId, setCharacterId] = useState(null)
  
    // const openDetails () => {
    //     return (
    //         <div classname='details'>
    //         <img src={info.image}/>
    //         <p>gender: {info.gender}</p>
    //         <p>location {info.location.name}</p> 
    //         <p> species: {info.species}</p>
    //         <p> status: {info.status}</p>
    //     </div>
    //     )
    // }

    // const closeDetails = () => {
    // setCharacterId(null)
    // }

    return (
            <StyledCharacter className='characterList'>
                <div className="info">  
                    <button>{info.name} </button>
                </div>
                <div classname='details'>
                    <img src={info.image}/>
                    <p>gender: {info.gender}</p>
                    <p>location {info.location.name}</p> 
                    <p> species: {info.species}</p>
                    <p> status: {info.status}</p>
                </div>
            </StyledCharacter>
    )
}