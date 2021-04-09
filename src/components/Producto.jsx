import React, { useEffect } from 'react'
import Card from '@material-ui/core/Card';
import { makeStyles, Grid, CardActionArea, CardContent, Typography, CardActions, Button } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({

    cardContainer: {
        // height: 465,
        [theme.breakpoints.down('xs')]: {
            margin: theme.spacing(0, 0, 3, 0),
        },
        '&:hover': {
            boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
        },
    },
    mainCard: {
        margin: '20px'
    },
    media: {
        // width:'100%',
        // width: '70%',
        // height: '200x',
        paddingTop: '56.25%', // 16:9
        cursor: 'pointer',
    },
}
))

const Producto = ({ producto, carrito, setCarrito, almacenProductos }) => {
    const classes = useStyles();
    const { nombre, precio, id, imagen } = producto

    function isReact(shirt) {
        return shirt.id === 1;
    }

    // agregar producto al carrito
    const seleccionarProducto = id => {

        const producto = almacenProductos.filter(producto => producto.id === id)[0];
        setCarrito([
            ...carrito,
            producto
        ]);
        console.log(carrito)
        console.log(producto)
    }

    // useEffect(() => {
    //     console.info(carrito.indexOf(1))
    // }, [carrito])

    useEffect(() => {
        const isshirt = carrito.indexOf("camisa ReactJS")
        console.log(isshirt)
    }, [carrito])

    // useEffect(() => {
    //     for (let i_2 = 0; i_2 < carrito.length; i_2++) {
    //         if (carrito[i_2].id === 2) {
    //             console.log("se encuentra objeto!.");
    //             break;
    //         }
    //     }
    // }, [carrito])


    // 1  estado anterior --sobreescribe
    // 2

    //eliminar producto del carrito
    const eliminarProducto = id => {
        const productos = carrito.filter(producto => producto.id !== id);
        // colocar productos state
        setCarrito(almacenProductos)
    }

    return (
        <>
            <Card className={classes.cardContainer}>
                <CardActionArea>
                    <CardMedia
                        // component="img"
                        alt="Shirts Store"
                        key={id}
                        // className={classes.media}
                        image={`${imagen}`}
                        title="Shirt"
                        className={classes.media}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {nombre}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {`${precio} dólares`}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    {/* {nombre ? <h1>dato ok</h1> : null} */}
                    {almacenProductos
                        ?
                        (
                            <Button color='secondary' size="small" onClick={() => seleccionarProducto(id)}>
                                Comprar
                            </Button>
                        )
                        :
                        (
                            <Button color='primary' size="small" onClick={() => eliminarProducto(id)}>
                                Eliminar
                            </Button>
                        )
                    }
                </CardActions>
            </Card>
        </>
    )
}

export default Producto