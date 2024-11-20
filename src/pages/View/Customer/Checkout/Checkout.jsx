import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  Divider,
} from "@mui/material";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { fetchCartItemsAPI, addToOrderCustomerAPI, deleteCartItemAPI, initiateVNPAYPaymentAPI } from "../../../../apis";
import { useNavigate } from 'react-router-dom';
import qs from 'qs';

const CheckoutPage = () => {
  const [shippingMethod, setShippingMethod] = useState("delivery");
  const [paymentMethod, setPaymentMethod] = useState("bankTransfer");
  const [discountCode, setDiscountCode] = useState("");
  const navigate = useNavigate();

  const [customerInfo, setCustomerInfo] = useState({
    address: "Phường Tân Định, Quận 1, TP Hồ Chí Minh",
    name: "Huỳnh Trọng Tín",
    phone: "",
    note: "",
  });
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const accountId = localStorage.getItem('id');
    fetchCartItemsAPI(accountId)
      .then(data => {
        setCartItems(data); 
      })
      .catch(error => {
        console.error('Error fetching cart items:', error);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo({ ...customerInfo, [name]: value });
  };

  const calculateSubtotal = () => {
    let subtotal = 0;
    cartItems.forEach(item => {
      subtotal += item.product.price * item.quantity;
    });
    return subtotal;
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const shippingFee = 40000;
    return subtotal + shippingFee;
  };

  const handlePlaceOrder = () => {
    setLoading(true);

    const orderDetails = cartItems.map(item => ({
        quantity: item.quantity,
        product: {
            id: item.product.id,
            name: item.product.name,
            price: item.product.price
        },
    }));

    const orderData = {
        customerName: customerInfo.name,
        date: new Date().toISOString().slice(0, 10),
        address: customerInfo.address,
        total: calculateTotal(),
        paymentStatus: "Đã thanh toán",
        shippingStatus: paymentMethod === "bankTransfer" ? "Chuyển khoản VNPay" : "Thanh toán khi nhận hàng",
        account: {
            id: localStorage.getItem('id'),
            email: "tincui012gmail.com"
        },
        orderDetails: orderDetails,
    };

    if (paymentMethod === "bankTransfer") {
        // Call VNPAY API to initiate payment
        initiateVNPAYPaymentAPI(orderData)
            .then(paymentUrl => {
                window.location.href = paymentUrl; 
                const deletePromises = cartItems.map(item => deleteCartItemAPI(item.id));
                Promise.all(deletePromises)
                    .then(() => {
                        setCartItems([]);
                    })
                    .catch(error => {
                        console.error('Error deleting cart items:', error);
                        toast.error("Đã xảy ra lỗi khi xóa sản phẩm từ giỏ hàng.");
                    });
            })
            .catch(error => {
                console.error('Error initiating VNPAY payment:', error);
                toast.error("Đã xảy ra lỗi khi khởi tạo thanh toán VNPAY.");
            })
            .finally(() => {
                setLoading(false);
            });
    } else {
        // Handle other payment methods (e.g., COD)
        addToOrderCustomerAPI(orderData)
            .then(response => {
                const { id: orderId } = response;
                toast.success("Đặt hàng thành công!");
                const queryString = qs.stringify({ orderData: encodeURIComponent(JSON.stringify({ ...orderData, orderId })) });
                navigate(`/customer/confirm?${queryString}`);
                const deletePromises = cartItems.map(item => deleteCartItemAPI(item.id));
                Promise.all(deletePromises)
                    .then(() => {
                        setCartItems([]);
                    })
                    .catch(error => {
                        console.error('Error deleting cart items:', error);
                        toast.error("Đã xảy ra lỗi khi xóa sản phẩm từ giỏ hàng.");
                    });

                setShippingMethod("delivery");
                setPaymentMethod("bankTransfer");
                setDiscountCode("");
                setCustomerInfo({
                    address: "Huỳnh Trọng Tín, Phường Tân Định, Quận 1, TP Hồ Chí Minh",
                    name: "Huỳnh Trọng Tín",
                    phone: "",
                    note: "",
                });
            })
            .catch(error => {
                console.error('Error placing order:', error);
                toast.error("Đã xảy ra lỗi khi đặt hàng. Vui lòng thử lại sau.");
            })
            .finally(() => {
                setLoading(false);
            });
    }
};
  
return (
    <Container>
      <Typography variant="body2" style={{ marginTop: 16, fontSize: "20px" }}>
        <a
          href="/customer/shoppingCart"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            color: "#357ebd",
          }}
        >
          <ArrowBackIcon style={{ marginRight: 8, fontSize: "24px" }} /> Quay
          về giỏ hàng
        </a>
      </Typography>

      <Grid container spacing={2} style={{ marginTop: 16 }}>
        <Grid
          item
          xs={12}
          style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        >
          {/* Centered logo */}
          <img
            src="https://bizweb.dktcdn.net/100/514/629/themes/951567/assets/logo.png?1718181939137"
            alt="Logo"
            style={{ height: 50 }}
          />
        </Grid>
      </Grid>

      <Grid container spacing={2} style={{ marginTop: 16 }}>
        <Grid item xs={12} sm={8}>
          <Paper style={{ padding: 16, marginBottom: 16 }}>
            <Typography variant="h4" gutterBottom>
              Thông tin nhận hàng
            </Typography>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <TextField
                  label="Họ và tên"
                  fullWidth
                  name="name"
                  value={customerInfo.name}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Số địa chỉ"
                  fullWidth
                  name="address"
                  value={customerInfo.address}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Số điện thoại (tùy chọn)"
                  fullWidth
                  name="phone"
                  value={customerInfo.phone}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Ghi chú (tùy chọn)"
                  fullWidth
                  name="note"
                  value={customerInfo.note}
                  onChange={handleInputChange}
                />
              </Grid>
            </Grid>
          </Paper>

          <Paper style={{ padding: 16, marginBottom: 16 }}>
            <Typography variant="h4" fontSize="20px" gutterBottom>
              Vận chuyển
            </Typography>
            <RadioGroup
              value={shippingMethod}
              onChange={(e) => setShippingMethod(e.target.value)}
            >
              <FormControlLabel
                value="delivery"
                control={<Radio />}
                label="Giao hàng tận nơi (40.000đ)"
              />
            </RadioGroup>
          </Paper>

          <Paper style={{ padding: 16 }}>
            <Typography variant="h4" fontSize="20px" gutterBottom>
              Thanh toán
            </Typography>
            <RadioGroup
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <FormControlLabel
                value="bankTransfer"
                control={<Radio />}
                label="Chuyển khoản (VNPAY)"
              />
              <FormControlLabel
                value="cod"
                control={<Radio />}
                label="Thu hộ (COD)"
              />
            </RadioGroup>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Paper style={{ padding: 16 }}>
            <Typography variant="h4" fontSize="20px" gutterBottom>
              Đơn hàng ({cartItems.length} sản phẩm)
            </Typography>
            {cartItems.map((item, index) => (
              <Grid
                container
                spacing={2}
                key={index}
                style={{ marginTop: 16, alignItems: "center" }}
              >
                <Grid item xs={3}>
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    style={{ width: "100%" }}
                  />
                </Grid>
                <Grid item xs={9}>
                  <Typography variant="h6">{item.product.name}</Typography>
                  <Typography>
                    {item.product.price.toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </Typography>
                  <Typography>Số lượng: {item.quantity}</Typography>
                </Grid>
              </Grid>
            ))}

            <Grid
              container
              spacing={1}
              alignItems="center"
              style={{ marginTop: 16 }}
            >
              <Grid item xs={8}>
                <TextField
                  label="Nhập mã giảm giá"
                  fullWidth
                  value={discountCode}
                  onChange={(e) => setDiscountCode(e.target.value)}
                />
              </Grid>
              <Grid item xs={4}>
                <Button
                  variant="contained"
                  fullWidth
                  style={{ height: "45px" }}
                  onClick={() =>
                    alert(
                      "Functionality for applying discount code is not implemented."
                    )
                  }
                >
                  Áp dụng
                </Button>
              </Grid>
            </Grid>

            <Typography
              variant="h5"
              marginBottom="10px"
              fontSize="16px"
              style={{ marginTop: 16 }}
            >
              Tạm tính:{" "}
              <span style={{ color: "red" }}>
                {calculateSubtotal().toLocaleString("vi-VN", {
                  style: "currency",
                  currency: "VND",
                })}
              </span>
            </Typography>
            <Typography variant="h5" marginBottom="20px" fontSize="16px">
              Phí vận chuyển: <span style={{ color: "red" }}>40.000₫</span>
            </Typography>
            <Divider />
            <Typography variant="h5" marginTop="20px" fontSize="21px">
              Tổng tiền:{" "}
              <span style={{ color: "red" }}>
                {calculateTotal().toLocaleString("vi-VN", {
                  style: "currency",
                  currency: "VND",
                })}
              </span>
            </Typography>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              style={{ marginTop: 16, height: "40px" }}
              onClick={handlePlaceOrder}
              disabled={loading}
            >
              {loading ? "Đang xử lý..." : "Đặt hàng"}
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CheckoutPage;