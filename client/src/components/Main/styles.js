import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
    [theme.breakpoints.down('sm')]: {
        mainContainer: {
            flexDirection: "column-reverse"
        },
        heading: {
            fontSize: '2.75rem',
        }
    }
}));
