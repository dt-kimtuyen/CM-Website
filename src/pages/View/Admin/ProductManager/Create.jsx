import { useState, useEffect } from "react";
import {
  TextField,
  Button,
  AppBar,
  Toolbar,
  Typography,
  Container,
  Paper,
  Grid,
  Box,
  IconButton,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Snackbar,
  Alert,
} from "@mui/material";
import { useDropzone } from "react-dropzone";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import Dashboard from "../index";
<<<<<<< HEAD
import { CreateProductAPI, fetchAllCategoriesAPI } from "../../../../apis";
=======
import { CreateProductAPI, fetchAllCategoriesAPI } from "../../../../apis"; // Assuming getAllCategories API function
>>>>>>> 4ca596fe95273da02de94af89d6f160b8b73466c

const ProductCreate = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
<<<<<<< HEAD
  const [image, setImage] = useState(""); // Changed to store image as Data URL
  const [categories, setCategories] = useState([]);
  const [expirationDate, setExpirationDate] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [discount, setDiscount] = useState("");
  const [discountExpiration, setDiscountExpiration] = useState("");
=======
  const [files, setFiles] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState("");
>>>>>>> 4ca596fe95273da02de94af89d6f160b8b73466c
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });
  const navigate = useNavigate();

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
<<<<<<< HEAD
        const categoriesData = await fetchAllCategoriesAPI();
        setCategories(categoriesData);
=======
        const categoriesData = await fetchAllCategoriesAPI(); // Replace with your actual API call
        setCategories(categoriesData);
        // Set initial category ID if categories are available and not already set
>>>>>>> 4ca596fe95273da02de94af89d6f160b8b73466c
        if (categoriesData.length > 0 && !categoryId) {
          setCategoryId(categoriesData[0].id);
        }
      } catch (error) {
        console.error("Failed to fetch categories:", error);
<<<<<<< HEAD
=======
        // Handle error
>>>>>>> 4ca596fe95273da02de94af89d6f160b8b73466c
      }
    };

    fetchCategories();
<<<<<<< HEAD
  }, [categoryId]);

  // Image change handler
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result); // Set image as Data URL
      };
      reader.readAsDataURL(file);
    }
=======
  }, [categoryId]); // Include categoryId as dependency if needed for specific re-fetching logic

  const handleDrop = (acceptedFiles) => {
    setFiles(acceptedFiles);
>>>>>>> 4ca596fe95273da02de94af89d6f160b8b73466c
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
<<<<<<< HEAD

    // Validate form
    if (!title || !description || !price || !categoryId || !expirationDate) {
      setSnackbar({
        open: true,
        message: "Vui lòng điền tất cả các trường bắt buộc.",
        severity: "warning",
      });
      return;
    }

=======
>>>>>>> 4ca596fe95273da02de94af89d6f160b8b73466c
    const newProduct = {
      name: title,
      description: description,
      price: price,
<<<<<<< HEAD
      image: image, // Use Data URL for image
      category: {
        id: categoryId,
      },
      expirationDate: expirationDate,
      discount: discount,
      discountExpiration: discountExpiration,
    };

    try {
      await CreateProductAPI(newProduct);
=======
      image: files.length > 0 ? URL.createObjectURL(files[0]) : "", // Temporary image URL
      category: {
        id: categoryId,
      },
    };

    try {
      // Call your API to create the product
      await CreateProductAPI(newProduct);

>>>>>>> 4ca596fe95273da02de94af89d6f160b8b73466c
      setSnackbar({
        open: true,
        message: "Product created successfully!",
        severity: "success",
      });

<<<<<<< HEAD
      // Reset form
      setTitle("");
      setDescription("");
      setPrice("");
      setImage(""); // Clear image
      setDiscount("");
      setDiscountExpiration("");
=======
      // Optionally reset form fields
      setTitle("");
      setDescription("");
      setPrice("");
      setFiles([]);

      // Navigate to Product Manager or any other page
>>>>>>> 4ca596fe95273da02de94af89d6f160b8b73466c
      navigate("/admin/productManager");
    } catch (error) {
      console.error("Error creating product:", error);
      setSnackbar({
        open: true,
        message: "Failed to create product.",
        severity: "error",
      });
    }
  };

  const handleCancel = () => {
    navigate("/admin/productManager");
  };

<<<<<<< HEAD
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        handleImageChange({ target: { files: acceptedFiles } });
      }
    },
  });
=======
  const { getRootProps, getInputProps } = useDropzone({ onDrop: handleDrop });
>>>>>>> 4ca596fe95273da02de94af89d6f160b8b73466c

  return (
    <Dashboard>
      <Container>
        <Paper elevation={3}>
          <AppBar position="static" color="default">
            <Toolbar>
              <Typography variant="h6" style={{ flexGrow: 1 }}>
                Thêm Sản Phẩm
              </Typography>
              <IconButton onClick={handleCancel}>
                <CloseIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <Box p={3}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Tên sản phẩm"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    variant="filled"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    label="Chú thích sản phẩm"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    variant="filled"
                  />
                </Grid>
                <Grid item xs={12}>
                  <div
                    {...getRootProps()}
                    style={{
                      border: "1px dashed #ccc",
                      padding: 16,
                      textAlign: "center",
                    }}
                  >
<<<<<<< HEAD
                    <input
                      {...getInputProps()}
                      type="file"
                      hidden
                      accept="image/*"
                      onChange={handleImageChange}
                    />
=======
                    <input {...getInputProps()} />
>>>>>>> 4ca596fe95273da02de94af89d6f160b8b73466c
                    <Typography variant="body2">
                      Kéo hình ảnh của bạn vào đây (Chỉ *.jpeg, *.webp và *.png hình ảnh sẽ được chấp nhận)
                    </Typography>
                  </div>
<<<<<<< HEAD
                  {image && (
                    <Box mt={2}>
                      <img
                        src={image}
                        alt="Selected"
                        style={{ width: "100px", height: "100px", objectFit: "cover" }}
                      />
                    </Box>
                     )}
=======
>>>>>>> 4ca596fe95273da02de94af89d6f160b8b73466c
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Giá sản phẩm"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                    variant="filled"
<<<<<<< HEAD
                    type="number" // Ensure numeric input
=======
>>>>>>> 4ca596fe95273da02de94af89d6f160b8b73466c
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth variant="filled" required>
                    <InputLabel id="category-label">Danh mục</InputLabel>
                    <Select
                      labelId="category-label"
                      value={categoryId}
                      onChange={(e) => setCategoryId(e.target.value)}
                    >
<<<<<<< HEAD
=======
                      {/* Render categories as options */}
>>>>>>> 4ca596fe95273da02de94af89d6f160b8b73466c
                      {categories.map((category) => (
                        <MenuItem key={category.id} value={category.id}>
                          {category.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
<<<<<<< HEAD
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Hạn sử dụng"
                    type="date"
                    value={expirationDate}
                    onChange={(e) => setExpirationDate(e.target.value)}
                    variant="filled"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Phần trăm khuyến mãi (%)"
                    value={discount}
                    onChange={(e) => setDiscount(e.target.value)}
                    type="number"
                    variant="filled"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Ngày hết hạn khuyến mãi"
                    type="datetime-local"
                    value={discountExpiration}
                    onChange={(e) => setDiscountExpiration(e.target.value)}
                    variant="filled"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
=======
>>>>>>> 4ca596fe95273da02de94af89d6f160b8b73466c
              </Grid>
              <Box mt={3} display="flex" justifyContent="space-between">
                <Button
                  onClick={handleCancel}
                  variant="outlined"
                  style={{
                    borderColor: "#ff4d4f",
                    color: "#ff4d4f",
                    padding: "10px 20px",
                  }}
                >
                  Hủy
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  style={{
                    backgroundColor: "#4caf50",
                    color: "white",
                    padding: "10px 20px",
                  }}
                >
                  Thêm Sản Phẩm
                </Button>
              </Box>
            </form>
          </Box>
        </Paper>
      </Container>
<<<<<<< HEAD
=======
      {/* Snackbar for showing success or error messages */}
>>>>>>> 4ca596fe95273da02de94af89d6f160b8b73466c
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
    </Dashboard>
  );
};

export default ProductCreate;
