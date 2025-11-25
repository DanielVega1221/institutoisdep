import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import VolumeControl from '../components/AudioPlayer/VolumeControl';
import WhatsAppButton from '../components/WhatsAppButton/WhatsAppButton';
import music from '../assets/Music.mp3';

const Layout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="app-container" style={{ 
      display: "flex", 
      flexDirection: "column", 
      minHeight: "100vh", 
      margin: 0, 
      padding: 0, 
      width: "100%" 
    }}>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <VolumeControl audioSrc={music} />
      <WhatsAppButton />
      <div style={{ flex: 1 }} />
      {isHomePage && <Footer />}
    </div>
  );
};

export default Layout;