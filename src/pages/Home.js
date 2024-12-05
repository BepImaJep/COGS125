import React from 'react';

function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Samuele Tran</h1>
      <p style={styles.subtitle}>Creative Director</p>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
  title: {
    fontSize: '3rem',
    color: '#333',
  },
  subtitle: {
    fontSize: '1.5rem',
    color: '#555',
  },
};

export default Home;
