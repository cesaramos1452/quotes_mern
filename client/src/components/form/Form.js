import React, { useState } from 'react';
import { TextField, Typography, Button, Paper } from '@material-ui/core';
import useStyles from './styles.js';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { createPost } from '../../redux/actions/action-creators';
function Form() {
  const dispatch = useDispatch();

  const [postData, setPostData] = useState({
    quote: '',
    author: '',
    creator: '',
    selectedFile: '',
  });

  const classes = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createPost(postData));
  };

  const clear = () => {
    setPostData({ quote: '', author: '', creator: '', selectedFile: '' });
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete='off'
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}>
        <Typography variant='h6'>Create a Quote</Typography>

        <TextField
          name='creator'
          variant='outlined'
          label='Creator'
          fullWidth
          value
          value={postData.creator}
          onChange={(event) =>
            setPostData({ ...postData, creator: event.target.value })
          }
        />

        <TextField
          name='author'
          variant='outlined'
          label='Quote'
          fullWidth
          value
          value={postData.quote}
          onChange={(event) =>
            setPostData({ ...postData, quote: event.target.value })
          }
        />

        <TextField
          name='author'
          variant='outlined'
          label='Author'
          fullWidth
          value
          value={postData.author}
          onChange={(event) =>
            setPostData({ ...postData, author: event.target.value })
          }
        />

        <div className={classes.fileInput}>
          <FileBase
            multiple={false}
            type='file'
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>

        <Button
          className={classes.buttonSubmit}
          variant='contained'
          color='primary'
          size='large'
          type='submit'
          fullWidth
          value>
          Submit
        </Button>

        <Button
          onClick={clear}
          variant='contained'
          color='secondary'
          size='small'
          type='submit'
          fullWidth
          value>
          Clear
        </Button>
      </form>
    </Paper>
  );
}

export default Form;
