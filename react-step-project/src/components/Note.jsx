import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Note = ({ note: { title, text, id, date, color} }) => {

    //console.log(date);

    const dateObject = new window.Date(date);
    let day = dateObject.getDate();
    let month = dateObject.getMonth() + 1;
    let year = dateObject.getFullYear();

    if(day < 10 || month < 10){
        day = '0' + String(day);
        month = '0' + String(month);
    }

    return(
        <StyledLink to={`/single-note/${id}`}>
            <Component color={color}>
                <Header>
                    <Title>{title}</Title>
                    <Date>{day}/{month}/{year}</Date>
                </Header>
                <Text>{text}</Text>
            </Component>
        </StyledLink>
    );
};

const StyledLink = styled(Link)`
    
`;

const Component = styled.div`
    display: inline-block;
    background-color: ${p => p.color};
    margin-left: 17px;
    padding: 20px;
    width: 300px;
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
    font-size: 20px;
    font-weight: bold;
`;

const Date = styled.div`
    font-size: 12px;
    font-weight: bold;
    margin-bottom: 20px;
`;

const Text = styled.p`
    text-align: center;
    font-size: 13px;
    padding: 5px;
`;