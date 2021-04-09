
import React, { useState } from 'react';
import { AppBar, IconButton, Toolbar, Typography, Grid } from '@material-ui/core/';

//components
import Producto from './Producto'
import Carrito from './Carrito'

//styles
// import { makeStyles } from '@material-ui/core'
// import TestMaterial from './components/TestMaterial';
import CarritoStyles from '../styles/CarritoStyles';

//icons
import MenuIcon from '@material-ui/icons/Menu';



export default function CarritoCompras() {


  const classes = CarritoStyles();
  //Crear listado de productos
  const [almacenProductos, guardarProductos] = useState([
    { id: 1, nombre: 'Camisa ReactJS', precio: 50, imagen: "https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C619tV%2B-6foL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX425._SX._UX._SY._UY_.png" },
    { id: 2, nombre: 'Camisa VueJS', precio: 40, imagen: "https://cdn-images.threadless.com/threadless-media/artist_shops/shops/vue/products/195803/shirt-1490421379-02ee987be67c75475b5b71a704b54987.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJ0cmltc2NyaXB0IiwgWzEyNzAuNTcxNDI4NTcxNDI4NCwgMTUwOC44NTcxNDI4NTcxNDI3XSwge31dLCBbImVuY29kZSIsIFsiLnBuZyJdLCB7ImRwaSI6IDMwMH1dLCBbInJlc2l6ZSIsIFs4NThdLCB7fV0sIFsib3ZlcmxheSIsIFsidGhyZWFkbGVzcy1tZWRpYS9hcnRpc3Rfc2hvcHMvb3ZlcmxheXMvY2F0ZWdvcmllcy9tZW5zL3NpemVzLyovc3R5bGVzL3RyaWJsZW5kLXRlZS9jb2xvcnMvKi9mcm9udC5wbmciXSwgeyJ5IjogNDcwLCAieCI6IDU1OSwgImJhY2tncm91bmQiOiAiN2M3YzdjIn1dLCBbInJlc2l6ZSIsIFs4MDBdLCB7fV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzgwMCwgODAwLCAiI2ZmZmZmZiJdLCB7fV0sIFsiZW5jb2RlIiwgWyJqcGciLCA4NV0sIHt9XV19" },
    { id: 3, nombre: 'Camisa Node.js', precio: 30, imagen: "https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C512D2nlpkGL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UL1500_.png" },
    { id: 4, nombre: 'Camisa Angular', precio: 20, imagen: "https://m.media-amazon.com/images/I/91IM87eeuCL._CLa%7C2140%2C2000%7C71O70ESgldL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UL1500_.png" },
  ]);

  // carrito de compras
  const [carrito, setCarrito] = useState([])

  return (
    <>
      <div className={classes.root}>
        <div className={classes.header}>
          <AppBar position="fixed">
            <Toolbar>
              <div className={classes.menuIcon}>
                <MenuIcon />
              </div>
              <Typography variant="h4" className={classes.title}>
                Tienda React
            </Typography>
            </Toolbar>
          </AppBar>
        </div>
        <Grid container>
          <Grid item xl={8} xs={12}>
            <h1 className={classes.title}>Listado de productos</h1>
            <Grid container justify="center" spacing={5}>
              {almacenProductos.map(producto => (
                <Grid item xs={12} sm={6} md={6} lg={4} xl={6}>
                  <Producto
                    key={producto.id}
                    almacenProductos={almacenProductos}
                    producto={producto}
                    carrito={carrito}
                    setCarrito={setCarrito}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xl={4}>
            <Carrito
              carrito={carrito}
              setCarrito={setCarrito} />
          </Grid>
        </Grid>
      </div>
    </>
  );
}
