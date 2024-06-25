import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <p>Contact us:</p>
                <ul>
                    <li>Email: info@littlelemon.com</li>
                    <li>Phone: +1 234 567 890</li>
                </ul>
            </div>
            <div className="footer-links">
                <ul>
                    <li><a href="/terms">Terms of Service</a></li>
                    <li><a href="/privacy">Privacy Policy</a></li>
                    <li><a href="/sitemap">Sitemap</a></li>
                </ul>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Little Lemon. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;