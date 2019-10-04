import React, { Component, Fragment } from 'react';
import Section from './Section';
import Header from './Header';
import NoteField from './NoteField';
import Notes from './Notes';
import { createGlobalStyle, ThemeProvider, css } from 'styled-components';

class KeepNoteApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "Vestibulum consequat gravida nulla consequat luctus."
            ],
            mode: false
        }
    }

    handleModeChange = () => {
        this.setState(() => ({ mode: !this.state.mode }))
    }

    handleNoteSubmit = (note) => {
        if (!note) {
            return 'Enter valid note to add item'
        }
        this.setState((prevState) => ({
            notes: prevState.notes.concat(note)
        }));
    };

    render() {
        const { notes, mode } = this.state;
        return (
            <ThemeProvider theme={{ color: '#657786', mode: mode }}>
                <Fragment>
                    <GlobalStyle mode={mode} />
                    <div className="container">
                        <Section col="col-md-6 offset-md-3">
                            <Header
                                mode={mode}
                                title="Keep Note App"
                                subTitle="Keep save your notes"
                                handleModeChange={this.handleModeChange}
                            />
                        </Section>
                        <Section col="col-md-8 offset-md-2">
                            <NoteField
                                handleNoteSubmit={this.handleNoteSubmit}
                            />
                        </Section>
                        <Section col="col-md-12">
                            <Notes
                                notes={notes}
                            />
                        </Section>
                    </div>
                </Fragment>
            </ThemeProvider>
        );
    }
};

export default KeepNoteApp;

// Global style
const GlobalStyle = createGlobalStyle`
    body {
        color: ${props => props.theme.color};
        font-weight: normal;
        font-size: 14px;
        font-family: 'Quicksand', sans-serif;
        background-color: #f5f8fa;

        ${props => props.mode && css`
            background-color: #15202a;
            color: ${props => props.theme.color};
        `}
    }
`;