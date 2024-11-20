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
import { updateCategoryAPI } from "../../../../apis";

const CategoryEdit = ({ open, onClose, category, onSave }) => {
  const [editedCategory, setEditedCategory] = useState(category);

  useEffect(() => {
    setEditedCategory(category);
  }, [category]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedCategory((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    try {
      const updatedCategory = await updateCategoryAPI(editedCategory.id, {
        name: editedCategory.name,
        description: editedCategory.description,
        isActive: editedCategory.isActive, // Assuming isActive is also updated
      });
      onSave(updatedCategory); // Pass updated category to parent component
      onClose(); // Close the drawer
    } catch (error) {
      console.error("Failed to update category:", error);
      // Handle error (e.g., show error message)
    }
  };

  const handleCancel = () => {
    onClose(); // Close the drawer
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
            Edit Category
          </Typography>
          <IconButton onClick={handleCancel}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Typography variant="body2" color="textSecondary" mb={3}>
          Update your category information here
        </Typography>
        <TextField
          fullWidth
          margin="normal"
          label="Category Name"
          name="name"
          value={editedCategory?.name || ""}
          onChange={handleChange}
          variant="filled"
          InputProps={{ style: { backgroundColor: "#f9f9f9" } }}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Description"
          name="description"
          value={editedCategory?.description || ""}
          onChange={handleChange}
          multiline
          rows={4}
          variant="filled"
          InputProps={{ style: { backgroundColor: "#f9f9f9" } }}
        />
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
            Lưu Thay Đổi
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
};

export default CategoryEdit;
