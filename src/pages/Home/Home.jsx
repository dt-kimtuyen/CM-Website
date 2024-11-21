<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
=======
import React, { useEffect } from 'react';
>>>>>>> 4ca596fe95273da02de94af89d6f160b8b73466c
import AppBarComponent from "../../Components/AppBar/AppBar";
import Footer from "../../Components/Footer/Footer";
import PartnerLogos from '../../Components/Footer/Partner/PartnerLogos';
import Promotion from './Promotion/Promotion';
import { Box, Grid, Card, CardContent, CardMedia, Typography, Toolbar } from '@mui/material';
import 'swiper/swiper-bundle.css';
import Swiper from 'swiper/bundle';
import ChatAI from '../../Components/ChatAI/ChatAI';
<<<<<<< HEAD
import { fetchCountCategoriesAPI } from '../../apis';

const Home = () => {
  const [categories, setCategories] = useState([
    { title: 'MEN', image: 'https://res.cloudinary.com/dccqifics/image/upload/f_auto,q_auto/phq4rvzgkqjphkig3wyd.jpg', products: 0 },
    { title: 'WOMEN', image: 'https://res.cloudinary.com/dccqifics/image/upload/f_auto,q_auto/zectzxphobgqfpnsb02s.jpg', products: 0 },
    { title: 'KIDS', image: 'https://res.cloudinary.com/dccqifics/image/upload/f_auto,q_auto/j0y0gerc9amawaopvjbs.jpg', products: 0 },
    { title: 'ACCESSORIES', image: 'https://res.cloudinary.com/dccqifics/image/upload/f_auto,q_auto/or5widtk6qisbt4wgp8q.jpg', products: 0 },
    { title: 'SHOES', image: 'https://res.cloudinary.com/dccqifics/image/upload/f_auto,q_auto/yfohyiikfbwvpyp9dige.jpg', products: 0 },
    { title: 'CLEARANCE', image: 'https://res.cloudinary.com/dccqifics/image/upload/f_auto,q_auto/xivurdfsfqapfa11w30e.jpg', products: 0 },
  ]);

  useEffect(() => {
    const fetchCategoryCounts = async () => {
      const data = await fetchCountCategoriesAPI();
      
      // Ánh xạ danh mục từ API vào categories dựa trên "categoryName"
      const updatedCategories = categories.map((category) => {
        const matchingCategory = data.find((item) => item.categoryName === category.title);
        return {
          ...category,
          products: matchingCategory ? matchingCategory.productCount : 0, // Cập nhật số lượng hoặc giữ 0 nếu không có
        };
      });

      setCategories(updatedCategories);
    };

    fetchCategoryCounts();

    // Khởi tạo Swiper
=======


const categories = [
  { title: 'Rau củ', image: 'https://bizweb.dktcdn.net/100/514/629/themes/951567/assets/danhmuc_1.png?1716945232631', products: 17 },
  { title: 'Trái cây', image: 'https://bizweb.dktcdn.net/100/514/629/themes/951567/assets/danhmuc_2.png?1716945232631', products: 12 },
  { title: 'Thịt', image: 'https://bizweb.dktcdn.net/100/514/629/themes/951567/assets/danhmuc_3.png?1716945232631', products: 10 },
  { title: 'Trứng', image: 'https://bizweb.dktcdn.net/100/514/629/themes/951567/assets/danhmuc_4.png?1716945232631', products: 8 },
  { title: 'Đồ uống', image: 'https://bizweb.dktcdn.net/100/514/629/themes/951567/assets/danhmuc_5.png?1716945232631', products: 11 },
  { title: 'Bánh và sữa', image: 'https://bizweb.dktcdn.net/100/514/629/themes/951567/assets/danhmuc_6.png?1716945232631', products: 0 },
];

const Home = () => {
  useEffect(() => {
>>>>>>> 4ca596fe95273da02de94af89d6f160b8b73466c
    new Swiper('.swiper-container', {
      slidesPerView: 6,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
<<<<<<< HEAD
  }, []); // Chỉ chạy 1 lần khi component mount
=======
  }, []);
>>>>>>> 4ca596fe95273da02de94af89d6f160b8b73466c

  return (
    <div>
      <AppBarComponent />
      <Box p={3}>
        <Grid container spacing={3}>
          {/* Main promotional banner */}
          <Grid item xs={12}>
            <Card style={{ position: 'relative' }}>
              <CardMedia
                component="img"
                alt="Promotion"
<<<<<<< HEAD
                height="450"
                image="https://res.cloudinary.com/dccqifics/image/upload/f_auto,q_auto/qmt5gjn2ova4rnakgkl2.jpg" // Path to the uploaded image
                title="Clothing Giảm Giá Lớn"
=======
                height="350"
                image="https://nuixanhfoods.vn/wp-content/uploads/2021/07/baner3.png" // Path to the uploaded image
                title="Rau Tươi Giảm Giá Lớn"
>>>>>>> 4ca596fe95273da02de94af89d6f160b8b73466c
              />
              <CardContent
                style={{
                  position: 'absolute',
                  top: '20%',
                  left: '10%',
                  color: 'white',
                }}
              >
<<<<<<< HEAD
                <Toolbar />
=======
      <Toolbar />
               
>>>>>>> 4ca596fe95273da02de94af89d6f160b8b73466c
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
<<<<<<< HEAD

      <Box p={3}>
        <Typography variant="h5" component="div" style={{ fontWeight: 'bold', fontSize: '25px' }}>
          Danh mục nổi bật
        </Typography>
=======
      <Box p={3}>
      <Typography variant="h5" component="div" style={{ fontWeight: 'bold',fontSize: '25px' }}>Danh mục nổi bật</Typography>
>>>>>>> 4ca596fe95273da02de94af89d6f160b8b73466c
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {categories.map((category, index) => (
              <div
                key={index}
                className="swiper-slide"
                style={{
                  backgroundColor: '#f4f6fa',
                  borderRadius: '10px',
                  padding: '5px',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  width: '120px',
                  height: '150px',
                }}
              >
                <div className="item-cate">
                  <img
                    src={category.image}
                    alt={category.title}
                    style={{
                      borderRadius: '100%',
                      width: '100px',
                      height: '100px',
                    }}
                  />
<<<<<<< HEAD
                  <Typography variant="h6" component="div" style={{ fontWeight: 'bold', textAlign: 'center' }}>
                    {category.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" style={{ fontWeight: 'bold', textAlign: 'center' }}>
                    {category.products} sản phẩm
                  </Typography>
=======
                    <Typography variant="h6" component="div" style={{ fontWeight: 'bold', textAlign:'center' }}>{category.title}</Typography>
                  <Typography variant="body2" color="textSecondary" style={{ fontWeight: 'bold', textAlign:'center' }}>{category.products} sản phẩm</Typography>
>>>>>>> 4ca596fe95273da02de94af89d6f160b8b73466c
                </div>
              </div>
            ))}
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Box>
<<<<<<< HEAD

      <Promotion />
      <PartnerLogos />
      <Footer />
      <ChatAI />
=======
      <Promotion/>

      <PartnerLogos />
      <Footer />
      <ChatAI/>
>>>>>>> 4ca596fe95273da02de94af89d6f160b8b73466c
    </div>
  );
};

<<<<<<< HEAD
export default Home;
=======
export default Home;
>>>>>>> 4ca596fe95273da02de94af89d6f160b8b73466c
