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
import { CreateProductAPI, fetchAllCategoriesAPI } from "../../../../apis"; // Assuming getAllCategories API function

const ProductCreate = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [files, setFiles] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState("");
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
        const categoriesData = await fetchAllCategoriesAPI(); // Replace with your actual API call
        setCategories(categoriesData);
        // Set initial category ID if categories are available and not already set
        if (categoriesData.length > 0 && !categoryId) {
          setCategoryId(categoriesData[0].id);
        }
      } catch (error) {
        console.error("Failed to fetch categories:", error);
        // Handle error
      }
    };

    fetchCategories();
  }, [categoryId]); // Include categoryId as dependency if needed for specific re-fetching logic

  const handleDrop = (acceptedFiles) => {
    setFiles(acceptedFiles);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProduct = {
      name: title,
      description: description,
      price: price,
      image: files.length > 0 ? URL.createObjectURL(files[0]) : "", // Temporary image URL
      category: {
        id: categoryId,
      },
    };

    try {
      // Call your API to create the product
      await CreateProductAPI(newProduct);

      setSnackbar({
        open: true,
        message: "Product created successfully!",
        severity: "success",
      });

      // Optionally reset form fields
      setTitle("");
      setDescription("");
      setPrice("");
      setFiles([]);

      // Navigate to Product Manager or any other page
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

  const { getRootProps, getInputProps } = useDropzone({ onDrop: handleDrop });

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
                    <input {...getInputProps()} />
                    <Typography variant="body2">
                      Kéo hình ảnh của bạn vào đây (Chỉ *.jpeg, *.webp và *.png hình ảnh sẽ được chấp nhận)
                    </Typography>
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Giá sản phẩm"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                    variant="filled"
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
                      {/* Render categories as options */}
                      {categories.map((category) => (
                        <MenuItem key={category.id} value={category.id}>
                          {category.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
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
      {/* Snackbar for showing success or error messages */}
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
