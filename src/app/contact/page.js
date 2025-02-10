import Header from '../components/Header';  // Import Header component
import Footer from '../components/Footer';  // Import Footer component
import homeStyles from '../styles/Home.module.css';  // Import styles from CSS module

export default function Contact() {  // Main function for the Contact page
  return (
    <div className={homeStyles.container}>  {/* Apply container styles from the CSS module */}
      <Header />  {/* Render the Header component */}
      <h1>Contact Us</h1>  {/* Display the page title */}
      <p>You can reach us via email at kuldipsahota200@hotmail.com</p>  {/* Provide contact information */}
      <Footer />  {/* Render the Footer component */}
    </div>
  );
}
