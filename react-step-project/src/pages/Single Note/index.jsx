import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';

import { MdClose, MdDeleteForever, MdUnarchive } from "react-icons/md";
import { IoMdArchive } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";

import { NotesContext } from '../../context/notes';
import { ModalWindow } from '../../components';
import { getNotes } from '../../API/fetchFabric';

export const SingleNote = ({ history: { push }, match: { params: { id } } }) => {

    const [modalStatus, setModalStatus] = useState(false);
    const toggleModal = () => setModalStatus(v => !v);
    const modalClose = () => setModalStatus(false);

    const [editModalStatus, setEditModalStatus] = useState(false);
    const togggleEditModal = () => setEditModalStatus(v => !v);
    const modalEditClose = () => setEditModalStatus(false);

    const  notes  = useContext(NotesContext);
    const note = notes.find(item => item.id == +id);
    console.log(note);

    const addToArchive = async (id) => {
        try {
          const res = await fetch(`http://localhost:3006/notes/${id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ archiveStatus: true })
          });
          const answer = await res.json();
          getNotes();
          console.log(answer);

        } catch (error) {
          console.log(error);
        }
    };

    const addToUnArchive = async (id) => {
        try {
          const res = await fetch(`http://localhost:3006/notes/${id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ archiveStatus: false })
          });
          const answer = await res.json();
          getNotes();
          console.log(answer);

        } catch (error) {
          console.log(error);
        }
    };


    const deleteNote = async id => {
        try {
            const res = await fetch(`http://localhost:3006/notes/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            const answer = await res.json();
            getNotes();
            console.log(answer);

            } catch (error) {
            console.log(error);
        }
    };

    const deleteHandler = () => {
        deleteNote(id);
        push('/');
    }

    return(
        <Container>
            {note &&  (  
                <Component color={note.color}>
                    <Header>
                        <Title>{note.title}</Title>
                        <Date>{new  window.Date(note.date).getDate()}/
                            {new  window.Date(note.date).getMonth() + 1}/
                            {new  window.Date(note.date).getFullYear()}
                        </Date>
                        {note.archiveStatus ?
                            <CloseButton onClick={() => push('/archive')}><MdClose/></CloseButton>
                            :
                            <CloseButton onClick={() => push('/')}><MdClose/></CloseButton>
                        }
                    </Header>
                    <Text>{note.text}</Text>
                </Component>
            )}
            
            {note && (
                <ButtonsContainer>
                    <FunctionalButton onClick={() => { push(`/edit/${id}`)}}>
                        <FaRegEdit className="edit-icon"/>Edit
                    </FunctionalButton>

                    {note.archiveStatus ? (
                        <FunctionalButton onClick={() => addToUnArchive(id)} >
                            <MdUnarchive  className="archive-icon" />Unarchive
                        </FunctionalButton>
                        ) : (
                        <FunctionalButton onClick={() => addToArchive(id)}>
                            <IoMdArchive className="archive-icon" /> Archive
                        </FunctionalButton>
                        )
                    }


                    <FunctionalButton onClick={toggleModal}>
                        <MdDeleteForever className="delete-icon" />Delete
                    </FunctionalButton>
                </ButtonsContainer>
            )}   
            
            {modalStatus ? 
                <div onClick={modalClose} className="back-drop"></div> 
                : 
                null 
            }

            {modalStatus && (
                <ModalWindow
                    closing={modalClose}
                    header='Do you want to delete this note?'
                    closeIcon={true}
                    close={toggleModal}
                    actions={[
                        <CancelButton onClick={toggleModal}>Cancel</CancelButton>,
                        <YesButton onClick={deleteHandler}>Yes</YesButton>
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
    cursor: pointer;
    margin-bottom: 50px;
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
    padding: 12px 25px;
    border: 1px solid transparent;
    border-radius: 8px;
    cursor: pointer;
    background-color: rgb(0,191,255);
    color: white;

    &:hover {
        box-shadow: 2px 5px 5px 0px rgba(0,0,0,0.74);
        border: 2px solid #777a72;
    }
`;

const CancelButton = styled.button`
    text-transform: uppercase;
    padding: 15px 25px;
    margin-right: 70px;
    color: white;
    font-size: 15px;
    background-color: #007600;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;


const YesButton = styled.button`
    text-transform: uppercase;
    padding: 15px 25px;
    color: white;
    font-size: 15px;
    background-color: red;
    border: none;
    border-radius: 5px;
    min-width: 100px;
    cursor: pointer;
`;