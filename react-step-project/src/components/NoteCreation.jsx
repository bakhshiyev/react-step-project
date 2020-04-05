import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export const NoteCreation = ({ initial = {} }) => {
  const [notes, setNotes] = useState([]);

  const [fields, setFields] = useState({
    title: "",
    text: "",
    color: "#d32727",
    archiveStatus: false,
    date: Date.now(),
    ...initial
  });

  const onChange = e => {
    const { name, value } = e.target;
    setFields(field => ({
      ...field,
      [name]: value
    }));
  };

  const onSubmit = e => {
    e.preventDefault();
    createNote(fields);
  }

  const getNotes = async () => {
    try {
      const res = await fetch("http://localhost:3006/notes");
      const data = await res.json();

      setNotes(data);
    } catch (error) {
      console.log(error);
    }
  };

  const createNote = async ({ title, text, color, archiveStatus, date }) => {
    try {
      const res = await fetch("http://localhost:3006/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ title, text, color, archiveStatus, date })
      });
      const answer = await res.json();
      console.log(answer);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => { getNotes(); }, []);

  return (
    <div>
      <Form onSubmit={onSubmit}>
        <Input
          placeholder="note heading"
          type="text"
          name='title'
          value={fields.title}
          onChange={onChange}
        />
        <Textarea
          placeholder="note context"
          type="text"
          name='text'
          value={fields.text}
          onChange={onChange}
        />

        <ColorOptions>
          <h4>Color: </h4>
          <ColorOption color="#d32727">
            <input
              type="radio"
              name="color"
              value="#d32727"
              checked={fields.color === "#d32727"}
              onChange={onChange}
            />
            <span></span>
          </ColorOption>
          <ColorOption color="#3a2c84">
            <input
              type="radio"
              name="color"
              value="#3a2c84"
              checked={fields.color === "#3a2c84"}
              onChange={onChange}
            />
            <span></span>
          </ColorOption>
          <ColorOption color="#ef8e0b">
            <input
              type="radio"
              name="color"
              value="#ef8e0b"
              checked={fields.color === "#ef8e0b"}
              onChange={onChange}
            />
            <span></span>
          </ColorOption>
          <ColorOption color="#516f55">
            <input
              type="radio"
              name="color"
              value="#516f55"
              checked={fields.color === "#516f55"}
              onChange={onChange}
            />
            <span></span>
          </ColorOption>
        </ColorOptions>
        <Button>Create Note</Button>
      </Form>
    </div>
  );
}

const Form = styled.form`
  border: 2px solid #494d9e;
  background-color: #c3c5c1;
  border-radius: 15px;
  max-width: 300px;
  margin: 30px auto;
  padding: 20px 20px;
`;

const Input = styled.input`
  margin:0 auto;
  background-color: transparent;
  color: #494d9e;
  font-weight: bold;
  display: block;
  border: 2px solid #494d9e;
  transition: all 0.3s ease;
  width: 80%;
  padding: 10px 10px;
  border-radius: 15px;

  &:focus {
    border-color: #d3347d;
    color: #d3347d;
    outline: none;
  }
`;

const Textarea = styled.textarea`
  border-radius: 15px;
  display: block;
  background-color: transparent;
  color: #494d9e;
  padding: 10px 10px;
  font-weight: bold;
  border: 2px solid #494d9e;
  height: 100px;
  width: 80%;
  margin: 20px auto;
  resize: none;

  &:focus {
    border-color: #d3347d;
    color: #d3347d;
    outline: none;
  }
`;

const Button = styled.button`
  text-transform: uppercase;
  font-weight: bold;
  background-color: #d32727;
  color: white;
  border: none;
  height: 40px;
  width: 100%;
  border-radius: 15px;
  margin: 0 auto;
`;

const ColorOptions = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  h4 {
    margin: 0 25px 0 0;
  }
`;

const ColorOption = styled.label`
  input {
    display: none;
  }

  span {
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 20%;
    margin: 0 10px;
    background-color: ${p => p.color};
    border: 4px solid transparent;
    cursor: pointer;
  }

  input:checked + span {
    border-color: white;
  }
`;