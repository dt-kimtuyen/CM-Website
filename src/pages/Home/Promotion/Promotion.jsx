import React from 'react';
import { Box, Grid, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import 'swiper/swiper-bundle.css';

const promotions = [
    {
      title: "Lúc lắc bò Kobe",
      discount: "4%",
      sold: "172/300",
      price: "180.000₫",
      originalPrice: "188.000₫",
      image: "https://bizweb.dktcdn.net/thumb/large/100/514/629/products/bo-luc-lac-kobe.jpg?v=1713512844873",
    },
    {
      title: "Hành tây",
      discount: "17%",
      sold: "112/160",
      price: "120.000₫",
      originalPrice: "145.000₫",
      image: "https://bizweb.dktcdn.net/thumb/large/100/514/629/products/hanh-tay12.jpg?v=1715069895337", // Replace with actual path
    },
    {
      title: "Bún gạo khô",
      discount: "10%",
      sold: "140/195",
      price: "89.000₫",
      originalPrice: "99.000₫",
      image: "https://bizweb.dktcdn.net/thumb/large/100/514/629/products/bun-gao-kho.jpg?v=1713598826507", // Replace with actual path
    },
    {
      title: "Ngò rí",
      discount: "16%",
      sold: "50/90",
      price: "21.000₫",
      originalPrice: "25.000₫",
      image: "https://bizweb.dktcdn.net/thumb/large/100/514/629/products/ngo-ri.jpg?v=1712912315410", // Replace with actual path
    },
    {
      title: "Cải thìa hữu cơ",
      discount: "13%",
      sold: "160/200",
      price: "26.000₫",
      originalPrice: "30.000₫",
      image: "https://bizweb.dktcdn.net/thumb/large/100/514/629/products/cai-thia-huu-co.jpg?v=1712823878203", // Replace with actual path
    },
    {
      title: "Cà rốt hữu cơ",
      discount: "15%",
      sold: "10/50",
      price: "44.000₫",
      originalPrice: "52.000₫",
      image: "https://bizweb.dktcdn.net/thumb/large/100/514/629/products/ca-rot-donduong.jpg?v=1712829533363", // Replace with actual path
    },
  ];
  

const Promotion = () => {
  return (
    <Box sx={{ p: 3, maxWidth: '100%'}}>

      <Box sx={{ backgroundColor: '#008b4b', width: '100%', height: '100%',  }} />
      <Box sx={{ marginBottom: '25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' ,backgroundColor: '#008b4b',padding:'15px'}}>
        <Box>
          <Typography variant="h5" component="div" sx={{ fontSize: '30px', fontWeight: 'bold', color: '#f8c144', mb: 1  }}>
            Khuyến mãi đặc biệt <img width="32" height="32" src="//bizweb.dktcdn.net/100/514/629/themes/951567/assets/flash.png?1716945232631" alt="Khuyến mãi đặc biệt" />
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '10px' ,color: '#ffff'}}>
            Đừng bỏ lỡ cơ hội giảm giá đặc biệt!
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: '#fff', padding: '5px', borderRadius: '5px', }}>
          <Box sx={{ marginRight: '10px' }}>
            <Typography variant="h6">07</Typography><span>Ngày</span>
          </Box>
          <Box sx={{ marginRight: '10px' }}>
            <Typography variant="h6">12</Typography><span>Giờ</span>
          </Box>
          <Box sx={{ marginRight: '10px' }}>
            <Typography variant="h6">16</Typography><span>Phút</span>
          </Box>
          <Box>
            <Typography variant="h6">45</Typography><span>Giây</span>
          </Box>
        </Box>
      </Box>
      <Grid container spacing={3} sx={{ marginLeft:"2px",backgroundColor: '#fff' , border: '2px dashed #008b4b', maxWidth: "100%"}}>
        {promotions.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ position: 'relative', overflow: 'hidden', transition: 'all 0.3s ease', backgroundColor: '#fff' }}>
              <Box sx={{ display: 'flex' }}>
                <Box sx={{ flex: 1 }}>
                  <CardMedia
                    component="img"
                    alt={item.title}
                    height="150"
                    width="150"
                    image={item.image}
                    title={item.title}
                    sx={{ objectFit: 'cover', transition: 'transform 0.3s ease', '&:hover': { transform: 'scale(1.1)' }, backgroundColor: '#fff' }}
                  />
                  <Box sx={{ position: 'absolute', top: '10px', left: '10px', background: 'red', color: '#fff', padding: '6px', borderRadius: '100px' }}>
                    {item.discount}
                  </Box>
                </Box>
                <Box sx={{ flex: 1 }}>
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div" sx={{ fontSize: '18px', fontWeight: 'bold' }}>
                      <a href="#" title={item.title} style={{ textDecoration: 'none', color: 'inherit' }}>{item.title}</a>
                    </Typography>
                    <Typography variant="body2" color="textSecondary" sx={{ fontSize: '16px', color: '#f00' }}>
                      {item.price} <span style={{ textDecoration: 'line-through', color: '#999' }}>{item.originalPrice}</span>
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Đã bán: {item.sold}
                    </Typography>
                    <Button variant="contained" sx={{ mt: 2, backgroundColor: '#008000', color: '#fff', fontSize: '14px' }}>Thêm vào giỏ</Button>

                  </CardContent>
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Promotion;
