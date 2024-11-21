<<<<<<< HEAD
=======
// src/pages/View/Admin/DashBoard/index.jsx
>>>>>>> 4ca596fe95273da02de94af89d6f160b8b73466c
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
<<<<<<< HEAD
import { fetchTotalPriceOrdersAPI, fetchCountOrdersAPI, fetchCountCustomerAPI } from '../../../../apis';

// Đăng ký các thành phần Chart.js
=======

// Register Chart.js components
>>>>>>> 4ca596fe95273da02de94af89d6f160b8b73466c
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

<<<<<<< HEAD
// Dữ liệu mẫu cho biểu đồ đường
const lineData = {
  labels: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7"],
  datasets: [
    {
      label: "Doanh số",
=======
// Sample data for the charts
const lineData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Sales",
>>>>>>> 4ca596fe95273da02de94af89d6f160b8b73466c
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
    },
  ],
};

<<<<<<< HEAD
// Dữ liệu mẫu cho biểu đồ bánh
const pieData = {
  labels: ["Doanh thu", "Sản phẩm", "Thu nhập"],
=======
// Sample data for the pie chart
const pieData = {
  labels: ["Sales", "Product", "Income"],
>>>>>>> 4ca596fe95273da02de94af89d6f160b8b73466c
  datasets: [
    {
      data: [68, 25, 7],
      backgroundColor: ["#4CAF50", "#FF9800", "#2196F3"],
      hoverBackgroundColor: ["#66BB6A", "#FFB74D", "#64B5F6"],
    },
  ],
};

<<<<<<< HEAD
// Dữ liệu cập nhật cho biểu đồ doanh thu hàng tháng
const barData = {
  labels: ["Th01", "Th02", "Th03", "Th04", "Th05", "Th06", "Th07", "Th08", "Th09"],
  datasets: [
    {
      label: "Doanh thu",
=======
// Updated data for the monthly revenue chart
const barData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
  datasets: [
    {
      label: "Revenue",
>>>>>>> 4ca596fe95273da02de94af89d6f160b8b73466c
      data: [10, 40, 30, 50, 20, 15, 20, 25, 10],
      backgroundColor: "#00bfae",
      borderColor: "#00bfae",
      borderWidth: 1,
    },
  ],
};

const DashboardContent = () => {
<<<<<<< HEAD
  const [totalIncome, setTotalIncome] = useState(0);
  const [orderCount, setOrderCount] = useState(0);
  const [customerCount, setCustomerCount] = useState(0);
  const [shippingCount, setShippingCount] = useState(0); // Giả sử bạn có API để lấy dữ liệu này

  useEffect(() => {
    const fetchData = async () => {
      try {
        const total = await fetchTotalPriceOrdersAPI();
        const orders = await fetchCountOrdersAPI();
        const customers = await fetchCountCustomerAPI();

        setTotalIncome(total);
        setOrderCount(orders);
        setCustomerCount(customers);
        // Nếu bạn có API để lấy số lượng đơn vận chuyển, hãy gọi ở đây
        // const shipping = await fetchCountShippingAPI();
        // setShippingCount(shipping);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Chuyển đổi số thành định dạng hàng triệu
  const formatCurrency = (value) => {
    if (value >= 1000000) {
      return (value / 1000000).toFixed(2) + " triệu đồng";
    }
    return value + " đồng";
  };

=======
>>>>>>> 4ca596fe95273da02de94af89d6f160b8b73466c
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
<<<<<<< HEAD
        <Typography variant="h5" gutterBottom>
          Thống kê
        </Typography>
        <Grid container spacing={3}>
          {/* Các chỉ số KPI */}
=======
        <Typography variant="h4" gutterBottom>
          Thống kê
        </Typography>
        <Grid container spacing={3}>
          {/* KPI Metrics */}
>>>>>>> 4ca596fe95273da02de94af89d6f160b8b73466c
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
<<<<<<< HEAD
              <Typography variant="h4">{formatCurrency(totalIncome)}</Typography>
=======
              <Typography variant="h4">$5,000</Typography>
>>>>>>> 4ca596fe95273da02de94af89d6f160b8b73466c
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
<<<<<<< HEAD
              <Typography variant="h4">{orderCount}</Typography>
=======
              <Typography variant="h4">200</Typography>
>>>>>>> 4ca596fe95273da02de94af89d6f160b8b73466c
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
<<<<<<< HEAD
              <Typography variant="h6">Khách hàng</Typography>
              <Typography variant="h4">{customerCount}</Typography>
=======
              <Typography variant="h6">Khách hàng mới</Typography>
              <Typography variant="h4">150</Typography>
>>>>>>> 4ca596fe95273da02de94af89d6f160b8b73466c
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
<<<<<<< HEAD
              <Typography variant="h4">{orderCount}</Typography>
            </Paper>
          </Grid>

          {/* Biểu đồ doanh số */}
=======
              <Typography variant="h4">75</Typography>
            </Paper>
          </Grid>

          {/* Sales Chart */}
>>>>>>> 4ca596fe95273da02de94af89d6f160b8b73466c
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
<<<<<<< HEAD
            </Paper>
          </Grid>

          {/* Biểu đồ doanh thu hàng tháng */}
=======
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
>>>>>>> 4ca596fe95273da02de94af89d6f160b8b73466c
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
<<<<<<< HEAD
            </Paper>
          </Grid>

          {/* Biểu đồ trạng thái đơn hàng */}
=======
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
>>>>>>> 4ca596fe95273da02de94af89d6f160b8b73466c
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

<<<<<<< HEAD
          {/* Doanh thu mạng xã hội */}
=======
          {/* Social Revenue */}
>>>>>>> 4ca596fe95273da02de94af89d6f160b8b73466c
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
<<<<<<< HEAD
              {/* Thay thế với biểu đồ hoặc biểu diễn dữ liệu phù hợp */}
            </Paper>
          </Grid>

          {/* Giao dịch */}
=======
              {/* Replace with appropriate chart or data representation */}
            </Paper>
          </Grid>

          {/* Transactions */}
>>>>>>> 4ca596fe95273da02de94af89d6f160b8b73466c
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
<<<<<<< HEAD
              {/* Thay thế với bảng hoặc biểu diễn dữ liệu phù hợp */}
=======
              {/* Replace with appropriate table or data representation */}
>>>>>>> 4ca596fe95273da02de94af89d6f160b8b73466c
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Dashboard>
  );
};

export default DashboardContent;
