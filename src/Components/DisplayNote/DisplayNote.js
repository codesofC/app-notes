import React from 'react'
import './DisplayNote.css'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const DisplayNote = () => {
    
    const { id } = useParams();
    const {notes} = useSelector(state => state.notesReducer)

    const indexNote = notes.findIndex(item => item.title === id);

  return (
    <div className='display-txt-zone'>
        <h2 className='title-display'>
            Votre note : {notes[indexNote] ? `${notes[indexNote].title}` : ""}
        </h2>
        <span className='subtitle-display'>
            {notes[indexNote] ? notes[indexNote].subtitle : ""}
        </span>
        <p className='txt-display'>    
            {notes[indexNote] ? notes[indexNote].body : ""}
        </p>
    </div>
  )
}

export default DisplayNote