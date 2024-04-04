import { useMutation, useQuery, gql } from '@apollo/client';
import React,{useState} from 'react';
const GET_DATA = gql`{
    characters{
        results{
          name
        }
    }
}`
const CREATE_CHAR = gql`
  mutation createChar($name: String!) {
    createChar(name: $name) {
        characters{
            results{
                name
            }
        }
    }
  }
`;

const CharacterForm = () => {
    const {loading, error, data} = useQuery(GET_DATA);
    const [createChar, {data: createCharData, loading: createCharLoading, error: createCharError}] = useMutation(CREATE_CHAR);
    const [name, setName] = useState('');
    const [file, setFile] = useState('');
    const handleChange=(e)=>{
        setFile(URL.createObjectURL(e.target.files[0]))
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        createChar({variables: {name: name}})
        setName("");
    }
  return (
    <form style={{display: "flex", flexDirection:"column"}} onSubmit={handleSubmit}>
        <label htmlFor='name' style={{margin: "10px"}}>Name</label>
        <input type='text' id="name" placeholder='your Name' onChange={(e)=>setName(e.target.value)}></input>
        <label htmlFor='image' style={{margin: "10px"}}>Upload image</label>
        <input type='file' id='image' accept="image/png, image/jpeg" onChange={(e)=>handleChange(e)}></input>
        <button>Submit</button>
    </form>
  )
}

export default CharacterForm;
