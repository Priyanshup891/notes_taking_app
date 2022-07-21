import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Notes } from './Components/Notes';
import { AddNote } from './Components/AddNote';
import { EditNote } from './Components/EditNote';

export const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Notes/>}/>
      <Route path='/add_note' element={<AddNote/>}/>
      <Route path='/edit_note/:id' element={<EditNote/>}/>
    </Routes>
    </BrowserRouter>
  )
}
