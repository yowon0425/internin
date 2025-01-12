import React, { useState } from 'react';

const ProductCard = ({ product }) => {
  const [inCart, setInCart] = useState(false);

  const handleAddToCart = () => {
    setInCart(true);
    alert(`${product.name}이(가) 장바구니에 추가되었어요!`);
  };

  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.name} style={styles.image} />
      <div style={styles.info}>
        <h3 style={styles.name}>{product.name}</h3>
        <p style={styles.price}>{product.price}원</p>
        <button
          onClick={handleAddToCart}
          style={inCart ? styles.addedButton : styles.button}
          disabled={inCart}
        >
          {inCart ? '장바구니에 담김' : '장바구니 담기'}
        </button>
      </div>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    margin: '8px',
    width: 'calc(50% - 16px)',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  image: {
    width: '30%',
    borderRadius: '4px',
  },
  info: {
    marginTop: '8px',
  },
  name: {
    fontSize: '16px',
    fontWeight: 'bold',
  },
  price: {
    fontSize: '14px',
    color: '#555',
  },
  button: {
    marginTop: '8px',
    padding: '8px 12px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  addedButton: {
    marginTop: '8px',
    padding: '8px 12px',
    backgroundColor: '#6c757d',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'not-allowed',
  },
};

export default ProductCard;