import { useEffect, useState } from "react";
import ChardCard from './CharCard';

const resultsUrl = 'https://rickandmortyapi.com/api/character';

export default function ListChar(){
    const [chars, setChars] = useState([]);

    useEffect(() =>{
        const getChars = async() => {
            const response = await fetch(resultsUrl);
            const data = await response.json();
            console.log("ladata:", data)
            setChars(data.results);
        }
        getChars();
    },[]);

    return (
       <div style={{display:'flex', flexWrap:'wrap'}}>
       {chars.map(char=>(<ChardCard
       id={char.id}
       name={char.name}
       image={char.image}/>))}
       </div> 
    )
}