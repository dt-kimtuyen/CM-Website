<<<<<<< HEAD
import { useEffect, useState } from 'react';
import styled from 'styled-components';
=======
import { useState } from "react";
import styled from "styled-components";
>>>>>>> 4ca596fe95273da02de94af89d6f160b8b73466c
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
<<<<<<< HEAD
  Typography,
  Grid, 
  CircularProgress,
} from '@mui/material';
import { Edit, Delete, Visibility, FilterList, GetApp } from "@mui/icons-material";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditCalendarOutlinedIcon from '@mui/icons-material/EditCalendarOutlined';  
import Dashboard from '../index';
import CustomerEdit from './Edit'; // Ensure the correct import path
import { GetAllCustomerAPI } from '../../../../apis';

const CustomerIndex = () => {
  const [customers, setCustomers] = useState([]);
  const [filteredCustomers, setFilteredCustomers] = useState([]);
=======
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
>>>>>>> 4ca596fe95273da02de94af89d6f160b8b73466c
  const [open, setOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
  const [customerToDelete, setCustomerToDelete] = useState(null);
  const [snackbar, setSnackbar] = useState({
    open: false,
<<<<<<< HEAD
    message: '',
    severity: 'success',
  });
  const [filter, setFilter] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    GetAllCustomerAPI()
      .then((data) => {
        const mappedCustomers = data.map((user) => ({
          id: user.id,
          joiningDate: user.createdAt.substring(0, 10), // Assuming createdAt is in ISO format
          name: user.username,
          email: user.email,
          address: '', // Placeholder for address data from API
          role: user.role,
        }));
        setCustomers(mappedCustomers);
        setFilteredCustomers(mappedCustomers);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
        setCustomers([]);
        setFilteredCustomers([]);
        setLoading(false);
      });
  }, []);
=======
    message: "",
    severity: "success",
  });
  const [filter, setFilter] = useState("");
  const [filteredCustomers, setFilteredCustomers] = useState(initialCustomers);
>>>>>>> 4ca596fe95273da02de94af89d6f160b8b73466c

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
<<<<<<< HEAD
      prevCustomers.filter((cust) => cust.id !== customerToDelete.id)
    );
    setFilteredCustomers((prevCustomers) =>
      prevCustomers.filter((cust) => cust.id !== customerToDelete.id)
=======
      prevCustomers.filter((customer) => customer.id !== customerToDelete.id)
    );
    setFilteredCustomers((prevCustomers) =>
      prevCustomers.filter((customer) => customer.id !== customerToDelete.id)
>>>>>>> 4ca596fe95273da02de94af89d6f160b8b73466c
    );
    setConfirmDialogOpen(false);
    setCustomerToDelete(null);
    setSnackbar({
      open: true,
<<<<<<< HEAD
      message: 'Customer deleted successfully!',
      severity: 'success',
=======
      message: "Customer deleted successfully!",
      severity: "success",
>>>>>>> 4ca596fe95273da02de94af89d6f160b8b73466c
    });
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedCustomer(null);
  };

  const handleSave = (updatedCustomer) => {
    setCustomers((prevCustomers) =>
<<<<<<< HEAD
      prevCustomers.map((cust) =>
        cust.id === updatedCustomer.id ? updatedCustomer : cust
      )
    );
    setFilteredCustomers((prevCustomers) =>
      prevCustomers.map((cust) =>
        cust.id === updatedCustomer.id ? updatedCustomer : cust
=======
      prevCustomers.map((customer) =>
        customer.id === updatedCustomer.id ? updatedCustomer : customer
      )
    );
    setFilteredCustomers((prevCustomers) =>
      prevCustomers.map((customer) =>
        customer.id === updatedCustomer.id ? updatedCustomer : customer
>>>>>>> 4ca596fe95273da02de94af89d6f160b8b73466c
      )
    );
    setOpen(false);
    setSelectedCustomer(null);
    setSnackbar({
      open: true,
<<<<<<< HEAD
      message: 'Customer updated successfully!',
      severity: 'success',
=======
      message: "Customer updated successfully!",
      severity: "success",
>>>>>>> 4ca596fe95273da02de94af89d6f160b8b73466c
    });
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleFilter = () => {
    setFilteredCustomers(
      customers.filter(
<<<<<<< HEAD
        (cust) =>
          cust.name.toLowerCase().includes(filter.toLowerCase()) ||
          cust.email.toLowerCase().includes(filter.toLowerCase()) ||
          cust.phone.includes(filter)
=======
        (customer) =>
          customer.name.toLowerCase().includes(filter.toLowerCase()) ||
          customer.email.toLowerCase().includes(filter.toLowerCase()) ||
          customer.phone.includes(filter)
>>>>>>> 4ca596fe95273da02de94af89d6f160b8b73466c
      )
    );
  };

  const handleReset = () => {
<<<<<<< HEAD
    setFilter('');
=======
    setFilter("");
>>>>>>> 4ca596fe95273da02de94af89d6f160b8b73466c
    setFilteredCustomers(customers);
  };

  return (
    <Dashboard>
      <CustomerManager>
<<<<<<< HEAD
      <Typography variant="h6" style={{ marginBottom: 16 }}>
          Quản lý khách hàng
        </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Tìm kiếm tên"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
               label="Lọc theo chức vụ"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={12} style={{ textAlign: "right" }}>
            <Button
              variant="outlined"
              startIcon={<FilterList />}
              style={{ marginRight: 8 }}
            >
              Đặt lại
            </Button>
            <Button
              variant="outlined"
              startIcon={<GetApp />}
              style={{ marginRight: 8 }}
            >
              Xuất
            </Button>
            
          </Grid>
        </Grid>
        {loading ? (
          <LoadingContainer>
            <CircularProgress />
          </LoadingContainer>
        ) : (
          <TableContainer component={Paper} sx={{marginTop:'20px'}} >
            <StyledTable>
              <TableHead>
                <TableRow>
                  <StyledTableCell>Mã</StyledTableCell>
                  <StyledTableCell>Tên</StyledTableCell>
                  <StyledTableCell>Email</StyledTableCell>
                  <StyledTableCell>Ngày Tham gia</StyledTableCell>
                  <StyledTableCell>Chức vụ</StyledTableCell>
                  <StyledTableCell>Tác vụ</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredCustomers.map((customer) => (
                  <TableRow key={customer.id}>
                    <TableCell>{customer.id}</TableCell>
                    <TableCell>{customer.name}</TableCell>
                    <TableCell>{customer.email}</TableCell>
                    <TableCell>{customer.joiningDate}</TableCell>
                    <TableCell>{customer.role?.name}</TableCell>
                    <TableCell>
                      <IconButton onClick={() => handleEditClick(customer)}>
                        <EditCalendarOutlinedIcon color="secondary" />
                      </IconButton>
                      <IconButton onClick={() => handleDeleteClick(customer)}>
                        <DeleteOutlineOutlinedIcon color="error" />
                      </IconButton>
                      
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </StyledTable>
          </TableContainer>
        )}
=======
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
>>>>>>> 4ca596fe95273da02de94af89d6f160b8b73466c
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
<<<<<<< HEAD
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
`;


const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
=======
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
>>>>>>> 4ca596fe95273da02de94af89d6f160b8b73466c
`;
