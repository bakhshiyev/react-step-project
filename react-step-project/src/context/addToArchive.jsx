// import React, { useReducer, createContext } from 'react';

// export const AddToArchiveContext = createContext();

// const initialState = { notes: [ ]};

// function noteReducer(state, { type, payload }) {
//     switch(type) {
//         case 'add_to_archive':
//             return { notes: [...state.notes, payload] }

//         default:
//             return state;
//     }
// }

// export const AddToArchiveProvider = ({children}) => {

//     const [state, dispatch] = useReducer(noteReducer, initialState)
//     const addToArchive = note => {
//         dispatch({
//             type: 'add_to_archive',
//             payLoad: {...note, id} 
//         })
//     }

//     return(
//         <AddToArchive.Provider value={...state, addToArchive}>
//             {children}
//         </AddToArchive.Provider>
//     );
// };