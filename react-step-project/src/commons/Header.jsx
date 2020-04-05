import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import images from '../styles/img';

import { GoPlus } from "react-icons/go";
import { FiBox } from "react-icons/fi";
import { FaStickyNote } from "react-icons/fa";


export const Header = () => {
    return(
        <Container>
            <Logo>
                <Image src={images.note} />
                NotesApp</Logo>
            <NavLinkContainer>
                <StyledNavLink exact to="/">
                    <FaStickyNote className="actual-logo" />Actual
                </StyledNavLink>
                <StyledNavLink to="/archive">
                    <FiBox className="actual-logo"/>Archive
                </StyledNavLink>
                <StyledNavLink to="/create">
                    <GoPlus className="actual-logo"/>Create
                </StyledNavLink>
            </NavLinkContainer>
        </Container>
    );
};

const Image = styled.img`
    width: 30px;
    height: 30px;
    color: white;
    margin-right: 20px;
`

const Container = styled.header`
    background: rgb(30,144,255);
    padding: 20px 50px;
    display: flex;
    margin-bottom: 50px;
    align-items: center;
`;

const Logo = styled.div`
    font-size: 30px;
    font-weight: bold;
    color: white;
`;

const NavLinkContainer = styled.div`
    margin-left: 350px;
    padding-top: 15px;
    padding-bottom: 9px;
    //padding: 15px 0;
    background-color: white;
    border-radius: 30px;
`;


const StyledNavLink = styled(NavLink)`
    color: black;
    text-decoration: none;
    margin: 0 15px;
    padding: 10px 25px;
    min-width: 150px;
    text-align: center;
    color: #777a72;
    background-color: white;
    border-radius: 30px;
    border: 2px solid transparent;
    transition: all 0.5s ease-out;
    font-weight: bold;
    

    span {
        margin-right: 10px;
    }

    &:hover{
        border-color: #777a72;
        color: rgb(0,191,255);
        box-shadow: 2px 5px 5px 0px rgba(0,0,0,0.74);
    }

    &.active{
        //border-color: #d32727;
        background-color: rgb(30,144,255);
        color: white;
    }

`;

