import React, { useState } from 'react';
import { Container, Paper, TextField, Button } from '@material-ui/core';
import useStyles from './styles';

export default function TextGenerator() {
    const classes = useStyles();
    const [text, setText] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleClick = async (e) => {
        e.preventDefault();

        if (text.trim() === '') {
            setErrorMessage('Text cannot be empty.');
            return;
        }

        const textData = { text };
        try {
            const response = await fetch("http://localhost:8080/api/save", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(textData),
            });
            if (response.ok) {
                console.log("New Text added");
                setText('');
                setErrorMessage('');
            } else {
                console.error("Failed to add new text.");
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    };

    const handleTextChange = (e) => {
        setText(e.target.value);
        setErrorMessage('');
    };

    return (
        <Container>
            <Paper elevation={3} className={classes.paper}>
                <h1 style={{ color: "blue" }}><u>Add Text</u></h1>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField
                        id="outlined-basic"
                        label="Text Placeholder"
                        variant="outlined"
                        fullWidth
                        value={text}
                        onChange={handleTextChange}
                        error={!!errorMessage}
                        helperText={errorMessage}
                    />
                    <Button variant="contained" color="secondary" onClick={handleClick}>
                        Submit
                    </Button>
                </form>
            </Paper>
        </Container>
    );
}
