import React, { useState, useEffect } from 'react';
import { TextField, Typography, Button, Paper } from '@material-ui/core';
import useStyles from './styles.js';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../redux/actions/action-creators';
function Form({ currentId, setCurrentId }) {
  const dispatch = useDispatch();
  const quote = useSelector((state) =>
    currentId ? state.quotes.find((p) => p._id === currentId) : null
  );

  const [postData, setPostData] = useState({
    quote: '',
    author: '',
    creator: '',
    selectedFile: '',
  });

  useEffect(() => {
    if (quote) {
      setPostData(quote);
    }
  }, [quote]);

  const classes = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (currentId) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
    }
    clear();
  };

  const clear = () => {
    setCurrentId(null)
    setPostData({
      quote: '',
      author: '',
      creator: '',
      selectedFile: '',
    });
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
          label='Name'
          fullWidth
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
          fullWidth>
          Submit
        </Button>

        <Button
          onClick={clear}
          variant='contained'
          color='secondary'
          size='small'
          type='submit'
          fullWidth>
          Clear
        </Button>
      </form>
    </Paper>
  );
}

export default Form;
