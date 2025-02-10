import React from 'react'; // Import React to use JSX

const Footer = () => {
    const footerStyles = {
        backgroundColor: '#333', // Dark background color
        color: 'white',
        textAlign: 'center', // Center-align text
        padding: '20px',
        position: 'relative',  
        bottom: 0,
        width: '100%', // Make the footer take the full width of the page
        fontSize: '14px',
        fontWeight: 'bold', // Make the font bold
    };

    return (
        <footer style={footerStyles}>
            <p>&copy; 2025 My Web Application</p>
        </footer>
    );
};

export default Footer;
