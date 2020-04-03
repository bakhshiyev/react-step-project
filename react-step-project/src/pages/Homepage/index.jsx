import React, { useContext } from 'react';
import { Route, Link } from 'react-router-dom';
import styled from 'styled-components';

import { Row } from '../../commons';
import { Note } from '../../components';
import { NotesContext } from '../../context/notes';

import { SingleNote } from '../Single Note';

export const Homepage = ({ id }) => {

    const  notes  = useContext(NotesContext);

    return(
        <Container to={`/single-note/${id}`}>
            <Row>
                {notes.map(note => (
                    <Note note={note} key={note.id} />
                ))}
            </Row>
            <Route path="/single-note/:id" component={SingleNote} />
        </Container>
    );
};

const Container = styled(Link)`
    display: flex;
`;

