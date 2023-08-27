import React from 'react'
import './Note.css'
import delIcon from './remove.svg'
import editIcon from './edit.svg'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'


const Note = (props) => {

    const dispatch = useDispatch();

    const deleteNote = () => {
        dispatch({
            type: 'DELETENOTE',
            payload: props.id
        })
    }
    const modifyNote = () => {
        dispatch({
            type: 'VISUALIZENOTE',
            payload: props
        })
    }

  return (
    <li className='txt-note-prev'>
        <Link
            to={{
                pathname: `/displayNote/${props.title}`
            }}
        >
            <div className='bloc-note-left'>
                <p>{props.title}</p>
                <p>{props.subtitle}</p>
            </div>
        </Link>
        <div className='bloc-note-right'>
            <button onClick={deleteNote}>
                <img src={delIcon} alt='Delete Icon' />
            </button>
            <Link to='/edit'>
                <button onClick={modifyNote}>
                    <img src={editIcon} alt='Edit Icon' />
                </button>
            </Link>
        </div>
    </li>
  )
}

export default Note