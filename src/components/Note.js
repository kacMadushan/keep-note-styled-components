import React from 'react';
import styled, { css } from 'styled-components';

const Note = ({ text }) => {
    return (
        <div className="col-md-3">
            <NoteItem>
                <TextNote>{text}</TextNote>
            </NoteItem>
        </div>
    );
};

export default Note;

// Style Note Component
const NoteItem = styled.div`
    padding: 15px;
    border-radius: 6px;
    border: 1px solid #e6ecf0;
    background-color: #ffffff;

    ${props => props.theme.mode && css`
        border: 1px solid #38444c;
        background-color: #182734;
    `}
`;

const TextNote = styled.p`
    color: #13171a;
    font-weight: 500;
    font-size: 13px;
    margin-bottom: 0;

    ${props => props.theme.mode && css`
        color: #f4f5f6;
    `}
`;