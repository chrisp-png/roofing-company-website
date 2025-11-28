import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ResidentialRoofingPage from './pages/ResidentialRoofingPage';
import CommercialRoofingPage from './pages/CommercialRoofingPage';
import ShingleRoofingPage from './pages/ShingleRoofingPage';
import TileRoofingPage from './pages/TileRoofingPage';
import MetalRoofingPage from './pages/MetalRoofingPage';
import FlatRoofingPage from './pages/FlatRoofingPage';
import WindMitigationPage from './pages/WindMitigationPage';
import FinancingPage from './pages/FinancingPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import RoofCalculatorPage from './pages/RoofCalculatorPage';

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="residential-roofing" element={<ResidentialRoofingPage />} />
          <Route path="commercial-roofing" element={<CommercialRoofingPage />} />
          <Route path="roof-types/shingle" element={<ShingleRoofingPage />} />
          <Route path="roof-types/tile" element={<TileRoofingPage />} />
          <Route path="roof-types/metal" element={<MetalRoofingPage />} />
          <Route path="roof-types/flat" element={<FlatRoofingPage />} />
          <Route path="wind-mitigation" element={<WindMitigationPage />} />
          <Route path="financing" element={<FinancingPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="calculator" element={<RoofCalculatorPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
