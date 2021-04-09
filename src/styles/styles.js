import { makeStyles } from '@material-ui/core'


export const useStyles = makeStyles((theme) => ({

    root: {
        flexGrow: 1,
    },
    header: {
        marginBottom: "50px",
    },
    title: {
        textAlign: "center",
    },
    container: {
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            margin: theme.spacing(0),
        },
    },
    productos: {
        width: '50%',
    },
    carrito: {
        position: 'fixed',
        top: 0,
        right: 0,
        backgroundColor: 'white',
        width: '400px'
    },
    menuIcon: {
        width: 100,
        heigth: 100,
        color: '#fff'
    },
    buttonGmail: {
        backgroundColor: '#DB4A39',
        color: '#ffffff',
        '&:hover': {
            backgroundColor: '#DB4A39',
        },
        textTransform: 'none',
        fontSize: '18px',
        margin: theme.spacing(0, 0, 2, 0)
    },
    icons1: {
        width: '35px',
    },

})
)

export default useStyles;