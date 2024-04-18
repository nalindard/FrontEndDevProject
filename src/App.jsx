import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/app_components/NavBar.jsx';
import HomePage from './pages/HomePage.jsx';
import NotFound from './pages/NotFound.jsx';
import AboutUsPage from './pages/AboutUsPage.jsx';
import CareersPage from './pages/CareersPage.jsx';
import ContactUsPage from './pages/ContactUsPage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';

function App() {

  return (
    // Application,
    <div>
      <Router>

        {/* Navigations */}
        <nav>
          <NavBar />
        </nav>

        {/* Page View */}
        <div>
          <Routes>
            <Route path="/" element={< HomePage />} />
            <Route path="/services" element={< ServicesPage />} />
            <Route path="/about" element={< AboutUsPage />} />
            <Route path="/contacts" element={< ContactUsPage />} />
            <Route path="/careers" element={< CareersPage />} />

            {/* You Lost Page */}
            <Route path="*" element={< NotFound />} />
          </Routes>
        </div>

      </Router>
    </div>
  )
}

export default App
