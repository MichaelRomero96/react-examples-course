import { Card, CardHeader, CardMedia, Grid, IconButton, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { dataBase } from '../../services/firebase/firebase'
//redux
import { useDispatch, useSelector } from 'react-redux';
import { add_products_action, delete_products_action, get_products_action } from '../../redux/actions/productsActions';
//icons
import CloseIcon from '@material-ui/icons/Close';



export default function FirebaseDemoRedux() {
    const dispatch = useDispatch();
    const { listOfProducts, productForm } = useSelector(state => state.products);
    console.log(listOfProducts);
    const [products, setProducts] = useState({
        productName: '',
        description: '',
        imgUrl: ''
    });
    const [users, setUsers] = useState([]);
    const [productList, setproductList] = useState([]);
    const [productRegistry, setProductRegistry] = useState(false);
    const [productDelete, setProductDelete] = useState(null);
    // captura datos mediante evento onChange
    const handleChange = e => {
        setProducts({
            ...products,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        dispatch(get_products_action())
    }, []);

    useEffect(() => {
        if (productDelete !== null) {
            handleDelete(productDelete)
        }
    }, [productDelete]);
    //registrar la data
    const handleSubmit = e => {
        e.preventDefault();
        console.log("Registring a product");
        setProductRegistry(true);
        dispatch(add_products_action(products));
        setProducts(productForm);
    }

    //eliminar Productos
    const handleDelete = async (id) => {
        console.log("delete a product")
        if (window.confirm("Are you sure you want to delete this product")) {
            dispatch(delete_products_action(id))
        }
    }
    return (
        <>
            <h1>
                Products
            </h1>
            <form
                onSubmit={handleSubmit}
            >
                <input
                    placeholder='Nombre de Producto'
                    type='text'
                    name='productName'
                    onChange={handleChange}
                    value={products.productName}

                />
                <input
                    placeholder='Descripción'
                    type='text'
                    name='description'
                    onChange={handleChange}
                    value={products.description}
                />
                <input
                    placeholder='Url de imagen'
                    type='text'
                    name='imgUrl'
                    onChange={handleChange}
                    value={products.imgUrl}
                />
                <button
                    type='submit'
                >
                    Registrar
                </button>
            </form>
            <div>
                <Grid container spacing={2}>
                    {listOfProducts.length ?
                        (listOfProducts.map(i => (
                            <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={i.id}>
                                <Card>
                                    <IconButton
                                        onClick={() => setProductDelete(i.id)}
                                    >
                                        <CloseIcon />
                                    </IconButton>
                                    <CardHeader
                                        title={
                                            <Typography>
                                                {i.productName}
                                            </Typography>}
                                        subheader={
                                            i.description
                                        }>
                                    </CardHeader>
                                    <CardMedia
                                        style={{
                                            height: 200,
                                            width: 300
                                        }}
                                        image={i.imgUrl} />
                                </Card>
                            </Grid>
                        )))
                        :
                        null
                    }
                </Grid>
            </div>
        </>
    )
}
