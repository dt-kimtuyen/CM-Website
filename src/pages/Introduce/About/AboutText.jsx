/* eslint-disable no-unused-vars */
import React from 'react';

function AboutText() {

  const sectionStyle = {
    textAlign: 'center',
    padding: '50px 0',
    width: '100%',
    boxSizing: 'border-box'
  };

  const headingStyle = {
    fontSize: '40px',
    color: '#f1c40f', // Giữ nguyên màu chữ
    margin: 0
  };

  const paragraphStyle_Text = {
    fontSize: '16px',
    color: 'grey', // Giữ nguyên màu chữ
    marginTop: '20px',
    maxWidth: '800px',
    marginLeft: 'auto',
    marginRight: 'auto'
  };

  return (
    <div>
      <div style={sectionStyle}>
        <h1 style={headingStyle}>Tại sao chọn thời trang của chúng tôi</h1>
        <p style={paragraphStyle_Text}>
          Chúng tôi tự hào cung cấp những bộ sưu tập thời trang chất lượng, độc đáo và hợp xu hướng. Với sự chú trọng đến từng chi tiết và phong cách thiết kế sáng tạo, chúng tôi cam kết mang đến cho khách hàng trải nghiệm mua sắm hoàn hảo và sản phẩm bền vững.
        </p>
      </div>
    </div>
  );
}

export default AboutText;
