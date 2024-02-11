
import { useEffect, useState } from 'react'
import Header from '../Header'
import Main from '../Main'
import './App.css'
import Modal from '../Modal';
import { fetchOrderList } from '../../utilites/api';
import OrderList from '../OrderList/OrderList';

const CUURENTORDER = {
  "name": "order-10",
  "date": "10.02.24",
  "total": "2",
  "totalPrice": "2",
  "status": "false",
  "items": [
    {
          "name": "item-1",
          "amount": "2",
          "price": "1"
      },
      {
        "name": "item-2",
        "amount": "1",
        "price": "2"
    }
    ]
};

function App() {
  const [currentOrder, setCurrentOrder] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [order, setOrder] = useState([]);


  const toggleModal = () => {
    setShowModal(s => !s);
  };

  const openOrderList = async () => {
    try {
        // console.log("Order is open!");
        setIsLoading(true);
        const result = await fetchOrderList();
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

  // console.log("Updated Order:", order);
  // console.log('order.length:', order.length);
  // console.log('showModal:', showModal);

  
}, [order]);

useEffect(() => {
  console.log(currentOrder);
}, [currentOrder]);

  return (
    <>
      <Header  openOrderList={openOrderList} isLoading={isLoading} currentOrder={currentOrder?.name ?? null} />
      {showModal && order.length && <Modal toggle={toggleModal} children={() => <OrderList orderList={order} />} />}
      <Main setCurrentOrder = {setCurrentOrder} currentOrder={currentOrder} />
    </>
  )
}

export default App
