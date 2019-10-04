import React from 'react';
import Note from './Note';
import styled from 'styled-components';

const Notes = ({ notes }) => {
    let showNote = null;
    const noteList = notes.map((note) => <Note key={note} text={note} />);
    showNote = notes.length > 0 ? noteList : null
    return (
        <NotesContainer>
            <div className="row">{showNote}</div>
        </NotesContainer>
    );
};

export default Notes;

// Style Notes Component
const NotesContainer = styled.div`
    width: 100%;
    height: auto;
    margin: 12px 0;
`;