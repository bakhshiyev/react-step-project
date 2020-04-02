import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { Icons } from './Icons';

import images from "../styles/img";

export const Header = () => {
    return(
        <Container>
            <Logo>NotesApp</Logo>
            <div>
                <StyledNavLink exact to="/">Actual</StyledNavLink>
                <StyledNavLink to="/archive">
                <Icons src={images.box} alt="archive icon" />
                    Archive
                </StyledNavLink>
                <StyledNavLink to="/create">
                    <Icons src={images.plus} alt="create icon" />
                    Create
                </StyledNavLink>
            </div>
        </Container>
    );
};


const Container = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid black;
    padding: 10px 30px; 

`;

const Logo = styled.p`
    font-size: 35px;
    font-weight: bold;
    margin: 30px 50px; 

`;

const StyledNavLink = styled(NavLink)`
    color: black;
    text-decoration: none;
    margin: 0 15px;
    padding: 10px 15px;
    min-width: 150px;
    text-align: center;
    background-color: white;
    border-radius: 20px;
    border: 2px solid transparent;
    transition: all 0.3s ease-out;

    span {
        margin-right: 10px;
    }

    &.active{
        border-color: #d32727;
    }

`;