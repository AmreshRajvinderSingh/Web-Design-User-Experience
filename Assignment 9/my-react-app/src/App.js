import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Jobs from './Component/Jobs/Jobs';
import Contact from './Component/Contact/Contact';
import Layout from './Component/Layout'
import LoginPage from './Component/LoginPage'
import { UserProvider } from './Component/UserContext'

function App() {
    return (
 <UserProvider>
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="jobs" element={<Jobs />} /> 
          <Route path="contact" element={<Contact />} /> 
          <Route path="login" element={<LoginPage />} /> 
          {/* Add this line */}
        </Route>
      </Routes>
    </BrowserRouter>
    </UserProvider>
    );
}

export default App;
