import React from 'react';
import Navbar from '@components/NavBar/header_navbar';
import Footer from '@components/Footer/footer';

interface LayoutProps {
  children: React.ReactNode;
  showFooter?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, showFooter = true }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar language="hr" loggedIn={false} />
      <main className="flex-grow">
        {children}
      </main>
      {showFooter && <Footer />}
    </div>
  );
};

export default Layout;