import { useEffect, useState } from 'react';
import { fetchProducts, saveOrder } from '../api';
import Footer from '../Footer';
import { checkIsSelected } from './helpers';
import OrderLocation from './OrderLocation';
import OrderSummary from './OrderSummary';
import ProductsList from './ProductsList';
import StepsHeader from './StepsHeader';
import { toast } from 'react-toastify';
import { OrderLocationData, Product } from './types';
import './styles.css';

function Orders(){

    //Inicializando pedido com lista de produtos vazia
    const [products, setProducts] = useState<Product[]>([]);
    const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
    const[orderLocation, setOrderLocatio] = useState<OrderLocationData>();
    const totalPrice = selectedProducts.reduce((sum, item) => {
        return sum + item.price;
    }, 0)

    useEffect(() => {
        fetchProducts()
        //Quando a requisição for realizada com sucesso
        //response.data é a lista de produtos
        .then(response => setProducts(response.data))
        //Quando algum erro ocorrer
        //.catch(error => console.log(error));
        .catch(() => {
            toast.warning('An error has occurred while loading the products :(');
        })
    }, []);

    const handleSelectProduct = (product: Product) => {
        // some: verifica se pelo menos 1 item está selecionado
        const isAlreadySelected = checkIsSelected(selectedProducts, product);
      
        if (isAlreadySelected) {
            const selected = selectedProducts.filter(item => item.id !== product.id);
            setSelectedProducts(selected);
        } else {
            setSelectedProducts(previous => [...previous, product]);
        }
    }
    
    const handleSubmit = () => {
        //Iterando sobre a lista de produtos selecionados
        //e extraindo a propriedade Id de cada produto
        const productsIds = selectedProducts.map(({ id }) => ({ id }));
        //Concatenando tudo o que já exite no OrderLocation com os produtos selecionados
        const payload = {
          ...orderLocation!,
          products: productsIds
        }
      
        //toast eh um balãozinho para informar o status do pedido
        saveOrder(payload).then((response) => {
            toast.error(`Your request has been successfully completed ;) Nº ${response.data.id}`);
            setSelectedProducts([]);
        })
        .catch(() => {
            toast.warning('Sorry, an error has occurred :(');
        })
    }

    return(
        <>
            <div className="orders-container">
                <StepsHeader/>
                <ProductsList 
                    products={products}
                    onSelectProduct={handleSelectProduct}
                    selectedProducts={selectedProducts}
                    />
                <OrderLocation onChangeLocation={location => setOrderLocatio(location)} />
                <OrderSummary 
                    amount={selectedProducts.length} 
                    totalPrice={totalPrice} 
                    onSubmit={handleSubmit}/>
            </div>
            <Footer/>
        </>
    )
}

export default Orders;