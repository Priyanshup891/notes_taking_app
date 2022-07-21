import React from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";


export const Search = ({setSearch}) => {

  const handleChange = (e) => {
    setSearch(e.target.value);

  }

  return (
    <NavBar>
        <div className="searchBar">
      <BiSearch size={30} color="#596e58" />
      <input type="text" placeholder="Serach notes ..." onChange={(e) => handleChange(e)} />
        </div>
        <Link to='/add_note'>Add Note</Link>
    </NavBar>
  );
};

const NavBar = styled.nav`

display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;

    .searchBar{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;

        input{
        padding: 0.5rem;
        width: 30rem;
        border: 0.1rem solid #738b72;
        border-radius: 0.4rem;
        font-size: 1rem;
    }
    }

    a{
        text-decoration: none;
        background-color: #475747;
        color: #fff;
        padding: 0.5rem 1rem;
        font-size: 1rem;
        font-weight: bold;
        text-transform: uppercase;
        border-radius: 0.4rem;
    }

   `;
