import React from 'react';
import { Footer, Navbar } from '../components/common';
import { Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default BaseLayout
