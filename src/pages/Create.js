import React, { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import { makeStyles } from '@mui/styles';
import { TextField, Container, Button, Typography } from '@mui/material';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  fiel: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block'
  }
});

export default function Create() {
  const classes = useStyles();
  const history = useHistory();
  const [ClassName, setClassName] = useState('');
  const [Section, setSection] = useState('');
  const [subject, setSubject] = useState('');
  const [room, setRoom] = useState('');
  const [ClassNameError, setClassNameError] = useState(false);
  const [SectionError, setSectionError] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setClassNameError(false);
    setSectionError(false);

    if (ClassName === '') {
      setClassNameError(true);
    }
    if (Section === '') {
      setSectionError(true);
    }
    if (ClassName && Section) {
      fetch('http://localhost:5000/classes', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ ClassName, Section, subject, room })
      }).then(() => history.push('/'));
    }
  };

  return (
    <Container size="sm">
      <Typography variant="h6" color="textSecondary" component="h2" gutterBottom>
        Create a New Class
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setClassName(e.target.value)}
          label="Class name"
          variant="outlined"
          color="secondary"
          fullWidth
          margin="normal"
          required
          error={ClassNameError}
        />
        <TextField
          onChange={(e) => setSection(e.target.value)}
          label="Section"
          variant="outlined"
          color="secondary"
          fullWidth
          margin="normal"
          required
          error={SectionError}
        />
        <TextField
          onChange={(e) => setSubject(e.target.value)}
          label="Subject"
          variant="outlined"
          color="secondary"
          multiline
          rows={4}
          fullWidth
          margin="normal"
        />
        <TextField
          onChange={(e) => setRoom(e.target.value)}
          label="Room"
          variant="outlined"
          color="secondary"
          fullWidth
          margin="normal"
        />

        <div className={classes.fiel}>
          <Button type="submit" color="secondary" variant="contained" startIcon={<SendIcon />}>
            Submit
          </Button>
        </div>
      </form>
    </Container>
  );
}
