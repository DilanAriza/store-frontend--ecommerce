import React from 'react';
import FooterPage from '../components/Footer.component';

const Layout = ({ children }) => (
    <div className="App">
        {children}
        <FooterPage />
    </div>
);

export default Layout;