import axios from 'axios';

const API_URL = "http://localhost:5000";

export const addNote = async (data) => {
    try{
        return await axios.post(`${API_URL}/add_note`, data)
    } catch(err){
        console.log(err.message);
    }
}