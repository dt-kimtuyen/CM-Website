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
