import React from 'react';

import HeaderBar from './HeaderBar';
import NavBar from './NavBar';
import Footer from './Footer';

function Layout({ children }) {
    return (
        <div className="grid-container">
            <HeaderBar />
            <NavBar />
            <main className="main">
                <div className="content">
                    {children}
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Layout;