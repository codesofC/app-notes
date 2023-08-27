import React, {useState, useRef, useEffect} from 'react'
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from 'react-redux';
import './MainArea.css'

const MainArea = () => {
  const [inpInfo, setInpInfo] = useState({
    title: '',
    subtitle: '',
    body: ''
  })
  const [inpModify, setInpModify] = useState({
    title: '',
    subtitle: '',
    body: ''
  })

  const [validation, setValidation] = useState(true);

  const inputs = useRef([]);

  const dispatch = useDispatch();

  const selected = useSelector(state=>state.selectedReducer.selectedNote)

  const addRef = e => {
    if(e && !inputs.current.includes(e)){
      inputs.current.push(e);
    }
  }

  useEffect(() => {
    setInpModify(selected)
  }, [selected])

  const updateInputs = e => {
    const actualInp = e.target.getAttribute('id');

    if(selected.toggle){
      const newObjectState = {...inpModify, [actualInp]: e.target.value}
      setInpModify(newObjectState);
    }else if(selected.toggle === false){
      const newObjectState = {...inpInfo, [actualInp]: e.target.value}
      setInpInfo(newObjectState);
    }
  }

  const addNote = e => {
    e.preventDefault();

    if(selected.toggle){
      if(inpModify.title.length < 1){
        setValidation(false)
        return;
      }
      setValidation(true)

      dispatch({
        type: 'UPDATENOTE',
        payload: inpModify
      })
      dispatch({
        type: 'RESETNOTE'
      })
      setInpModify({
        title: '',
        subtitle: '',
        body: '',
        id: ''
      })
    }else{
      
      if(inpInfo.title.length < 1){
        setValidation(false);
        return
      }
      setValidation(true)
  
      
      dispatch({
        type: 'ADDNOTE',
        payload: {
          ...inpInfo,
          id: uuidv4()
        }
      });
      setInpInfo({
        title: '',
        subtitle: '',
        body: ''
      })
    }

  }

 

  return (
    <div className='container-content'>
        <h2>Votre plume</h2>
        <form onSubmit={addNote}>
            <label htmlFor='title'>Le titre</label>
            <input 
              value={inpModify.toggle ? inpModify.title : inpInfo.title}
              onChange={updateInputs}
              type='text' 
              id='title' 
              ref={addRef} 
            />
            {
              !validation && (
                <span className='info-validation'>
                  Veuillez renseigner un titre
                </span>
              )
            }

            <label htmlFor='subtitle'>Sous-titre</label>
            <input  
              value={inpModify.toggle ? inpModify.subtitle : inpInfo.subtitle}
              onChange={updateInputs}
              type='text' 
              id='subtitle' 
              ref={addRef} 
            />
        
            <label htmlFor='body'>Votre texte</label>
            <textarea  
              value={inpModify.toggle ? inpModify.body : inpInfo.body}
              onChange={updateInputs}
              id='body'
              ref={addRef} 
              placeholder='Votre texte...'
            >     
            </textarea>

            <button>Enregister</button>
        </form>
    </div>
  )
}

export default MainArea