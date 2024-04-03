import axios from 'axios';


const signUp = async (details) => {
  const {fullName, email, password } = details;
  try {
    const response = await axios.post('https://axion-backend.vercel.app/register', {
        user: {
          fullName,
          email,
          password,
          phone: "",
          address: ""
        }
  });
    return response.data;
  }catch(err){
    return err.response.data;
  }
};

const products = async () => {

  try {
    const response = await axios.get('https://axion-backend.vercel.app/products');
    return response.data;
  }catch(err){
    return err.response.data;
  }
};

const login = async (details) => {
  const {email, password} = details;
  try {
    const response = await axios.post('https://axion-backend.vercel.app/login', {
      user: {
          email: email,
          password: password
        }
  });
    return response.data;
  }catch(err){
    return {error: err};
  }
};

const update = async (details) => {
  const {name, email, password, phone, address} = details;
  try {
    const response = await axios.post('https://axion-backend.vercel.app/update', {
      user: {
          name: name,
          email: email,
          password: password,
          phone: phone,
          address: address
        }
  });
    return response.data;
  }catch(err){
    return {error: err};
  }
};

const profile = async (email) => {
  try {
    const response = await axios.post('https://axion-backend.vercel.app/profile', {
      user: {
          email: email
        }
  });
    return response.data;
  }catch(err){
    return {error: err};
  }
}

const checkPassword = async (details) => {
  const {email, password} = details;
  try {
    const response = await axios.post("https://axion-backend.vercel.app/password", {
      user: {
        email: email,
        password: password,
      }
    });
    return response.data;
  }catch (err){
    return {error: err};
  }
}

const addOrder = async (order) => {
  const {orderID, email, products, address, arrival, totalCost} = order;
  try {
    const response = await axios.post("https://axion-backend.vercel.app/placeOrder", {
      order: {
        orderID,
        email,
        products,
        address,
        arrival,
        totalCost
      }
    });
    return response.data;
  }catch (err){
    return {error: err};
  }
}

const getOrders = async (email) => {
  try {
    const response = await axios.post("https://axion-backend.vercel.app/orders", {
      user: {
        email,
      }
    });
    return response.data;
  }catch (err){
    return {error: err};
  }
}

const getOrder = async (id) => {
  try {
    const response = await axios.post("https://axion-backend.vercel.app/order", {
      order: {
        id,
      }
    });
    return response.data;
  }catch (err){
    return {error: err};
  }
}


export {login, signUp, update, checkPassword, profile, products, addOrder, getOrders, getOrder};
