<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import AppBarComponent from '../../Components/AppBar/AppBar';
import Footer from '../../Components/Footer/Footer';
import ChatAI from '../../Components/ChatAI/ChatAI';
import { fetchAllNewsAPI } from '../../apis';

const BlogPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetchAllNewsAPI();
        setPosts(response || []);
      } catch (error) {
        console.error('Failed to fetch news:', error);
        setPosts([]);
      }
    };

    fetchPosts();
  }, []);

  const truncateDescription = (description, maxLength) => {
    if (description.length > maxLength) {
      return description.substring(0, maxLength) + '...';
    }
    return description;
  };

  return (
    <>
      <AppBarComponent />
      <div style={styles.container}>
        <div style={styles.mainContent}>
          {posts.map((post, index) => (
            <div key={index} style={styles.post}>
              <img src={post.image} alt={post.title} style={styles.postImage} />
              <div style={styles.postInfo}>
                <h2 style={styles.postTitle}>{post.title}</h2>
                <p style={styles.postDate}>{post.date}</p>
                <p style={styles.postDescription}>
                  {truncateDescription(post.description, 90)}
                </p>
                {/* Use Link for navigation */}
                <Link to={`/news/${post.id}`} style={styles.readMore}>
                  Đọc tiếp
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div style={styles.sidebar}>
          <div style={styles.searchBox}>
            <input
              type="text"
              placeholder="Tìm kiếm bài viết..."
              style={styles.searchInput}
            />
            <button style={styles.searchButton}>🔍</button>
          </div>
          <div style={styles.widget}>
            <h3 style={styles.widgetTitle}>BÀI VIẾT MỚI</h3>
            <ul style={styles.widgetList}>
              {posts.map((post, index) => (
                <li key={index} style={styles.widgetItem}>
                  <img
                    src={post.image}
                    alt={post.title}
                    style={styles.widgetImage}
                  />
                  <div>
                    {/* Use Link for navigation */}
                    <Link to={`/news/${post.id}`} style={styles.widgetLink}>
                      {post.title}
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div style={styles.widget}>
            <h3 style={styles.widgetTitle}>TAGS</h3>
            <div style={styles.tags}>
              {tags.map((tag, index) => (
                <span key={index} style={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <ChatAI />
      <Footer />
    </>
  );
};

const tags = [
  'Công dụng khoai tây',
  'Măng tây',
  'Salad dưa chuột',
  'Sức khỏe',
  'Tác dụng ớt chuông',
];

=======
import React from 'react';
import AppBarComponent from '../../Components/AppBar/AppBar';
import Footer from '../../Components/Footer/Footer';
import ChatAI from '../../Components/ChatAI/ChatAI';


const BlogPage = () => {
  return (
    <>
    <AppBarComponent/>
    <div style={styles.container}>
      <div style={styles.mainContent}>
        {posts.map((post, index) => (
          <div key={index} style={styles.post}>
            <img src={post.img} alt={post.title} style={styles.postImage} />
            <div style={styles.postInfo}>
              <h2 style={styles.postTitle}>{post.title}</h2>
              <p style={styles.postDate}>{post.date}</p>
              <p style={styles.postDescription}>{post.description}</p>
              <a href="#" style={styles.readMore}>Đọc tiếp</a>
            </div>
          </div>
        ))}
      </div>
      <div style={styles.sidebar}>
        <div style={styles.searchBox}>
          <input type="text" placeholder="Tìm kiếm bài viết..." style={styles.searchInput} />
          <button style={styles.searchButton}>🔍</button>
        </div>
        <div style={styles.widget}>
          <h3 style={styles.widgetTitle}>BÀI VIẾT MỚI</h3>
          <ul style={styles.widgetList}>
            {posts.map((post, index) => (
              <li key={index} style={styles.widgetItem}>
                <img src={post.img} alt={post.title} style={styles.widgetImage} />
                <div>
                  <a href="#" style={styles.widgetLink}>{post.title}</a>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div style={styles.widget}>
          <h3 style={styles.widgetTitle}>TAGS</h3>
          <div style={styles.tags}>
            {tags.map((tag, index) => (
              <span key={index} style={styles.tag}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
    <ChatAI/>
    <Footer/>
    </>

  );
};

const posts = [
  {
    img: 'https://bizweb.dktcdn.net/thumb/large/100/514/629/articles/cong-dung-gao-lut.jpg?v=1713603020620',
    title: 'Công dụng của gạo lứt tím hữu cơ và cách nấu gạo lứt tím',
    date: 'Thứ Bảy, 20/04/2024',
    description: 'Gạo lứt tím là một loại gạo được chế biến từ các hạt gạo nguyên cám có màu tím đặc trưng...'
  },
  {
    img: 'https://bizweb.dktcdn.net/thumb/large/100/514/629/articles/lam-salad-tu-dua-chuot-new.jpg?v=1713602707877',
    title: 'Hướng dẫn cách làm salad dưa chuột thanh mát, bổ dưỡng cho ngày hè',
    date: 'Thứ Bảy, 20/04/2024',
    description: 'Salad dưa chuột là món rất được yêu thích vào ngày hè vì có tính thanh mát, bổ dưỡng. Đặc...'
  },
  {
    img: 'https://bizweb.dktcdn.net/thumb/large/100/514/629/articles/cong-dung-cua-toi-mat-ong.jpg?v=1713601627563',
    title: 'Công dụng của tỏi ngâm mật ong?',
    date: 'Thứ Bảy, 20/04/2024',
    description: 'Tỏi và mật ong đều là những gia vị phổ biến có trong mọi căn bếp. Thế nhưng, ít ai...'
  },
  {
    img: 'https://bizweb.dktcdn.net/thumb/large/100/514/629/articles/10-cong-dung-cua-khoai-tay.jpg?v=1713601044337',
    title: '10 Công dụng của khoai tây bạn nhất định phải biết',
    date: 'Thứ Bảy, 20/04/2024',
    description: 'Khoai tây là thực phẩm được sử dụng rộng rãi để chế biến các món ăn từ Á sang Âu...'
  },
  {
    img: 'https://bizweb.dktcdn.net/thumb/large/100/514/629/articles/tac-dung-ot-chuong.jpg?v=1713600623667',
    title: '10 Công dụng của khoai tây bạn nhất định phải biết',
    date: 'Thứ Bảy, 20/04/2024',
    description: 'Ớt chuông đỏ là loại rau quả rất được yêu thích vì tác dụng tuyệt vời mà nó đem lại...'
  }

];

const tags = ['Công dụng khoai tây', 'Măng tây', 'Salad dưa chuột', 'Sức khỏe', 'Tác dụng ớt chuông'];

>>>>>>> 4ca596fe95273da02de94af89d6f160b8b73466c
const styles = {
  container: {
    display: 'flex',
    padding: '20px',
<<<<<<< HEAD
=======
    
>>>>>>> 4ca596fe95273da02de94af89d6f160b8b73466c
  },
  mainContent: {
    flex: 2,
    marginRight: '20px',
<<<<<<< HEAD
  },
  post: {
    display: 'flex',
    marginBottom: '20px',
=======
    cursor : 'pointer'
  },
  post: {
    color : '#222f3e',
    display: 'flex',
    marginBottom: '20px',
   
>>>>>>> 4ca596fe95273da02de94af89d6f160b8b73466c
  },
  postImage: {
    width: '350px',
    height: '200px',
    marginRight: '20px',
    objectFit: 'cover',
<<<<<<< HEAD
    borderRadius: '8px',
=======
    borderRadius : '8px'
>>>>>>> 4ca596fe95273da02de94af89d6f160b8b73466c
  },
  postInfo: {
    flex: 1,
  },
  postTitle: {
    margin: '0 0 10px 0',
    fontSize: '18px',
    fontWeight: 'bold',
  },
  postDate: {
    margin: '0 0 10px 0',
    fontSize: '14px',
    color: '#888',
  },
  postDescription: {
    margin: '0 0 10px 0',
    fontSize: '14px',
    color: '#555',
  },
  readMore: {
    color: 'green',
    textDecoration: 'none',
  },
  sidebar: {
    flex: 1,
  },
  searchBox: {
    display: 'flex',
    marginBottom: '20px',
<<<<<<< HEAD
    width: '300px',
    marginLeft: '150px',
=======
    width : '300px',
    marginLeft : '150px'
>>>>>>> 4ca596fe95273da02de94af89d6f160b8b73466c
  },
  searchInput: {
    flex: 1,
    padding: '10px',
    fontSize: '14px',
    border: '1px solid #ddd',
    borderRadius: '4px 0 0 4px',
    outline: 'none',
<<<<<<< HEAD
    backgroundColor: '#f5f6fa',
    color: '#2f3640',
=======
    backgroundColor : '#f5f6fa',
    color : '#2f3640'
>>>>>>> 4ca596fe95273da02de94af89d6f160b8b73466c
  },
  searchButton: {
    padding: '10px 20px',
    fontSize: '14px',
    border: '1px solid #ddd',
    borderRadius: '0 4px 4px 0',
    backgroundColor: 'green',
    color: 'white',
    cursor: 'pointer',
    outline: 'none',
<<<<<<< HEAD
  },
  widget: {
    borderRadius: '8px',
    border: ' 1px solid #7f8fa6',
    marginBottom: '20px',
    width: '300px',
    marginLeft: '150px',
  },
  widgetTitle: {
    backgroundColor: '#008b4b',
    margin: '0 0 10px 0',
    fontSize: '16px',
    fontWeight: 'bold',
    padding: '10px',
=======
    
  },
  widget: {
    borderRadius : '8px',
    border: ' 1px solid #7f8fa6',
    marginBottom: '20px',
    width : '300px',
    marginLeft : '150px'
  },
  widgetTitle: {
    backgroundColor : '#008b4b',
    margin: '0 0 10px 0',
    fontSize: '16px',
    fontWeight: 'bold',
    padding : '10px'
>>>>>>> 4ca596fe95273da02de94af89d6f160b8b73466c
  },
  widgetList: {
    listStyle: 'none',
    padding: '0',
<<<<<<< HEAD
=======

>>>>>>> 4ca596fe95273da02de94af89d6f160b8b73466c
  },
  widgetItem: {
    display: 'flex',
    marginBottom: '10px',
  },
  widgetImage: {
    width: '80px',
    height: '80px',
    marginRight: '10px',
    objectFit: 'cover',
<<<<<<< HEAD
    marginLeft: '10px',
    borderRadius: '5px',
=======
    marginLeft : '10px',
    borderRadius : '5px'
>>>>>>> 4ca596fe95273da02de94af89d6f160b8b73466c
  },
  widgetLink: {
    color: '#000',
    textDecoration: 'none',
  },
  tags: {
<<<<<<< HEAD
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: '10px',
=======

    display: 'flex',
    flexWrap: 'wrap',
    marginLeft : '10px',

  
>>>>>>> 4ca596fe95273da02de94af89d6f160b8b73466c
  },
  tag: {
    margin: '0 10px 10px 0',
    padding: '5px 10px',
    backgroundColor: '#fff',
    borderRadius: '20px',
    fontSize: '14px',
<<<<<<< HEAD
    cursor: 'pointer',
    border: ' 1px solid #008b4b',
    color: '#2f3640',
  },
=======
    cursor : 'pointer',
    border: ' 1px solid #008b4b',
    color : '#2f3640',
  },
  
>>>>>>> 4ca596fe95273da02de94af89d6f160b8b73466c
};

export default BlogPage;
