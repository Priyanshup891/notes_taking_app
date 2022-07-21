import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { editNote, getIdNote } from '../services/api'
import { useNavigate, useParams } from 'react-router-dom'

export const EditNote = () => {

  const navigate = useNavigate();
  const {id} = useParams(); 
  const [notes, setNotes] = useState({
      title:"",
      description:"",
  })

  useEffect(() => {
    const noteData = async () => {
      const response = await getIdNote(id);
      console.log(response.data.getIdNote[0]);
      setNotes(response.data.getIdNote[0])
    }
    noteData();
  },[])

  


    const handleChange = (e) => {
        setNotes({...notes, [e.target.name]: e.target.value})
        console.log(notes);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
       await editNote(notes, id);
       navigate('/')
    }

  return (
    <AddNoteContainer>
        <form onSubmit={(event) => handleSubmit(event)}>
            <input type="text" placeholder='Title' name='title' onChange={(e) => handleChange(e)} value={notes.title} />
            <textarea name="description" placeholder='Description' onChange={(e) => handleChange(e)} value={notes.description}/>
            <button type='submit'>edit note</button>
        </form>
    </AddNoteContainer>
  )
}


const AddNoteContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 100vh;
width: 100vw;
background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5));

form{
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    width: 100%;
    max-width: 500px;
    height: 600px;
    padding: 1rem;
    gap: 0.5rem;
    border-radius: 1rem;

    input{
        display: flex;
        flex: 10%;
        border: none;
        font-size: 1.4rem;
        font-weight: bold;
        &:focus{
            border: none;
            outline: none;
        }
    }
    textarea{
        display: flex;
        flex: 80%;
        border: none;
        font-size: 1rem;
        &:focus{
            border: none;
            outline: none;
        }
    }
    button{
        display: flex;
        flex: 10%;
        align-items: center;
        justify-content: center;
        border: none;
        background-color: #596e58;
        color: #ffffff;
        border-radius: 0.4rem;
        font-size: 1rem;
        font-weight: bold;
        text-transform: uppercase;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        &:hover{
            opacity: 0.8;
        }
    }
}
`;