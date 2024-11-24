/* eslint-disable no-unused-vars */
import React from 'react';


const AboutLabel = () => {
  const sectionStyle = {
    textAlign: 'center',
    padding: '50px 0',
    width: '100%',
    boxSizing: 'border-box',
  };

  const headingStyle = {
    fontSize: '40px',
    color: '#f1c40f',
    margin: 0
  };

  const paragraphStyle = {
    fontSize: '18px',
    color: 'grey',
    marginTop: '20px',
    maxWidth: '800px',
    marginLeft: 'auto',
    marginRight: 'auto',
  };

  const cardContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: '50px',
    width: '100%',
    boxSizing: 'border-box',
  };

  const cardStyle = {
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    padding: '20px',
    margin: '10px',
    flex: '0 0 calc(33.333% - 20px)',
    boxSizing: 'border-box'
  };

  const cardHeadingStyle = {
    fontSize: '24px',
    color: '#000000', // Thay đổi màu văn bản thành màu cam
    margin: '20px 0 10px 0'
  };

  const cardParagraphStyle = {
    fontSize: '16px',
    color: '#000000', // Thay đổi màu văn bản thành màu cam
    margin: '10px 0 0 0'
  };

  const icon = {
    width: '50px',
    height: '50px',
    margin: '0 5px'
  };

  const cardIconStyle = {
    fontSize: '40px',
    color: '#000000',
    marginBottom: '20px'
  };


  return (
    <div>
      <div style={cardContainerStyle}>
        <div style={cardStyle}>
          {/* <div style={cardIconStyle}>🏪</div> */}
          <img src="https://bizweb.dktcdn.net/100/514/629/themes/951567/assets/dichvu_1.png?1716945232631" alt="Chất lượng và tươi xanh" style={icon} />
          <h3 style={cardHeadingStyle}>PHONG CÁCH ĐƯỜNG PHỐ</h3>
          <p style={cardParagraphStyle}>Trang phục năng động, phù hợp với phong cách sống hiện đại.</p>
        </div>
        <div style={cardStyle}>
        <img src="https://bizweb.dktcdn.net/100/514/629/themes/951567/assets/dichvu_2.png?1716945232631" alt="Chất lượng và tươi xanh" style={icon} />
          <h3 style={cardHeadingStyle}>THỜI TRANG CÔNG SỞ</h3>
          <p style={cardParagraphStyle}>Đem đến sự thanh lịch và chuyên nghiệp trong môi trường làm việc.</p>
        </div>
        <div style={cardStyle}>
        <img src="https://bizweb.dktcdn.net/100/514/629/themes/951567/assets/dichvu_3.png?1716945232631" alt="Chất lượng và tươi xanh" style={icon} />
          <h3 style={cardHeadingStyle}>THỜI TRANG MÙA HÈ</h3>
          <p style={cardParagraphStyle}>Sản phẩm thoải mái, nhẹ nhàng, phù hợp cho những ngày hè oi ả</p>
        </div>
      </div>
    </div>
  );
};

export default AboutLabel;

// bizweb.dktcdn.net/100/514/629/themes/951567/assets/dichvu_3.png?1716945232631