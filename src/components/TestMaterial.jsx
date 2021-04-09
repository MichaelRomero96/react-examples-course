import React, {useState} from 'react'
import {
    AppBar,
    Button,
    IconButton,
    Typography,
    Toolbar,
    Menu,
    MenuItem
} from '@material-ui/core';

import FbIcon from '@material-ui/icons/Facebook';
// Styles
import TestMaterialStyles from '../styles/TestMaterialStyles';


//Funcion del Appbar
export default function ButtonAppBar() {
    const classes = TestMaterialStyles();
    const [menu, setMenu] = useState(false)

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton 
                    edge="start" 
                    className={classes.menuButton} 
                    color="inherit" 
                    aria-label="menu"
                    onClick={() => setMenu(true)}>
                        <FbIcon className={classes.fbIcon} />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        News
            </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <Menu open={menu} onClose={() => setMenu(false)}>
                <MenuItem>
                    Ingresar con Facebook
                </MenuItem>
            </Menu>
        </div>
    );
}
