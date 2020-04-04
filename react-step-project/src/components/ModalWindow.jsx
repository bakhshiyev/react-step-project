import React from 'react';
import styled from 'styled-components';

import { MdClose } from "react-icons/md";

 export const ModalWindow = ({header, closeIcon, actions, text, close}, props) => {

    return(
        <ModalContainer>
            <Header>
                {header}
                {closeIcon  &&  
                    <CloseButton onClick={close}>
                        <MdClose/>
                    </CloseButton>
                }
            </Header>
            <ModalText>Once you delete this note, it won't be possible to undo this
                <br/><br/>action. Are you sure you want do delete it?
            </ModalText>
            {actions}
        </ModalContainer>
    );
};

const ModalContainer = styled.div`
    height: 300px; 
    width: 520px;
    top: 50%;
    left: 50%;
    margin: -131px 0 0 -258px;   
    border-radius: 5px; 
    position: absolute;
    background-color: #E74C3C;
    text-align: center;
`;

const Header = styled.header`
    background-color: red;
    justify-content: space-between;
    display: flex;
    padding: 20px 20px 20px;
    background-color: #D44637;
    color: white;
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 30px;
    border-radius: 5px;
`;

const ModalText = styled.p`
    justify-content: center;
    align-items: center;
    text-align: center;
    display: flex;
    color: white;
    margin-bottom: 30px;
    font-size: 18px;
    line-height: 20px;
    font-weight: 600;
`;

const CloseButton = styled.button`
    background-color: #D44637;
    color: white;
    border: none;
    cursor: pointer;
    color: white;
    font-size: 30px;
`;