import React from 'react';
import { Typography, Container, Grid, Paper, List, ListItem, ListItemText, Divider, Box, Button } from '@mui/material';
import { useLocation } from 'react-router-dom';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PrintIcon from '@mui/icons-material/Print';
import qs from 'qs';
import { keyframes } from '@emotion/react';
import { styled } from '@mui/system';

const Confirmation = () => {
  const location = useLocation();
  const queryParams = qs.parse(location.search, { ignoreQueryPrefix: true });
  const orderData = queryParams.orderData ? JSON.parse(decodeURIComponent(queryParams.orderData)) : null;

  if (!orderData) {
    return <Typography variant="h6">Không có dữ liệu đơn hàng.</Typography>;
  }

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const shippingFee = 40000;
    return subtotal + shippingFee;
  };

  const calculateSubtotal = () => {
    return orderData.orderDetails.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  };

  const shippingFee = orderData.shippingFee || 0;
  const subtotal = calculateSubtotal();
  const total = subtotal + shippingFee;

  const handlePrint = () => {
    window.print();
  };

  const getCurrentDate = () => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date().toLocaleDateString('vi-VN', options);
  };

  // Define keyframes for the checkmark animation
  const checkmarkAnimation = keyframes`
    0% {
      transform: scale(0);
      opacity: 0;
    }
    50% {
      transform: scale(1.1);
      opacity: 1;
    }
    70% {
      transform: scale(0.9);
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  `;

  // Styled component for the icon with animation
  const AnimatedCheckCircleOutlineIcon = styled(CheckCircleOutlineIcon)`
    animation: ${checkmarkAnimation} 1s ease-in-out;
    color: green;
    font-size: 3rem;
    margin-right: 1rem;
  `;

  return (
    <Container>
      <Box display="flex" justifyContent="center" mt={4} mb={2}>
        <img
          src="https://bizweb.dktcdn.net/100/514/629/themes/951567/assets/logo.png?1718181939137"
          alt="Logo"
          style={{ height: 50 }}
        />
      </Box>

      <Typography
        variant="h4"
        align="center"
        gutterBottom
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <AnimatedCheckCircleOutlineIcon />
        Đặt hàng thành công!
      </Typography>

      <Grid container justifyContent="center" style={{ marginTop: 40 }}>
        <Grid item xs={12} sm={10} md={8}>
          <Paper elevation={3} style={{ padding: 20, position: 'relative' }}>
            <Typography variant="h6" align="center" gutterBottom style={{ fontWeight: 'bold' }}>
              ĐƠN HÀNG #{orderData.orderId || orderData.id}
            </Typography>
            <Typography variant="body2" align="right" style={{ position: 'absolute', top: 10, right: 20 }}>
              {getCurrentDate()}
            </Typography>
            <Divider style={{ marginBottom: 20 }} />
            <Box mt={2}>
              <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>
                Thông tin khách hàng
              </Typography>
              <Typography variant="body1">Tên: {orderData.customerName}</Typography>
              <Typography variant="body1">Email: {orderData.account?.email}</Typography>
            </Box>
            <Box mt={2}>
              <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>
                Địa chỉ nhận hàng
              </Typography>
              <Typography variant="body1">{orderData.address}</Typography>
            </Box>
            <Box mt={2}>
              <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>
                Chi tiết đơn hàng
              </Typography>
              <List>
                {orderData.orderDetails.map((item, index) => (
                  <ListItem key={index}>
                    <ListItemText
                      primary={item.product.name}
                      secondary={`Số lượng: ${item.quantity} - Giá: ${item.product.price?.toLocaleString('vi-VN', {
                        style: 'currency',
                        currency: 'VND',
                      })}`}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
            <Box mt={2} pt={2} borderTop="1px solid #ccc">
              <Typography variant="subtitle1">
                Tạm tính:{' '}
                <span style={{ color: 'red' }}>
                  {calculateSubtotal().toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                </span>
              </Typography>
              <Typography variant="h5" marginBottom="20px" fontSize="16px">
                Phí vận chuyển: <span style={{ color: 'red' }}>40.000₫</span>
              </Typography>
              <Typography variant="h6" style={{ marginTop: 10 }}>
                Tổng cộng:{' '}
                <span style={{ color: 'red' }}>
                  {calculateTotal().toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                </span>
              </Typography>
            </Box>
          </Paper>
          <Box display="flex" justifyContent="center" mt={3}>
            <Button variant="contained" color="primary" href="/">
              Tiếp tục mua hàng
            </Button>
            <Button
              variant="outlined"
              color="primary"
              startIcon={<PrintIcon />}
              style={{ marginLeft: '1rem' }}
              onClick={handlePrint}
            >
              In
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Confirmation;
