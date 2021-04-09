import React from 'react'
import { makeStyles, Grid, List, ListItem } from '@material-ui/core'
import Producto from './Producto'

const useStyles = makeStyles(() => ({

    product: {
        width: 400,
        height: 200
    },
    title: {
        textAlign: 'center',
    }
}))


const Carrito = ({ carrito, setCarrito }) => {
    const classes = useStyles();
    console.log(carrito)

    return (
        <Grid container justify='center'>
            <Grid item xl={12}>
                <h2 className={classes.title}>Tu carrito de compras</h2>
                {carrito.length === 0
                    ? <h4 className={classes.title}>No hay elementos en el carrito</h4>
                    : carrito.map(producto => (
                        <Grid container justify="center">
                            <List>
                                <ListItem>
                                    {producto.nombre}
                                </ListItem>

                            </List>
                        </Grid >


                    ))
                }
            </Grid >
        </Grid >
    )
}

export default Carrito;