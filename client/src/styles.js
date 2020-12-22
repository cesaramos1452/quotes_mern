import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  image: {
    marginRight: 15,
    borderRadius: 50,
  },
  heading: {
    color: 'white',
    fontFamily: 'cursive',
  },
}));
