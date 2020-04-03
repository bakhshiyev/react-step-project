import React from 'react';
import styled from 'styled-components';

export const Note = ({ note: { title, text, id, date, color} }) => {

    
    // let dateObj = new Date(date);
    // const day = dateObj.getDay();
    // const month = dateObj.getMonth();
    // const year = dateObj.getYear();

    return(
        <Component color={color}>
            <Header>
                <Title>{title}</Title>
                <Date>{date}</Date>
            </Header>
            <Text>{text}</Text>
        </Component>
    )
}

const Component = styled.div`
    background-color: ${p => p.color};
    padding: 10px;
    border-radius: 10px;
    color: white;
`

const Header = styled.div`
    padding: 5px 0;
    border-bottom: 1px solid white;

`
const Title = styled.div`
    font-size: 20px;
    font-weight: bold;

`

const Date = styled.div`
    font-size: 12px;
    font-weight: bold;
    margin-bottom: 20px;
`

const Text = styled.p`
    text-align: center;
`