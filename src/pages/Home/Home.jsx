import React, { useEffect } from 'react';
import AppBarComponent from "../../Components/AppBar/AppBar";
import Footer from "../../Components/Footer/Footer";
import PartnerLogos from '../../Components/Footer/Partner/PartnerLogos';
import Promotion from './Promotion/Promotion';
import { Box, Grid, Card, CardContent, CardMedia, Typography, Toolbar } from '@mui/material';
import 'swiper/swiper-bundle.css';
import Swiper from 'swiper/bundle';
import ChatAI from '../../Components/ChatAI/ChatAI';


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
    new Swiper('.swiper-container', {
      slidesPerView: 6,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }, []);

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
                height="350"
                image="https://nuixanhfoods.vn/wp-content/uploads/2021/07/baner3.png" // Path to the uploaded image
                title="Rau Tươi Giảm Giá Lớn"
              />
              <CardContent
                style={{
                  position: 'absolute',
                  top: '20%',
                  left: '10%',
                  color: 'white',
                }}
              >
      <Toolbar />
               
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Box p={3}>
      <Typography variant="h5" component="div" style={{ fontWeight: 'bold',fontSize: '25px' }}>Danh mục nổi bật</Typography>
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
                    <Typography variant="h6" component="div" style={{ fontWeight: 'bold', textAlign:'center' }}>{category.title}</Typography>
                  <Typography variant="body2" color="textSecondary" style={{ fontWeight: 'bold', textAlign:'center' }}>{category.products} sản phẩm</Typography>
                </div>
              </div>
            ))}
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Box>
      <Promotion/>

      <PartnerLogos />
      <Footer />
      <ChatAI/>
    </div>
  );
};

export default Home;
