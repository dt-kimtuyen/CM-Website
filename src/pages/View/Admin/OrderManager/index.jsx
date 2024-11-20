import { useState } from "react";
import styled from "styled-components";
import Dashboard from "../index";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import OrderDetail from "../OrderDetail/index";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Snackbar,
  Alert,
  TextField, // Import TextField from MUI
} from "@mui/material";

const initialOrders = [
  {
    invoiceNo: "11110",
    orderTime: "Jun 17, 2024 3:31 PM",
    customerName: "xx xx",
    method: "Cash",
    amount: "€207.83",
    status: "Pending",
  },
  {
    invoiceNo: "11107",
    orderTime: "Jun 17, 2024 6:48 AM",
    customerName: "de de",
    method: "Cash",
    amount: "€1059.00",
    status: "Cancel",
  },
  {
    invoiceNo: "11109",
    orderTime: "Jun 17, 2024 6:41 AM",
    customerName: "Jhonny Does",
    method: "Cash",
    amount: "€3300.00",
    status: "Processing",
  },
];

const OrderIndex = () => {
  const [orders, setOrders] = useState(initialOrders);
  const [filteredOrders, setFilteredOrders] = useState(initialOrders);
  const [filters, setFilters] = useState({
    customerName: "",
    status: "",
    method: "",
    startDate: "",
    endDate: "",
  });
  const [searchTerm, setSearchTerm] = useState(""); // Add state for search term
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
  const [orderToDelete, setOrderToDelete] = useState(null);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    applyFilters();
  };

  const applyFilters = () => {
    let filtered = orders;

    if (filters.customerName) {
      filtered = filtered.filter((order) =>
        order.customerName
          .toLowerCase()
          .includes(filters.customerName.toLowerCase())
      );
    }

    if (filters.status) {
      filtered = filtered.filter((order) => order.status === filters.status);
    }

    if (filters.method) {
      filtered = filtered.filter((order) => order.method === filters.method);
    }

    if (filters.startDate) {
      filtered = filtered.filter(
        (order) => new Date(order.orderTime) >= new Date(filters.startDate)
      );
    }

    if (filters.endDate) {
      filtered = filtered.filter(
        (order) => new Date(order.orderTime) <= new Date(filters.endDate)
      );
    }

    if (searchTerm) {
      filtered = filtered.filter((order) =>
        order.customerName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredOrders(filtered);
  };

  const resetFilters = () => {
    setFilters({
      customerName: "",
      status: "",
      method: "",
      startDate: "",
      endDate: "",
    });
    setSearchTerm(""); // Reset search term
    setFilteredOrders(orders);
  };

  const handleViewDetail = (order) => {
    setSelectedOrder(order);
  };

  const handleCloseDetail = () => {
    setSelectedOrder(null);
  };

  const handleDeleteOrder = (order) => {
    setOrderToDelete(order);
    setOpenConfirmDialog(true);
  };

  const confirmDeleteOrder = () => {
    setOrders((prevOrders) =>
      prevOrders.filter((order) => order.invoiceNo !== orderToDelete.invoiceNo)
    );
    setFilteredOrders((prevOrders) =>
      prevOrders.filter((order) => order.invoiceNo !== orderToDelete.invoiceNo)
    );
    setOpenConfirmDialog(false);
    setOrderToDelete(null);
    setSnackbar({
      open: true,
      message: "Order deleted successfully!",
      severity: "success",
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Dashboard>
      <OrderManager>
        <Header>
          <h1>Orders</h1>
          <button>Download All Orders</button>
        </Header>
        <FilterSection>
          <TextField
            fullWidth
            label="Tìm kiếm tên khách hàng"
            variant="outlined"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <input
            type="text"
            placeholder="Search by Customer Name"
            name="customerName"
            value={filters.customerName}
            onChange={handleFilterChange}
          />
          <select
            name="status"
            value={filters.status}
            onChange={handleFilterChange}
          >
            <option value="">Status</option>
            <option value="Pending">Pending</option>
            <option value="Cancel">Cancel</option>
            <option value="Processing">Processing</option>
            <option value="Delivered">Delivered</option>
          </select>
          <select
            name="method"
            value={filters.method}
            onChange={handleFilterChange}
          >
            <option value="">Method</option>
            <option value="Cash">Cash</option>
            <option value="Card">Card</option>
          </select>
          <input
            type="date"
            name="startDate"
            value={filters.startDate}
            onChange={handleFilterChange}
          />
          <input
            type="date"
            name="endDate"
            value={filters.endDate}
            onChange={handleFilterChange}
          />
          <button onClick={applyFilters}>Filter</button>
          <button onClick={resetFilters}>Reset</button>
        </FilterSection>
        <OrderTable>
          <thead>
            <tr>
              <th>INVOICE NO</th>
              <th>ORDER TIME</th>
              <th>CUSTOMER NAME</th>
              <th>METHOD</th>
              <th>AMOUNT</th>
              <th>STATUS</th>
              <th>ACTION</th>
              <th>INVOICE</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order) => (
              <StyledTableRow key={order.invoiceNo}>
                <td>{order.invoiceNo}</td>
                <td>{order.orderTime}</td>
                <td>{order.customerName}</td>
                <td>{order.method}</td>
                <td>{order.amount}</td>
                <td className={`status ${order.status.toLowerCase()}`}>
                  {order.status}
                </td>
                <td>
                  <select defaultValue={order.status}>
                    <option value="Pending">Pending</option>
                    <option value="Cancel">Cancel</option>
                    <option value="Processing">Processing</option>
                    <option value="Delivered">Delivered</option>
                  </select>
                </td>
                <td>
                  <IconButton onClick={() => handleViewDetail(order)}>
                    <VisibilityIcon />
                  </IconButton>
                  <IconButton onClick={() => handleDeleteOrder(order)}>
                    <DeleteIcon color="error" />
                  </IconButton>
                </td>
              </StyledTableRow>
            ))}
          </tbody>
        </OrderTable>
        {selectedOrder && (
          <OrderDetail order={selectedOrder} onClose={handleCloseDetail} />
        )}
      </OrderManager>
      <Dialog
        open={openConfirmDialog}
        onClose={() => setOpenConfirmDialog(false)}
      >
        <DialogTitle>Delete Order</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to delete this order?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenConfirmDialog(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={confirmDeleteOrder} color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          variant="filled"
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Dashboard>
  );
};

export default OrderIndex;

const StyledTableRow = styled.tr`
  &:nth-of-type(even) {
    background-color: #f9f9f9;
  }
  &:hover {
    background-color: #f1f1f1;
  }
`;

const OrderManager = styled.div`
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  h1 {
    margin: 0;
  }

  button {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    background-color: #28a745;
    color: white;
    cursor: pointer;
    font-size: 16px;
  }

  button:hover {
    opacity: 0.8;
  }
`;

const FilterSection = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;

  input[type="text"],
  select,
  input[type="date"] {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    background-color: #28a745;
    color: white;
    cursor: pointer;
  }

  button:last-child {
    background-color: #dc3545;
  }

  button:nth-last-child(2) {
    background-color: #007bff;
  }

  button:hover {
    opacity: 0.8;
  }
`;

const OrderTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 12px;
    border: 1px solid #ccc;
    text-align: center;
  }

  th {
    background-color: #f8f9fa;
  }

  .status {
    font-weight: bold;
  }

  .status.pending {
    color: #ffc107;
  }

  .status.cancel {
    color: #dc3545;
  }

  .status.processing {
    color: #17a2b8;
  }

  .status.delivered {
    color: #28a745;
  }

  select {
    padding: 6px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 4px;
  color: #007bff;

  &:hover {
    opacity: 0.8;
  }
`;
