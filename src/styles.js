import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    paper: {
        padding: '50px 20px',
        width: 600,
        margin: '20px auto',
    },
}));

export default useStyles;