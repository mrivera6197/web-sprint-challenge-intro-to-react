// Write your Character component here
import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import axios from 'axios'

const StyledCharacter = styled.div`
    .details {
        font-size: 2.0rem;
        height: 50rem;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #00cc00;
        font-weight: bold;
    }
    .container {
        background-color: white;
        padding: 20%;
        box-shadow: 4px 4px 8px #751aff;
    }
    
`
export default function Character (props) {
    const { character, characters } = props
    const [details, setDetails] = useState([])

    useEffect(() => {
        characters.forEach(char => {
            if (char.id === character) {
                setDetails(char)
            }
        }, )
    }, [character])

    return (
            <StyledCharacter className='characterList'>
                <div className='details'>
                    <div className='container'>
                        <img src={details.image}/>
                        <p>gender: {details.gender}</p>
                        <p> species: {details.species}</p>
                        <p> status: {details.status}</p>
                    </div>
                </div>
            </StyledCharacter>
    )
}