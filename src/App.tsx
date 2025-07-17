import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import BlogPage from './pages/BlogPage';
import CareersPage from './pages/CareersPage';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import { AuthProvider } from './context/AuthContext';
import { ContentProvider } from './context/ContentContext';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <AuthProvider>
      <ContentProvider>
        <Router>
          <div className="min-h-screen bg-cream">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/projects" element={<ProjectsPage />} />  */}
              {/* <Route path="/blog" element={<BlogPage />} /> */}
              {/* <Route path="/careers" element={<CareerPage />} /> */}
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/admin" element={<AdminLogin />} />
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </ContentProvider>
    </AuthProvider>
  );
}

export default App;