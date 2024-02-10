
import { useEffect, useState } from 'react'
import Header from '../Header'
import Main from '../Main'
import './App.css'
import Modal from '../Modal';
import { fetchOrder } from '../../utilites/api';
import OrderList from '../OrderList/OrderList';

function App() {

  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [order, setOrder] = useState([]);


  const toggleModal = () => {
    setShowModal(s => !s);
  };

  const openOrder = async () => {
    try {
        console.log("Order is open!");
        setIsLoading(true);
        const result = await fetchOrder();
        // console.log(result);

        setOrder(result);
        toggleModal();

    } catch (err) {
        console.log(err);
    
    } finally {
        setIsLoading(false);
    }
};

useEffect(() => {
  if(!order.length) {
    return;
  };

  console.log("Updated Order:", order);
  console.log('order.length:', order.length);
  console.log('showModal:', showModal);

  
}, [order]);

  return (
    <>
      <Header  openOrder={openOrder} isLoading={isLoading}  />
      {showModal && order.length && <Modal toggle={toggleModal} children={() => <OrderList orderList={order} />} />}
      <Main />
    </>
  )
}

export default App
