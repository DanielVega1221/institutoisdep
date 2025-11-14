import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import VolumeControl from '../components/AudioPlayer/VolumeControl';
import WhatsAppButton from '../components/WhatsAppButton/WhatsAppButton';
import music from '../assets/Music.mp3';

const Layout = () => {
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
      <Footer />
    </div>
  );
};

export default Layout;