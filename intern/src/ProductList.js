import React from 'react';
import { useNavigate } from 'react-router-dom';  // React Router의 useNavigate 훅 사용
import ProductCard from './ProductCard';

const sampleProducts = [
  { id: 1, name: '셔츠', price: '25,000', image: 'https://sitem.ssgcdn.com/71/94/29/item/1000589299471_i1_1200.jpg' },
  { id: 2, name: '바지', price: '30,000', image: 'https://sitem.ssgcdn.com/54/11/98/item/1000620981154_i1_1200.jpg' },
  { id: 3, name: '자켓', price: '50,000', image: 'https://i.balaan.io/images/9a/9a0e69/9a0e69a0b66c78c15800cbb5b1c06eea6ee460cecb34a2ceefafa94f542684f0.jpg' },
  { id: 4, name: '신발', price: '40,000', image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA0MThfNzcg%2FMDAxNzEzNDI4MTgxMDAw._PgNCSi9ZdYSCYHLqRlonO7V6I7Jp_glH-vupwO8arcg.YZjvnSQhBCwJRkJejkb2Q-3MghlwkuEll64srR9u66kg.JPEG%2FKakaoTalk_20240418_154655399_02.jpg&type=sc960_832' },
];

const ProductList = () => {
  const navigate = useNavigate();  // useNavigate 훅을 사용하여 페이지 이동

  const handleCardRegisterClick = () => {
    navigate('/card-register');  // 카드 등록 페이지로 이동
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>패션 쇼핑몰</h1>
      <div style={styles.grid}>
        {sampleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <button style={styles.button} onClick={handleCardRegisterClick}>
        카드 등록하기
      </button>
    </div>
  );
};

const styles = {
  container: {
    padding: '16px',
    maxWidth: '768px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
    position: 'relative', // button 위치 조정을 위한 relative 설정
  },
  header: {
    textAlign: 'center',
    fontSize: '24px',
    marginBottom: '16px',
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '16px',
  },
  button: {
    position: 'absolute', // absolute 위치 지정
    top: '16px', // 상단 여백
    right: '16px', // 우측 여백
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default ProductList;
