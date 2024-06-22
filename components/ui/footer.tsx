import React from 'react';

// Define a TypeScript interface for the footer props
interface FooterProps {
  companyName: string;
  year: number;
  address: string;
  email: string;
  phone: string;
}

// Inline CSS styles for the footer component
const footerStyles: React.CSSProperties = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '40px 0',
  textAlign: 'center',
};

const containerStyles: React.CSSProperties = {
  maxWidth: '800px',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
};

const infoStyles: React.CSSProperties = {
  flex: '1',
  textAlign: 'center',
  padding: '20px',
};

const contactInfoStyles: React.CSSProperties = {
  textAlign: 'center',
};

const copyrightStyles: React.CSSProperties = {
  flexBasis: '100%',
  marginTop: '20px',
};

// Create a functional component for the footer
const Footer: React.FC<FooterProps> = ({ companyName, year, address, email, phone }) => {
  return (
    <footer style={footerStyles}>
      <div className="container" style={containerStyles}>
        <div className="footer-info" style={infoStyles}>
          <h3><b>Contact Information:</b></h3>
          <div style={contactInfoStyles}>
            <p><b>Address:</b> {address}</p>
            <p><b>Email:</b> {email}</p>
            <p><b>Phone:</b> {phone}</p>
          </div>
        </div>
        <div className="copyright" style={copyrightStyles}>
          <p>&copy; <i>{year} {companyName}</i></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
