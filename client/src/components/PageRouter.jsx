import { useState } from 'react'

import Header from './Header';
import Home from './pages/Home'


export default function pageRouter() {
    const [currentPage, setCurrentPage] = useState('AboutMe');

const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <main>{renderPage()}</main>
    </>
  );
}