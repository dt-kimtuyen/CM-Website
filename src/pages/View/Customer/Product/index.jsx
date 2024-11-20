import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  FormControl,
  FormControlLabel,
  Checkbox,
  List,
  ListItem,
  ListItemText,
  Divider,
  IconButton,
  MenuItem,
  Select
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import { toast } from 'react-toastify';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import AppBarComponent from '../../../../Components/AppBar/AppBar';
import Footer from '../../../../Components/Footer/Footer';
import { fetchAllProductsAPI,addToCartAPI } from '../../../../apis';
import ChatAI from '../../../../Components/ChatAI/ChatAI';

const Product = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [sortOption, setSortOption] = useState('default');
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await fetchAllProductsAPI();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const addToCartHandler = async (productId) => {
    try {
      const accountId = localStorage.getItem('id');
      const quantity = 1;  // Example: You can adjust quantity as needed
      const data = await addToCartAPI(productId, quantity,accountId);
      toast.success("Bạn đã thêm sản phẩm vào giỏ hàng");
      navigate('/customer/ShoppingCart')
    } catch (error) {
      console.error('Error adding to cart:', error); // Display error message to user
    }
  };
  
  
  
  
  
 useEffect(() => {
  const sortProducts = () => {
    switch (sortOption) {
      case 'asc':
        return [...products].sort((a, b) => a.name.localeCompare(b.name));
      case 'desc':
        return [...products].sort((a, b) => b.name.localeCompare(a.name));
      case 'priceAsc':
        return [...products].sort((a, b) => a.price - b.price);
      case 'priceDesc':
        return [...products].sort((a, b) => b.price - a.price);
      case 'newest':
        return [...products].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      case 'oldest':
        return [...products].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
      default:
        return [...products]; // Giữ nguyên thứ tự ban đầu khi sortOption là 'default'
    }
  };

  setProducts(sortProducts());
}, [sortOption, products]);


  const handleMouseEnter = (index) => {
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
    // Add sorting logic here if needed
  };

  return (
    <>
      <AppBarComponent />
      <Container sx={{ marginTop: 2 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <Box
              sx={{
                backgroundColor: '#f8f9fa',
                padding: '16px',
                borderRadius: '4px',
              }}
            >
              <Typography variant="h6" sx={{ 
                padding: "10px",
                fontWeight: 'bold',
                backgroundColor: '#008b4b',
                color:"white",
                fontSize:"20px"
              }}>
                Danh mục sản phẩm
              </Typography>
              <List component="nav" aria-label="product categories">
                {['Rau củ quả', 'Trái cây', 'Thịt và hải sản', 'Đồ khô', 'Thức uống', 'Sản phẩm chế biến'].map((text, index) => (
                  <ListItem button key={index} sx={{
                    '&:hover': {
                      backgroundColor: '#d4edda',
                      color: '#008b4b',
                    }
                  }}>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
              <Divider sx={{ marginY: 2 }} />
              <Box sx={{ marginBottom: '24px' }}>
                <Typography variant="h6" sx={{ 
                  padding: "10px",
                  marginBottom: '16px', 
                  fontWeight: 'bold' ,
                  backgroundColor: '#008b4b',
                  color:"white",
                  fontSize:"20px"
                }}>
                  Bộ lọc sản phẩm
                </Typography>
                <FormControl component="fieldset">
                  <Typography variant="subtitle1" sx={{fontWeight: 'bold' }}>Chọn mức giá</Typography>
                  <FormControlLabel control={<Checkbox name="price1" />} label="Dưới 100.000đ" />
                  <FormControlLabel control={<Checkbox name="price2" />} label="Từ 100.000đ - 200.000đ" />
                  <FormControlLabel control={<Checkbox name="price3" />} label="Từ 200.000đ - 300.000đ" />
                  <FormControlLabel control={<Checkbox name="price4" />} label="Từ 300.000đ - 500.000đ" />
                </FormControl>
                <Divider sx={{ marginY: 2 }} />
                <FormControl component="fieldset">
                  <Typography variant="subtitle1" sx={{fontWeight: 'bold' ,}}>Loại</Typography>
                  <FormControlLabel control={<Checkbox name="type1" />} label="Bột làm bánh" />
                  <FormControlLabel control={<Checkbox name="type2" />} label="Bún các loại" />
                  <FormControlLabel control={<Checkbox name="type3" />} label="Chè mứt" />
                  <FormControlLabel control={<Checkbox name="type4" />} label="Đậu các loại" />
                  <FormControlLabel control={<Checkbox name="type5" />} label="Dầu thực vật" />
                  <FormControlLabel control={<Checkbox name="type6" />} label="Dầu ăn đóng chai" />
                </FormControl>
                <Divider sx={{ marginY: 2 }} />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={9}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            sx={{
              marginBottom: 3,
              borderBottom: '1px solid #e0e0e0',
              paddingBottom: 2,
            }}
          >
            <Typography variant="h4" component="h1" sx={{ fontSize: '28px' }}>
              Tất cả sản phẩm
            </Typography>
            <FormControl variant="outlined" sx={{ minWidth: 200 }}>
              <Select
                value={sortOption}
                onChange={handleSortChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Sort products' }}
                sx={{ backgroundColor: '#f8f9fa' }}
              >
                <MenuItem value="default">Mặc định</MenuItem>
                <MenuItem value="asc">A → Z</MenuItem>
                <MenuItem value="desc">Z → A</MenuItem>
                <MenuItem value="priceAsc">Giá tăng dần</MenuItem>
                <MenuItem value="priceDesc">Giá giảm dần</MenuItem>
                <MenuItem value="newest">Hàng mới nhất</MenuItem>
                <MenuItem value="oldest">Hàng cũ nhất</MenuItem>
              </Select>
            </FormControl>
          </Box>

            <Grid container spacing={3}>
              {products.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    sx={{
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 0.3s ease',
                      backgroundColor: '#fff',
                      height: '100%',
                    }}
                  >
                    <Box
                      sx={{
                        position: 'relative',
                        overflow: 'hidden',
                        height: '192px',
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <CardMedia
                        component="img"
                        alt={item.name}
                        height="192"
                        image={item.image}
                        title={item.name}
                        sx={{
                          objectFit: 'cover',
                          transition: 'transform 0.3s ease',
                          '&:hover': { transform: 'scale(1.1)' },
                        }}
                      />
                      {item.discount && (
                        <Box
                          sx={{
                            position: 'absolute',
                            top: '10px',
                            left: '10px',
                            background: 'red',
                            color: '#fff',
                            padding: '6px',
                            borderRadius: '100px',
                          }}
                        >
                          {item.discount}
                        </Box>
                      )}
                      {hoveredItem === index && (
                        <Box
                          sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            display: 'flex',
                            justifyContent: 'center',
                          }}
                        >
                          <IconButton
                            aria-label="add to favorites"
                            size="small"
                            sx={{ backgroundColor: 'white', '&:hover': { backgroundColor: '#008b4b' } }}
                          >
                            <FavoriteBorderOutlinedIcon fontSize="small" />
                          </IconButton>
                          <IconButton
                            aria-label="quick view"
                            size="small"
                            sx={{ backgroundColor: 'white', '&:hover': { backgroundColor: '#008b4b' } }}
                          >
                            <VisibilityOutlinedIcon fontSize="small" />
                          </IconButton>
                          <IconButton
                            aria-label="add to cart"
                            size="small"
                            sx={{ backgroundColor: 'white', '&:hover': { backgroundColor: '#008b4b' } }}
                            onClick={() => addToCartHandler(item.id)} 
                          >
                            <ShoppingBagOutlinedIcon fontSize="small" />
                          </IconButton>
                        </Box>
                      )}
                    </Box>
                    <CardContent sx={{ padding: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <Typography gutterBottom variant="h6" component="div" sx={{ fontSize: '18px', fontWeight: 'bold' }}>
                        <a href="#" title={item.name} style={{ textDecoration: 'none', color: 'inherit' }}>
                          {item.name}
                        </a>
                      </Typography>
                      <Typography variant="body2" sx={{ fontSize: '16px', color: '#f00' }}>
                      {item.price}đ {item.originalPrice && <span style={{ textDecoration: 'line-through', color: '#999' }}>{item.originalPrice}đ</span>}
                    </Typography>
                        <Button variant="contained" sx={{ mt: 2, backgroundColor: '#008b4b', color: '#fff', fontSize: '14px' }} onClick={() => addToCartHandler(item.id)}>
                          Thêm vào giỏ
                        </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <ChatAI/>
      <Footer />
    </>
  );
};

export default Product;
