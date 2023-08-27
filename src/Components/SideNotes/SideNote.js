import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import Note from './Note/Note'
import './SideNotes.css'

const SideNote = () => {

    const {notes} = useSelector(state => state.notesReducer);
    const [notesList, setNotesList] = useState(notes); 
    
    useEffect(()=>{
        setNotesList(notes)
    }, [notes]);

    const handleFilter = e => {
        const stateCopy = [...notes];
        const filterNewArr = stateCopy.filter(item => (
            item.title.toLowerCase().includes(e.target.value.toLowerCase())
        ))
        setNotesList(filterNewArr)
    }

  return (
    <div className='notes-display'>
        <h2>Mes notes</h2>
        <form onSubmit={e => e.preventDefault()}>
            <input type='text' id='search-notes' 
                placeholder='Rechercher' onChange={handleFilter} />
        </form>
        <ul className='notes-list'>
            {notesList.map(item => (
                <Note
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    subtitle={item.subtitle}
                    body={item.body}
                />
            ))

            }
        </ul>
    </div>
  )
}

export default SideNote