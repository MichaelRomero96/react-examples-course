import { makeStyles } from '@material-ui/core'


export const TestMaterialStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        color: '#f00',
    },
    fbIcon: {
        color: '#63c132',
    }
})
)

export default TestMaterialStyles;