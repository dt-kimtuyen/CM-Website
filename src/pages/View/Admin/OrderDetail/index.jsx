<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Icon
} from '@mui/material';
import { fetchOneOrderAPI } from '../../../../apis';
import PrintIcon from '@mui/icons-material/Print';

const OrderDetail = ({ orderId, onClose }) => {
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const fetchedOrder = await fetchOneOrderAPI(orderId);
        setOrder(fetchedOrder);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch order", error);
        setLoading(false);
      }
    };

    fetchOrder();
  }, [orderId]);

  const handlePrint = () => {
    window.print();
  };

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  if (!order) {
    return <Typography>Order not found</Typography>;
  }

 
  const formatDate = (dateString) => {
    const date = new Date(dateString); // Chuyển đổi chuỗi thành đối tượng Date
    const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false, // Nếu bạn muốn sử dụng định dạng 24 giờ
    };
    return date.toLocaleString('vi-VN', options);
};


  return (
    <Dialog open={true} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>Thông Tin hóa đơn</DialogTitle>
      <DialogContent>
        <Box sx={{ padding: '20px', border: '1px solid #ccc', borderRadius: '4px', backgroundColor: '#f9f9f9' }}>
          <Typography variant="h6" gutterBottom>
            Thông tin khách hàng
          </Typography>
          <Typography>
            <strong>Tên:</strong> {order.customerName}
          </Typography>
          <Typography>
            <strong>Email:</strong> {order.account.email}
          </Typography>
          <Typography>
            <strong>Địa chỉ nhận hàng:</strong> {order.address}
          </Typography>

          <Divider style={{ margin: '20px 0' }} />

          <Typography variant="h6" gutterBottom>
            Chi tiết đơn hàng
          </Typography>
          <List>
            {order.orderDetails.map((detail) => (
              <ListItem key={detail.id} alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt={detail.product.name} src={detail.product.image} />
                </ListItemAvatar>
                <ListItemText
                  primary={detail.product.name}
                  secondary={`Số lượng: ${detail.quantity} - Giá: ${detail.product.price.toLocaleString()} đ`}
                />
              </ListItem>
            ))}
          </List>

          <Divider style={{ margin: '20px 0' }} />

          <Typography>
            <strong>Tạm tính:</strong> {(order.total - 40000).toLocaleString()} đ
          </Typography>
          <Typography>
            <strong>Phí vận chuyển:</strong> 40,000 đ
          </Typography>
          <Typography variant="h6">
            <strong>Tổng cộng:</strong> {order.total.toLocaleString()} đ
          </Typography>
          
          <Divider style={{ margin: '20px 0' }} />
          
          <Typography>
            <strong>Thời gian đặt hàng:</strong>  {formatDate(order.date)}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <Button variant="contained" color="primary" startIcon={<PrintIcon />} onClick={handlePrint}>
            In
          </Button>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary" startIcon={<Icon></Icon>}>
          Đóng
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default OrderDetail;
=======
import styled from "styled-components";

const OrderDetailIndex = ({ order, onClose }) => {
  if (!order) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <h2>Order Detail</h2>
        <DetailItem>
          <strong>Invoice No:</strong> {order.invoiceNo}
        </DetailItem>
        <DetailItem>
          <strong>Order Time:</strong> {order.orderTime}
        </DetailItem>
        <DetailItem>
          <strong>Customer Name:</strong> {order.customerName}
        </DetailItem>
        <DetailItem>
          <strong>Method:</strong> {order.method}
        </DetailItem>
        <DetailItem>
          <strong>Amount:</strong> {order.amount}
        </DetailItem>
        <DetailItem>
          <strong>Status:</strong> {order.status}
        </DetailItem>
        <CloseButton onClick={onClose}>Close</CloseButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default OrderDetailIndex;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  max-width: 500px;
  width: 100%;
`;

const DetailItem = styled.div`
  margin-bottom: 10px;
`;

const CloseButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;
  display: block;
  width: 100%;

  &:hover {
    opacity: 0.8;
  }
`;
>>>>>>> 4ca596fe95273da02de94af89d6f160b8b73466c
