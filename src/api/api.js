import axios from 'axios';


const signUp = async (details) => {
  const {fullName, email, password } = details;
  try {
    const response = await axios.post('http://localhost:8000/register', {
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
    const response = await axios.get('http://localhost:8000/products');
    return response.data;
  }catch(err){
    return err.response.data;
  }
};

const login = async (details) => {
  const {email, password} = details;
  try {
    const response = await axios.post('http://localhost:8000/login', {
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
    const response = await axios.post('http://localhost:8000/update', {
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
    const response = await axios.post('http://localhost:8000/profile', {
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
    const response = await axios.post("http://localhost:8000/password", {
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
    const response = await axios.post("http://localhost:8000/placeOrder", {
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
    const response = await axios.post("http://localhost:8000/orders", {
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
    const response = await axios.post("http://localhost:8000/order", {
      order: {
        id,
      }
    });
    return response.data;
  }catch (err){
    return {error: err};
  }
}


const auth = async (token) => {
  const configuration = {
      method: "get",
      url: "https://loginbackend-phi.vercel.app/secret",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  try{
    const response = await axios(configuration);
    return response.data;
  }catch (err){
    return err.message;
  }
}

export {login, signUp, auth, update, checkPassword, profile, products, addOrder, getOrders, getOrder};
