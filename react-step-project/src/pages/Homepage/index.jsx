import React, { useContext } from 'react';
import styled from 'styled-components';

import { Row } from '../../commons';
import { Note } from '../../components';
import { NotesContext } from '../../context/notes';

export const Homepage = () => {

    const  {notes}  = useContext(NotesContext);

    return(
        <Container>
            <h1>Homepage</h1>
            <Row>
                {notes.map(note => (
                    <Note note={note} key={note.id} />
                ))}
            </Row>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    justify-content: center;
`