import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({

  root: {
      marginTop: theme.spacing(14),
      marginBottom : theme.spacing(20)

  },

  paper: {
    marginTop: theme.spacing(10),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding : '10vh 20vh 10vh 20vh'
  },
  avatar: {
    margin: theme.spacing(3),
    backgroundColor: theme.palette.primary.main,
    marginLeft : '16vh',
  },
  form: {
    width: '40vh', // Fix IE 11 issue.
    marginTop: theme.spacing(5),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));