import React, { Component } from 'react';
import ErrorMsg from './ErrorMsg';
import styled, { css } from 'styled-components';

class NoteField extends Component {
    state = {
        note: '',
        error: undefined
    }

    handleOnChange = (e) => {
        const note = e.target.value;
        this.setState(({ note }));
    };

    handleOnSubmit = (e) => {
        e.preventDefault();
        const note = this.state.note;
        const error = this.props.handleNoteSubmit(note);

        this.setState(() => ({ error }));

        if (!error) {
            this.setState(() => ({ note: '' }))
        }
    };

    render() {
        const { note, error } = this.state;
        return (
            <Form onSubmit={this.handleOnSubmit}>
                <div className="form-group">
                    <Input
                        type="text"
                        className="form-control"
                        placeholder="Take a note..."
                        value={note}
                        onChange={this.handleOnChange}
                    />
                    {error && <ErrorMsg msg={error} />}
                </div>
            </Form>
        );
    }
};

export default NoteField;

// Style NoteField Component

const Form = styled.form`
    display: block;
    width: 100%;
    height: auto;
`;

const Input = styled.input`
    height: 48px;
    border-color: #e6ecf0;

    ${props => props.theme.mode && css`
        color: #f4f5f6;
        border: 1px solid #38444c;
        background-color: #182734;

        &:focus {
            color: #f4f5f6;
            border: 1px solid #38444c;
            background-color: #182734;
        }
    `}
`;