/* eslint-disable no-unused-vars */
import React from 'react';
import AppBarComponent from '../../Components/AppBar/AppBar';
import Footer from '../../Components/Footer/Footer';
import AboutStore from './About/AboutStore';
import AboutText from './About/AboutText';
import AboutLabel from './About/AboutLabel';
import ChatAI from '../../Components/ChatAI/ChatAI';

const Introduce = () => {
  return (
    <>
    <AppBarComponent/>
    <div style={styles.container}>
      <section style={styles.section}>
      <img 
    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDg5NjR8MHwxfGFsbHwxfHx8fHx8fHwxNjE3MzAxNzk0&ixlib=rb-1.2.1&q=80&w=1080" 
    alt="Thời trang nữ" 
    style={{ width: '400px', height: '400px',marginRight:'20px' ,objectFit: 'cover', borderRadius: '10px',}} 
/>
        <div style={styles.textBlock}>
          <h2 style={styles.title}>CM FASHION</h2>
          <h3 style={styles.subtitle}>Phong Cách và Chất Lượng</h3>
          <p style={styles.paragraph}>
          CM FASHION mang đến những bộ trang phục thời trang chất lượng cao, được tuyển chọn từ các nhà thiết kế hàng đầu. Chúng tôi không ngừng đổi mới, cập nhật các xu hướng thời trang quốc tế để mang lại trải nghiệm mua sắm đẳng cấp cho khách hàng .
          </p>
        </div>
      </section>
      <div style={styles.containerStyle}>
      <div style={styles.textSectionStyle}>
        <h2 style={styles.heading2Style}>TẦM NHÌN</h2>
        <h1 style={styles.heading1Style}>Tầm nhìn của chúng tôi</h1>
        <p style={styles.paragraphStyle}>
        Chúng tôi mong muốn trở thành thương hiệu thời trang dẫn đầu trong khu vực Đông Nam Á, mang lại sự tự tin và phong cách cho mọi khách hàng thông qua các sản phẩm thời trang tinh tế và chất lượng cao.
        </p>
      </div>
      <div style={styles.imageSectionStyle}>
        <img
          src="https://bizweb.dktcdn.net/100/514/629/themes/951567/assets/about4_banner.jpg?1716945232631"
          alt="Tầm nhìn"
          style={styles.imageStyle}
        />
      </div>
    </div>
    <section style={styles.section}>
        <img src="https://bizweb.dktcdn.net/100/514/629/themes/951567/assets/about5_banner.jpg?1716945232631" alt="Chất lượng và tươi xanh" style={styles.image} />
        <div style={styles.textBlock}>
          <h2 style={styles.heading2Style}>MỤC TIÊU</h2>
          <h3 style={styles.heading1Style}>Mục tiêu của chúng tôi</h3>
          <p style={styles.paragraph}>
          Trong tương lai, CM FASHION hướng đến việc mở rộng hệ thống cửa hàng tại các thành phố lớn trên cả nước, cung cấp dịch vụ mua sắm thời trang online thuận tiện và chuyên nghiệp, đồng thời nâng cao trải nghiệm mua sắm của khách hàng bằng các bộ sưu tập thời trang độc đáo.
          </p>
        </div>
      </section>
      <AboutStore/>
      <AboutText/>
      <AboutLabel/>
    </div>
    <ChatAI/>
    <Footer/>
    </>
  );
};
        
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: 'white',
    color: '#000000',
  },
  section: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '40px',
    width: '100%',
    backgroundColor: 'white',
  },
  image: {
    width: '40%',
    marginRight: '20px',
    marginLeft : '200px',
    borderRadius : '8px'
  },
  textBlock: {
    width: '50%',
  },
  title: {
    color: '#FFC0CB',
    fontSize: '24px',
    marginBottom: '10px',
  },
  subtitle: {
    color: '#000000',
    fontSize: '20px',
    marginBottom: '20px',
  },
  paragraph: {
    color: '#000000',
  },
 // card 2 
    containerStyle : {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '20px'
      },
    
       textSectionStyle : {
        flex: 1,
        paddingRight: '20px',
        marginLeft : '200px',
      },
    
      heading2Style : {
        fontSize: '24px',
        fontWeight: 'bold',
        margin: 0,
        color: '#FFC0CB',
      
      },
    
       heading1Style : {
        fontSize: '30px',
        color: '#000000',
        margin: '10px 0'
      },
    
       paragraphStyle : {
        fontSize: '16px',
        lineHeight: 1.5,
        marginRight : '50px'
      },
    
      imageSectionStyle : {
        width : '45%',
         borderRadius : '8px',
        paddingRight : '50px'
      },
    
       imageStyle : {
        width: '100%',
        borderRadius: '8px'
      },


}



export default Introduce; 