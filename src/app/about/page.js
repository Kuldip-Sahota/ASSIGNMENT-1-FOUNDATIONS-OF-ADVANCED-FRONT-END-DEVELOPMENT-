import Header from '../components/Header';  // Import Header component
import Footer from '../components/Footer';  // Import Footer component
import homeStyles from '../styles/Home.module.css';  // Import styles from CSS module

export default function About() {  // Main function for the About page
  return (
    <div className={homeStyles.container}>  {/* Apply container styles from the CSS module */}
      <Header />  {/* Render the Header component */}
      <h1>About Us</h1>  {/* Display the page title */}
      <p>This web application demonstrates the use of React and Next.js components, props, state management, event handling, and conditional rendering.</p>  {/* A description of the app's purpose */}
      <Footer />  {/* Render the Footer component */}
    </div>
  );
}
