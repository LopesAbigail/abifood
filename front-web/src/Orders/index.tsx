import { useEffect, useState } from 'react';
import { fetchProducts } from '../api';
import OrderLocation from './OrderLocation';
import ProductsList from './ProductsList';
import StepsHeader from './StepsHeader';
import './styles.css';
import { OrderLocationData, Product } from './types';

function Orders(){

    //Inicializando pedido com lista de produtos vazia
    const [products, setProducts] = useState<Product[]>([]);
    const[orderLocation, setOrderLocatio] = useState<OrderLocationData>()

    useEffect(() => {
        fetchProducts()
        //Quando a requisição for realizada com sucesso
        //response.data é a lista de produtos
        .then(response => setProducts(response.data))
        //Quando algum erro ocorrer
        .catch(error => console.log(error));
    }, []);

    return(
        <div className="orders-container">
            <StepsHeader/>
            <ProductsList products={ products }/>
            <OrderLocation onChangeLocation={location => setOrderLocatio(location)} />
        </div>
    )
}

export default Orders;