import React, { useContext } from 'react';
import styled from 'styled-components';

import { Row } from '../../commons';
import { Note } from '../../components';
import { NotesContext } from '../../context/notes';

export const Archive = () => {

    const notes = useContext(NotesContext);

    return(
        <Container >
            <Row>
                {notes
                    .filter(note => note.archiveStatus === true)
                    .map(note => (
                    <Note note={note} key={note.id} />
                ))}
            </Row>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    width: 1500px;
`;