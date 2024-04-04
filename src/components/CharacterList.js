import React from 'react'
import { useQuery, gql } from '@apollo/client';
const Character_query = gql`
{
    characters{
        results{
          name
        }
      }
    }
`
const CharacterList = () => {
  const {data, loading, error} = useQuery(Character_query);
  if(loading) return "Loading";
  if(error) return <pre>{error.message}</pre>
  return (
    <div>
        <h1>Characters List</h1>
        <ul>
        {data.characters.results.map((result)=>(
            <li key={result.id} style={{display:"flex", alignItems:"center"}}><img src={result.image} style={{width:"50px", height:"50px", borderRadius:"50%", paddingRight:"15px", paddingBottom:"10px"}}/>{result.name}</li>
        ))}
        </ul>
    </div>
  )
}

export default CharacterList
