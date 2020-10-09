// import React, { useState, useEffect } from 'react'
// import Character from './Character'
// import axios from 'axios'

// export default function CharacterDetails (props) {
//     const { characterId, close } = props 
//     const [ details, setDetails ] = useState(null)

//     useEffect(() => {
//         axios.get(`https://rickandmortyapi.com/api/character/?page=19`)
//         .then(res => { 
//             setDetails(res.data.results)
//         })
//         .catch(err => {
//             debugger
//         })
//     },[characterId])
    

//     return (
//         <div> 
//             <h2>Details</h2>
//         </div>
//     )
// }