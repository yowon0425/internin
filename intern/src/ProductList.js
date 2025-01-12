import React from 'react';
import ProductCard from './ProductCard';

const sampleProducts = [
  { id: 1, name: '셔츠', price: '25,000', image: 'https://sitem.ssgcdn.com/71/94/29/item/1000589299471_i1_1200.jpg' },
  { id: 2, name: '바지', price: '30,000', image: 'https://sitem.ssgcdn.com/54/11/98/item/1000620981154_i1_1200.jpg' },
  { id: 3, name: '자켓', price: '50,000', image: 'https://i.balaan.io/images/9a/9a0e69/9a0e69a0b66c78c15800cbb5b1c06eea6ee460cecb34a2ceefafa94f542684f0.jpg' },
  { id: 4, name: '신발', price: '40,000', image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA0MThfNzcg%2FMDAxNzEzNDI4MTgxMDAw._PgNCSi9ZdYSCYHLqRlonO7V6I7Jp_glH-vupwO8arcg.YZjvnSQhBCwJRkJejkb2Q-3MghlwkuEll64srR9u66kg.JPEG%2FKakaoTalk_20240418_154655399_02.jpg&type=sc960_832' },
];

const ProductList = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>패션 쇼핑몰</h1>
      <div style={styles.grid}>
        {sampleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '16px',
    maxWidth: '768px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
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
};

export default ProductList;
