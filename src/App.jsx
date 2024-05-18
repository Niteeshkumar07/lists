import { useState } from 'react';

function CounterApp() {
  const [count, setCount] = useState(10); // Assuming the initial count is 10 as per the image

  const styles = {
    body: {
      display: 'flex',
      alignItem:'center',
      justifyContent:'center',
    },
    container: {
      textAlign: 'center',
      fontFamily: 'Arial',
      marginTop: '50px',
      margin:'25%',
    },
    title: {
      fontSize: '124px',
      color: '#fff'
    },
    countDisplay: {
      fontSize: '58px',
      margin: '20px 0'
    },
    button: {
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      
      border: 'none',
      fontSize: '15px',
      margin: '0 10px',
      cursor: 'pointer',
      alignSelf: 'center',
      justifySelf:'center'
      },
    increaseButton: {
      backgroundColor: 'green'
    },
    decreaseButton: {
      backgroundColor: 'red'
    },
    resetButton: {
      backgroundColor: 'aqua'
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Counter App</h1>
      <div style={styles.countDisplay}>{count}</div>
      <button style={{ ...styles.button, ...styles.increaseButton }} onClick={() => setCount(count + 1)}>+</button>
      <button style={{ ...styles.button, ...styles.decreaseButton }} onClick={() => setCount(count - 1)}>-</button>
      <button style={{ ...styles.button, ...styles.resetButton }} onClick={() => setCount(0)}>0</button>
    </div>
  );
}

export default CounterApp;