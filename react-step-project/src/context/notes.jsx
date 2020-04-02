import React, { useState, createContext, useEffect } from 'react';

import { getNotes } from '../API/fetchFabric';

export const NotesContext = createContext();

export const NoteContextProvider = ({children}) => {

    const [notes, setNotes] = useState([]);

    useEffect(() => {
        (async () => {
            const answer = await getNotes();
            setNotes(answer);
        })();
    }, []);


    return(
        <NotesContext.Provider value={notes}>
            {children}
        </NotesContext.Provider>
    );
};
