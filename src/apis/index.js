import axios from 'axios';

export const loginAPI = async (credentials) => {
    const response = await axios.post('http://localhost:8080/api/account/login', credentials);
    return response.data; // Trả về dữ liệu từ phản hồi của máy chủ API
};

export const signupAPI = async (userData) => {
    const response = await axios.post('http://localhost:8080/api/account/signup', userData);
    return response.data;
};

export const fetchUserInfoAPI = async (userId) => {
    const response = await axios.get(`http://localhost:8080/api/account/${userId}`);
    return response.data;
};

export const updateUserAPI = async (userId, updateData) =>
{
    const response = await axios.put(`http://localhost:8080/api/account/update/${userId}`,updateData)
    return response.data;
}
//Category
export const fetchAllCategoriesAPI = async () => {
    const response = await axios.get(`http://localhost:8080/api/categories`);
    return response.data
}


export const CreateCategoryAPI = async (updateData) => {
    const response = await axios.post(`http://localhost:8080/api/categories/create`, updateData)

    return response.data

}
export const updateCategoryAPI = async (CategoryId, updateData) => {
    const response = await axios.put(`http://localhost:8080/api/categories/${CategoryId}`, updateData)

    return response.data

}
export const deleteCategoryAPI = async (CategoryId) => {
    const response = await axios.delete(`http://localhost:8080/api/categories/${CategoryId}`);
    return response.data;
};

//product
export const fetchAllProductsAPI = async () => {
    const response = await axios.get(`http://localhost:8080/api/product`);
    return response.data
}

export const fetchOneProductsAPI = async (ProductId) => {
    const response = await axios.get(`http://localhost:8080/api/product/${ProductId}`);
    return response.data
}
export const CreateProductAPI = async (updateData) => {
    const response = await axios.post(`http://localhost:8080/api/product/create`, updateData)

    return response.data

}
export const updateProductAPI = async (ProductId, updateData) => {
    const response = await axios.put(`http://localhost:8080/api/product/${ProductId}`, updateData)

    return response.data

}
export const deleteProductAPI = async (ProductId) => {
    const response = await axios.delete(`http://localhost:8080/api/product/${ProductId}`);
    return response.data;
};
// Cart

export const fetchCartItemsAPI = async (accountId) => {
        const response = await axios.get(`http://localhost:8080/api/cart/${accountId}`);
        return response.data;
};

export const addToCartAPI = async (productId, quantity,accountId) => {
  
    const response = await axios.post(`http://localhost:8080/api/cart/add?productId=${productId}&quantity=${quantity}&accountId=${accountId}`);
    return response.data;
  
};


export const updateCartItemAPI = async (cartItemId, quantity) => {
  
    const response = await axios.put(`http://localhost:8080/api/cart/update/${cartItemId}?quantity=${quantity}`);
    return response.data;
  
};


export const deleteCartItemAPI = async (cartItemId) => {
        const response = await axios.delete(`http://localhost:8080/api/cart/delete/${cartItemId}`);
        return response.data;
};


//Order

export const fetchAllOrdersAPI = async () => {
    const response = await axios.get(`http://localhost:8080/api/orders`);
    return response.data;
};

export const fetchOneOrderAPI = async (OrderId) => {
    const response = await axios.get(`http://localhost:8080/api/orders/${OrderId}`);
    return response.data;
};

export const fetchAllOrdersCustomerAPI = async (accountId) => {
    const response = await axios.get(`http://localhost:8080/api/orders/customer/${accountId}`);
    return response.data;
};

export const addToOrderCustomerAPI = async (updateData) => {
  
    const response = await axios.post(`http://localhost:8080/api/orders`,updateData);
    return response.data;
  
};

export const updateOrderAPI = async (OrderId) => {
  
    const response = await axios.put(`http://localhost:8080/api/orders/${OrderId}`);
    return response.data;
  
};


export const deleteOrderAPI = async (OrderId) => {
        const response = await axios.delete(`http://localhost:8080/api/orders/${OrderId}`);
        return response.data;
};


//VNPAY
export const initiateVNPAYPaymentAPI = async (orderData) => {
    const response = await axios.post(`http://localhost:8080/api/payment/create-payment`,orderData);
    return response.data;
}


//Coze
export const sendMessageAPI = async (messageData) => {
        const response = await axios.post('http://localhost:8080/api/chat/message', messageData);
        return response.data;
}