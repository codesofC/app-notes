import { v4 as uuidv4 } from "uuid";

const INITIAL_STATE = {
    selectedNote:{
        title: '',
        subtitle: '',
        body: '',
        id: '',
        toggle: false
    }
}

export default function selectedReducer(state=INITIAL_STATE, action){
    switch(action.type){
        case 'VISUALIZENOTE': {
            return {
                selectedNote:{
                    ...action.payload,
                    toggle: true
                }
            }
        }
        case 'RESETNOTE':{
            return {
                selectedNote:{
                    title: '',
                    subtitle: '',
                    body: '',
                    id: '',
                    toggle: false
                }
            }
        }
    }
    return state
}