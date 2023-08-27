import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './ListNotes.css'

const ListNotes = () => {

  const {notes} = useSelector(state => state.notesReducer)

  return (
    <div className='container-content'>
        <h2>Voici vos notes</h2>
        <ul className='notes-list-card'>
          {notes.map(item => (
            <Link 
              to={{
                pathname: `/displayNote/${item.title}`
              }}
              key={item.id}
            >
              <li>
                <h2>{ item.title }</h2>
                <p>{  item.subtitle }</p>
              </li>
            </Link>
          ))}
        </ul>
    </div>
  )
}

export default ListNotes