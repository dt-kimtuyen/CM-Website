import React, { useState } from 'react';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { loginAPI } from '../../../apis';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import AppBar from '../../AppBar/AppBar';
import Footer from '../../Footer/Footer';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginAPI(formData); // Make sure loginAPI returns the parsed JSON response
      setFormData({
        email: '',
        password: ''
      });
      
      const id = response.id;
      localStorage.setItem('id', id);
      toast.success(response.message || 'Đăng nhập thành công');
      login(id); // Update the auth context with id
      navigate('/'); // Navigate to the homepage on successful login
    } catch (error) {
      toast.error('Login failed. Please try again.');
    }
  };

  const handleFacebookLogin = () => {
    // Handle Facebook login
  };

  const handleGoogleLogin = () => {
    // Handle Google login
  };

  const linkStyle = {
    color: '#f9ca24',
    cursor: 'pointer',
  };

  return (
    <>
      <AppBar />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
        <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '300px' }} onSubmit={handleSubmit}>
          <button
            style={{ background: 'none', border: 'none', padding: '10px 20px', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold', borderBottom: '2px solid #7bed9f' }}
          >
            Đăng Nhập
          </button>
          <input
            type="email"
            name="email"
            placeholder="Nhập Email"
            value={formData.email}
            onChange={handleInputChange}
            required
            style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px', boxSizing: 'border-box' }}
          />
          <input
            type="password"
            name="password"
            placeholder="Nhập Mật Khẩu"
            value={formData.password}
            onChange={handleInputChange}
            required
            style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px', boxSizing: 'border-box' }}
          />
          <div style={{ marginBottom: '10px' }}>
            <a href="" style={{ textDecoration: 'none', color: '#6ab04c' }}>Quên mật khẩu?</a>
          </div>
          <button type="submit" style={{ padding: '10px 20px', border: 'none', borderRadius: '5px', backgroundColor: '#78e08f', color: 'white', cursor: 'pointer', fontSize: '16px', width: '100%', boxSizing: 'border-box' }}>Đăng Nhập</button>
        </form>
        <p style={{ textAlign: 'center' }}>Hoặc đăng nhập bằng</p>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', cursor: 'pointer', justifyContent: 'space-between', width: '100px' }}>
          <FaFacebook onClick={handleFacebookLogin} size={30} style={{ marginRight: '10px', color: '#3b5998' }} />
          <FaGoogle onClick={handleGoogleLogin} size={30} style={{ color: '#db4a39' }} />
        </div>
        <p>Chưa có tài khoản? <span style={linkStyle} onClick={() => navigate('/account/signup')}>Đăng ký ngay</span></p>
      </div>
      <Footer />
    </>
  );
};

export default Login;
