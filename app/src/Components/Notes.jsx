import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { getNote } from '../services/api';

import { Search } from './Search';




export const Notes = () => {

    const [notes, setNotes] = useState([]);


    useEffect(() => {
        const getAllNotes = async () => {
            const response = await getNote();
            setNotes(response.data.getNote);
        }

        getAllNotes();
    },[])

  return (
      <>
         <Search/>
          <Container>
             {
                 notes.map((note) => (
                   <div className='notes'>
                       <h1>{note.title}</h1>
                       <p>{note.description}</p>
                   </div>
                 ))
             }
          </Container>
      </>
  )
}

const Container = styled.div`
display: flex;
flex-wrap: wrap;
gap: 2rem;
align-items: center;
justify-content: center;

.notes{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: red;
    width: 300px;
    height: 300px;
    padding: 1rem;
    overflow: auto;
    &::-webkit-scrollbar{
        display: none;
    }
}

`;

