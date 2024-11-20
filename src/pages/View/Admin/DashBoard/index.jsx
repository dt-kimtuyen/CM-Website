// src/pages/View/Admin/DashBoard/index.jsx
import { useState, useEffect } from "react";
import { Typography, Grid, Paper, Box } from "@mui/material";
import { Line, Doughnut, Bar } from "react-chartjs-2";
import {
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Chart as ChartJS,
} from "chart.js";
import Dashboard from "../index";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

// Sample data for the charts
const lineData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Sales",
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
    },
  ],
};

// Sample data for the pie chart
const pieData = {
  labels: ["Sales", "Product", "Income"],
  datasets: [
    {
      data: [68, 25, 7],
      backgroundColor: ["#4CAF50", "#FF9800", "#2196F3"],
      hoverBackgroundColor: ["#66BB6A", "#FFB74D", "#64B5F6"],
    },
  ],
};

// Updated data for the monthly revenue chart
const barData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
  datasets: [
    {
      label: "Revenue",
      data: [10, 40, 30, 50, 20, 15, 20, 25, 10],
      backgroundColor: "#00bfae",
      borderColor: "#00bfae",
      borderWidth: 1,
    },
  ],
};

const DashboardContent = () => {
  return (
    <Dashboard>
      <Box
        sx={{
          flexGrow: 1,
          p: 2,
          backgroundColor: "#F5F5F5",
          minHeight: "100vh",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Thống kê
        </Typography>
        <Grid container spacing={3}>
          {/* KPI Metrics */}
          <Grid item xs={12} md={3}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#4CAF50",
                color: "#FFF",
              }}
            >
              <Typography variant="h6">Tổng thu nhập</Typography>
              <Typography variant="h4">$5,000</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={3}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#92a8d1",
                color: "#FFF",
              }}
            >
              <Typography variant="h6">Đơn đặt hàng</Typography>
              <Typography variant="h4">200</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={3}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#80ced6",
                color: "#FFF",
              }}
            >
              <Typography variant="h6">Khách hàng mới</Typography>
              <Typography variant="h4">150</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={3}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#f18973",
                color: "#FFF",
              }}
            >
              <Typography variant="h6">Đơn vận chuyển</Typography>
              <Typography variant="h4">75</Typography>
            </Paper>
          </Grid>

          {/* Sales Chart */}
          <Grid item xs={12} md={6}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#fff",
              }}
            >
              <Typography variant="h6">Doanh số bán hàng</Typography>
              <Line data={lineData} />
              {/* <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                <Typography variant="h4" sx={{ color: "#2196F3", mr: 1 }}>
                  70.5%
                </Typography>
                <Typography variant="body2" sx={{ color: "#00bfae" }}>
                  14.5% &#x2191;
                </Typography>
              </Box> */}
            </Paper>
          </Grid>

          {/* Monthly Revenue Chart */}
          <Grid item xs={12} md={6}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#fff",
              }}
            >
              <Typography variant="h6">Doanh thu hàng tháng</Typography>
              <Bar
                data={barData}
                options={{
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                  scales: {
                    x: {
                      grid: {
                        display: false,
                      },
                    },
                    y: {
                      grid: {
                        display: false,
                      },
                    },
                  },
                }}
              />
              {/* <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                <Typography variant="h4" sx={{ color: "#2196F3", mr: 1 }}>
                  68.9%
                </Typography>
                <Typography variant="body2" sx={{ color: "#00bfae" }}>
                  34.5% &#x2191;
                </Typography>
              </Box> */}
            </Paper>
          </Grid>

          {/* Order Status Pie Chart */}
          <Grid item xs={12} md={6}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#fff",
              }}
            >
              <Typography variant="h6">Tình trạng đặt hàng</Typography>
              <Doughnut data={pieData} />
            </Paper>
          </Grid>

          {/* Social Revenue */}
          <Grid item xs={12} md={6}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#fff",
              }}
            >
              <Typography variant="h6">Doanh thu xã hội</Typography>
              {/* Replace with appropriate chart or data representation */}
            </Paper>
          </Grid>

          {/* Transactions */}
          <Grid item xs={12}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#fff",
              }}
            >
              <Typography variant="h6">Giao dịch gần đây</Typography>
              {/* Replace with appropriate table or data representation */}
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Dashboard>
  );
};

export default DashboardContent;
