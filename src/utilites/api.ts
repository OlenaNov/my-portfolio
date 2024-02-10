import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

export const fetchItems = async () => {

    try {
        const req = await axios.get('/items');
        // console.log(req.data);
        
        return req.data;

      } catch (err) {
        console.error('Error:', err.message);
      };

};

export const fetchOrderList = async () => {

    try {
        const req = await axios.get('/po-list');
        return req.data;

      } catch (err) {
        console.error('Error:', err.message);
      };

};

export const fetchOrder = async () => {

  try {
      const req = await axios.get('/orders');
      return req.data;

    } catch (err) {
      console.error('Error:', err.message);
    };

};

export const addItem = async () => {

  try {
      const req = await axios.put('/orders');
      return req.data;

    } catch (err) {
      console.error('Error:', err.message);
    };

};