import { useState, useEffect } from "react";
import {
  Drawer,
  Box,
  TextField,
  Button,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { updateProductAPI } from "../../../../apis";

const ProductEdit = ({ open, onClose, product, onSave }) => {
  const [editedProduct, setEditedProduct] = useState({ ...product });

  useEffect(() => {
    setEditedProduct({ ...product });
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setEditedProduct((prev) => ({
          ...prev,
          image: e.target.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async () => {
    try {
      const updatedProduct = await updateProductAPI(editedProduct.id, editedProduct);
      onSave(updatedProduct);
      onClose();
    } catch (error) {
      console.error("Failed to update product:", error);
      // Handle error, show snackbar, etc.
    }
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <Drawer anchor="right" open={open} onClose={handleCancel}>
      <Box p={3} width="450px" display="flex" flexDirection="column">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Typography variant="h6" style={{ fontWeight: "bold" }}>
            Chỉnh sửa sản phẩm
          </Typography>
          <IconButton onClick={handleCancel}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Typography variant="body2" color="textSecondary" mb={3}>
          Cập nhật thông tin sản phẩm của bạn từ đây
        </Typography>
        <TextField
          fullWidth
          margin="normal"
          label="Tên sản phẩm"
          name="name"
          value={editedProduct.name || ""}
          onChange={handleChange}
          variant="filled"
          InputProps={{ style: { backgroundColor: "#f9f9f9" } }}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Ghi chú sản phẩm"
          name="description"
          value={editedProduct.description || ""}
          onChange={handleChange}
          multiline
          rows={4}
          variant="filled"
          InputProps={{ style: { backgroundColor: "#f9f9f9" } }}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Giá"
          name="price"
          value={editedProduct.price || ""}
          onChange={handleChange}
          variant="filled"
          InputProps={{ style: { backgroundColor: "#f9f9f9" } }}
        />
        <Button
          variant="contained"
          component="label"
          style={{
            backgroundColor: "#4caf50",
            marginTop: "16px",
          }}
        >
          Thêm/Sửa hình ảnh
          <input
            type="file"
            hidden
            accept="image/*"
            onChange={handleImageChange}
          />
        </Button>
        <Box display="flex" justifyContent="center" mt={2} mb={2}>
          <img
            src={editedProduct.image || "https://via.placeholder.com/150"}
            alt="Product"
            style={{ maxWidth: "100%", maxHeight: 200 }}
          />
        </Box>
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
            variant="contained"
            style={{
              backgroundColor: "#4caf50",
              padding: "10px 20px",
            }}
            onClick={handleSave}
          >
            Lưu thay đổi
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
};

export default ProductEdit;
