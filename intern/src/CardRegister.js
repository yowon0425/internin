import React, { useState } from 'react';

const CardRegister = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [cvc, setCvc] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};
    
    // 카드 번호 유효성 검사 (숫자 16자리)
    if (!/^\d{16}$/.test(cardNumber)) {
      formErrors.cardNumber = '카드 번호는 16자리 숫자여야 합니다.';
    }
    
    // 유효기간 검사 (MM/YY 형식)
    if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
      formErrors.expiryDate = '유효기간은 MM/YY 형식이어야 합니다.';
    }
    
    // 카드 소유자 이름 검사
    if (cardHolderName.trim() === '') {
      formErrors.cardHolderName = '카드 소유자 이름을 입력해야 합니다.';
    }
    
    // CVC 번호 검사 (3자리 숫자)
    if (!/^\d{3}$/.test(cvc)) {
      formErrors.cvc = 'CVC 번호는 3자리 숫자여야 합니다.';
    }
    
    if (Object.keys(formErrors).length === 0) {
      // 유효성 검사 통과 시 카드 등록 처리
      alert('카드 등록 완료');
      // 추가적인 처리 코드 (예: 서버로 데이터 전송)
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>카드 등록</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputContainer}>
          <label>카드 번호</label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="카드 번호"
            maxLength="16"
            style={styles.input}
          />
          {errors.cardNumber && <p style={styles.error}>{errors.cardNumber}</p>}
        </div>
        
        <div style={styles.inputContainer}>
          <label>유효기간 (MM/YY)</label>
          <input
            type="text"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            placeholder="MM/YY"
            maxLength="5"
            style={styles.input}
          />
          {errors.expiryDate && <p style={styles.error}>{errors.expiryDate}</p>}
        </div>
        
        <div style={styles.inputContainer}>
          <label>카드 소유자 이름</label>
          <input
            type="text"
            value={cardHolderName}
            onChange={(e) => setCardHolderName(e.target.value)}
            placeholder="소유자 이름"
            style={styles.input}
          />
          {errors.cardHolderName && <p style={styles.error}>{errors.cardHolderName}</p>}
        </div>
        
        <div style={styles.inputContainer}>
          <label>CVC</label>
          <input
            type="text"
            value={cvc}
            onChange={(e) => setCvc(e.target.value)}
            placeholder="CVC"
            maxLength="3"
            style={styles.input}
          />
          {errors.cvc && <p style={styles.error}>{errors.cvc}</p>}
        </div>

        <button type="submit" style={styles.button}>등록</button>
      </form>
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
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    padding: '8px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    fontSize: '12px',
  },
};

export default CardRegister;
