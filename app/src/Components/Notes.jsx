import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getNote } from "../services/api";
import { TbEdit } from "react-icons/tb";
import { AiFillDelete } from "react-icons/ai";
import { Search } from "./Search";
import { Link } from "react-router-dom";


export const Notes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const getAllNotes = async () => {
      const response = await getNote();
      setNotes(response.data.getNote);
    };

    getAllNotes();
  }, []);

  return (
    <>
      <Search />
      <Container>
        {notes.map((note) => (
          <div className="notes">
            <div className="icons">
              <Link to={`/edit_note/${note._id}`} style={{display:"flex"}}><TbEdit size={20} color="#475747" cursor="pointer"  /></Link>
              <AiFillDelete size={20} color="#475747" cursor="pointer" />
            </div>
            <h1>{note.title}</h1>
            <p>{note.description}</p>
          </div>
        ))}
      </Container>

    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 2rem;
  padding-bottom: 4rem;

  .notes {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: rgb(205, 228, 204);
    border-radius: 1rem;
    -webkit-box-shadow: -1px 12px 32px -4px rgba(0, 0, 0, 0.24);
    -moz-box-shadow: -1px 12px 32px -4px rgba(0, 0, 0, 0.24);
    box-shadow: -1px 12px 32px -4px rgba(0, 0, 0, 0.24);
    width: 340px;
    height: auto;
    padding: 1rem;
    overflow: auto;
    &::-webkit-scrollbar {
      display: none;
    }

    h1 {
      font-size: 2rem;
      font-family: "Edu NSW ACT Foundation", cursive;
      font-style: normal;
      color: #2b2b2b;
      font-weight: bold;
      border-bottom: 0.1rem solid #adadad;
      width: 100%;
      padding-bottom: 0.5rem;
    }

    p {
      font-size: 1.2rem;
      margin-top: 0.5rem;
      font-style: normal;
      font-weight: 500;
      color: #333333;
      font-family: "Edu NSW ACT Foundation", cursive;
    }

    .icons {
      display: flex;
      flex-direction: row;
      width: 100%;
      align-items: flex-end;
      justify-content: end;
      gap: 0.7rem;
    }
  }
`;


