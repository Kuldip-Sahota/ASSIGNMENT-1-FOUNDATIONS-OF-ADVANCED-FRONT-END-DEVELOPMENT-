import Header from './components/Header';
import Footer from './components/Footer';
import Counter from './components/Counter';
import Form from './components/Form';
import Message from './components/Message';
import homeStyles from './styles/Home.module.css';

export default function Home() {
  return (
    <div className={homeStyles.container}>
      <Header />
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Welcome to My Web Application</h1>
      <p style={{ fontSize: '1.5rem' }}>This is the home page where you can enjoy the application.</p>

      <h2 style={{ fontSize: '2rem', marginTop: '20px' }}>Form Section</h2>
      <Form />

      <h2 style={{ fontSize: '2rem', marginTop: '20px' }}>Message Section</h2>
      <Message />

      <h2 style={{ fontSize: '2rem', marginTop: '20px' }}>Counter Section</h2>
      <Counter />

      <Footer />
    </div>
  );
}
