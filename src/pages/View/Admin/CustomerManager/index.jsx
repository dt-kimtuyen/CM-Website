import { useState } from "react";
import styled from "styled-components";
import {
  Button,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Snackbar,
  Alert,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Dashboard from "../index";
import CustomerEdit from "./Edit"; // Ensure the correct import path

const initialCustomers = [
  {
    id: "1",
    joiningDate: "Jun 19, 2024",
    name: "Luis Gonzalez",
    email: "lstarkgv@gmail.com",
    phone: "0906537394",
    address: "Nguyễn Văn Trỗi",
  },
  {
    id: "2",
    joiningDate: "Jun 19, 2024",
    name: "Leoberto Zeron",
    email: "zerontecnologia1@gmail.com",
    phone: "0943632346",
    address: "Nguyễn Văn Trỗi",
  },
];

const CustomerIndex = () => {
  const [customers, setCustomers] = useState(initialCustomers);
  const [open, setOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
  const [customerToDelete, setCustomerToDelete] = useState(null);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });
  const [filter, setFilter] = useState("");
  const [filteredCustomers, setFilteredCustomers] = useState(initialCustomers);

  const handleEditClick = (customer) => {
    setSelectedCustomer(customer);
    setOpen(true);
  };

  const handleDeleteClick = (customer) => {
    setCustomerToDelete(customer);
    setConfirmDialogOpen(true);
  };

  const handleConfirmDelete = () => {
    setCustomers((prevCustomers) =>
      prevCustomers.filter((customer) => customer.id !== customerToDelete.id)
    );
    setFilteredCustomers((prevCustomers) =>
      prevCustomers.filter((customer) => customer.id !== customerToDelete.id)
    );
    setConfirmDialogOpen(false);
    setCustomerToDelete(null);
    setSnackbar({
      open: true,
      message: "Customer deleted successfully!",
      severity: "success",
    });
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedCustomer(null);
  };

  const handleSave = (updatedCustomer) => {
    setCustomers((prevCustomers) =>
      prevCustomers.map((customer) =>
        customer.id === updatedCustomer.id ? updatedCustomer : customer
      )
    );
    setFilteredCustomers((prevCustomers) =>
      prevCustomers.map((customer) =>
        customer.id === updatedCustomer.id ? updatedCustomer : customer
      )
    );
    setOpen(false);
    setSelectedCustomer(null);
    setSnackbar({
      open: true,
      message: "Customer updated successfully!",
      severity: "success",
    });
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleFilter = () => {
    setFilteredCustomers(
      customers.filter(
        (customer) =>
          customer.name.toLowerCase().includes(filter.toLowerCase()) ||
          customer.email.toLowerCase().includes(filter.toLowerCase()) ||
          customer.phone.includes(filter)
      )
    );
  };

  const handleReset = () => {
    setFilter("");
    setFilteredCustomers(customers);
  };

  return (
    <Dashboard>
      <CustomerManager>
        <Header>
          <h1>Khách Hàng</h1>
        </Header>
        <FilterSection>
          <TextField
            variant="outlined"
            placeholder="Search by name/email/phone"
            InputProps={{
              startAdornment: <SearchIcon />,
            }}
            fullWidth
            value={filter}
            onChange={handleFilterChange}
          />
          <Button variant="contained" color="primary" onClick={handleFilter}>
            Filter
          </Button>
          <Button variant="contained" color="secondary" onClick={handleReset}>
            Reset
          </Button>
        </FilterSection>
        <TableContainer component={Paper}>
          <StyledTable>
            <TableHead>
              <TableRow>
                <StyledTableCell>ID</StyledTableCell>
                <StyledTableCell>NGÀY THAM GIA</StyledTableCell>
                <StyledTableCell>HỌ VÀ TÊN</StyledTableCell>
                <StyledTableCell>EMAIL</StyledTableCell>
                <StyledTableCell>ĐIỆN THOẠI</StyledTableCell>
                <StyledTableCell>ĐỊA CHỈ</StyledTableCell>
                <StyledTableCell>TÁC VỤ</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredCustomers.map((customer) => (
                <StyledTableRow key={customer.id}>
                  <StyledTableCell>{customer.id}</StyledTableCell>
                  <StyledTableCell>{customer.joiningDate}</StyledTableCell>
                  <StyledTableCell>{customer.name}</StyledTableCell>
                  <StyledTableCell>{customer.email}</StyledTableCell>
                  <StyledTableCell>{customer.phone}</StyledTableCell>
                  <StyledTableCell>{customer.address}</StyledTableCell>
                  <StyledTableCell>
                    <IconButton onClick={() => handleEditClick(customer)}>
                      <EditIcon color="secondary" />
                    </IconButton>
                    <IconButton onClick={() => handleDeleteClick(customer)}>
                      <DeleteIcon color="error" />
                    </IconButton>
                    <IconButton>
                      <VisibilityIcon color="info" />
                    </IconButton>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </StyledTable>
        </TableContainer>
        <CustomerEdit
          open={open}
          onClose={handleClose}
          customer={selectedCustomer}
          onSave={handleSave}
        />
        <Dialog
          open={confirmDialogOpen}
          onClose={() => setConfirmDialogOpen(false)}
        >
          <DialogTitle>Delete Customer</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to delete this customer?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setConfirmDialogOpen(false)} color="primary">
              Cancel
            </Button>
            <Button onClick={handleConfirmDelete} color="error">
              Delete
            </Button>
          </DialogActions>
        </Dialog>
        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={() => setSnackbar({ ...snackbar, open: false })}
        >
          <Alert
            onClose={() => setSnackbar({ ...snackbar, open: false })}
            severity={snackbar.severity}
            variant="filled"
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </CustomerManager>
    </Dashboard>
  );
};

export default CustomerIndex;

const StyledTable = styled(Table)`
  && {
    border-collapse: collapse;
  }
`;

const StyledTableCell = styled(TableCell)`
  && {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
    vertical-align: middle;
  }
`;

const StyledTableRow = styled(TableRow)`
  &&:nth-of-type(even) {
    background-color: #f9f9f9;
  }
  &:hover {
    background-color: #f1f1f1;
  }
`;

const CustomerManager = styled.div`
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
    background-color: #dc3545;s
  }

  button:nth-last-child(2) {
    background-color: #007bff;
  }

  button:hover {
    opacity: 0.8;
  }
`;
