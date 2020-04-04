import React, { useContext, useState } from 'react';
import styled from 'styled-components';

import { MdClose } from "react-icons/md";
import { NotesContext } from '../../context/notes';
import { ModalWindow, Note } from '../../components';
import { NoteCreation } from "../../components";

export const SingleNote = ({ history: { push }, match: { params: { id } } }) => {

    const [modalStatus, setModalStatus] = useState(false);
    const toggleModal = () => setModalStatus(v => !v);
    const modalClose = () => setModalStatus(false);

    const notes = useContext(NotesContext);
    const note = notes.find(item => item.id == +id);
    console.log(note);

    const [editStatus, setEditStatus] = useState(false);

    const handleClick = () => {
        setEditStatus(!editStatus);
    }

    // const dateObj = new Date(note.date);
    //     const day = dateObj.getDay();
    //     const month = dateObj.getMonth();
    //     const year = dateObj.getYear();

    return (
        <Container>
            {note && (
                <Component color={note.color}>
                    <Header>
                        <Title>{note.title}</Title>
                        <Date>{note.date}</Date>
                        <CloseButton onClick={() => push('/')}><MdClose /></CloseButton>
                    </Header>
                    <Text>{note.text}</Text>
                </Component>
            )}

            <ButtonsContainer>
                <FunctionalButton onClick={handleClick}>Edit</FunctionalButton>
                {editStatus && (<NoteCreation btnText="Save"/>)}
                <FunctionalButton>Archive</FunctionalButton>
                <FunctionalButton onClick={toggleModal}>Delete</FunctionalButton>
            </ButtonsContainer>

            {modalStatus ?
                <div onClick={modalClose} className="back-drop"></div>
                :
                null}

            {modalStatus && (
                <ModalWindow
                    //show={firstModalStatus}
                    closing={modalClose}
                    header='Do you want to delete this note?'
                    closeIcon={true}
                    close={toggleModal}
                    actions={[
                        <CancelButton onClick={toggleModal}>Cancel</CancelButton>,
                        <YesButton>Yes</YesButton>
                    ]}
                />
            )}

        </Container>
    );
};

const Container = styled.div`
    display: flex;
    margin-top: 100px;
    margin-left: 100px;
`;

const Component = styled.div`
    display: inline-block;
    background-color: ${p => p.color};
    margin-left: 17px;
    padding: 20px;
    width: 750px;
    border-radius: 10px;
    color: white;
`;

const Header = styled.div`
    display: flex;
    padding: 5px 0;
    border-bottom: 1px solid white;
    justify-content: space-between;
`;

const Title = styled.div`
    font-size: 35px;
    font-weight: bold;
`;

const Date = styled.div`
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 20px;
`;

const Text = styled.p`
    text-align: center;
    font-size: 25px;
    padding: 5px;
`;

const CloseButton = styled.button`
    display: flex;
    width: 35px;
    height: 35px;
    background: red;
    color: white;
    border: none;
    top: -15px;
    right: -15px;
    font-size: 25px;
    border: 1px solid black;
`;

const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 50px;
`;

const FunctionalButton = styled.button`
    margin-bottom: 30px;
    font-size: 25px;
    text-transform: uppercase;
    padding: 12px 40px;
    border: 1px solid black;
    border-radius: 8px;
`;

const CancelButton = styled.button`
    text-transform: uppercase;
    padding: 15px 25px;
    margin-right: 70px;
    color: white;
    font-size: 15px;
    background-color: green;
    border: none;
    border-radius: 5px;
    //min-width: 200px;
`;


const YesButton = styled.button`
    text-transform: uppercase;
    padding: 15px 25px;
    color: white;
    font-size: 15px;
    background-color: rgba(0,0,0,0.2);
    border: none;
    border-radius: 5px;
    min-width: 100px;
`;