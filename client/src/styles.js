import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 20,
        border: 'solid 3px rgba(255, 255, 255, 0.3)',
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'rgba(255, 255, 255, 0,15)'
        // 'background-color': 'rgba(255, 255, 255, 0.4)',
        // 'box-shadow': 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
    },
    heading: {
        color: 'rgba(92, 9, 186, 1)',
    },
    image: {
        marginLeft: '15px',
    },
    [theme.breakpoints.down('sm')]: {
        mainContainer: {
            flexDirection: "column-reverse"
        },
        heading: {
            fontSize: '2.75rem',
        }
    }
})); 
