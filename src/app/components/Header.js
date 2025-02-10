import Link from 'next/link';  // Import Link from Next.js for navigation between pages
import headerStyles from '../styles/Header.module.css';  // Import styles from CSS module for the header

const Header = () => {
  return (
    <header className={headerStyles.header}>  {/* Apply styles to the header element */}
      <nav className={headerStyles.nav}>  {/* Navigation container with styles */}
        <Link href="/" className={headerStyles.navLink}>Home</Link>  {/* Link to the Home page */}
        <Link href="/about" className={headerStyles.navLink}>About</Link>  {/* Link to the About page */}
        <Link href="/contact" className={headerStyles.navLink}>Contact</Link>  {/* Link to the Contact page */}
      </nav>
    </header>
  );
};

export default Header;  // Export the Header component for use in other parts of the app
