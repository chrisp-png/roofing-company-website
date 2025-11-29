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
import FinancingCalculatorPage from './pages/FinancingCalculatorPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import RoofCalculatorPage from './pages/RoofCalculatorPage';
import BlogPage from './pages/BlogPage';
import BlogDetailPage from './pages/BlogDetailPage';
import ServiceAreasPage from './pages/ServiceAreasPage';
import ServiceAreaDetailPage from './pages/ServiceAreaDetailPage';

import BocaRatonRoofCostPage from './pages/roof-cost/boca-raton';
import DeerfieldBeachRoofCostPage from './pages/roof-cost/deerfield-beach';
import PompanoBeachRoofCostPage from './pages/roof-cost/pompano-beach';
import LighthousePointRoofCostPage from './pages/roof-cost/lighthouse-point';
import HighlandBeachRoofCostPage from './pages/roof-cost/highland-beach';
import DelrayBeachRoofCostPage from './pages/roof-cost/delray-beach';
import BoyntonBeachRoofCostPage from './pages/roof-cost/boynton-beach';
import LakeWorthBeachRoofCostPage from './pages/roof-cost/lake-worth-beach';
import WestPalmBeachRoofCostPage from './pages/roof-cost/west-palm-beach';
import CoralSpringsRoofCostPage from './pages/roof-cost/coral-springs';
import CoconutCreekRoofCostPage from './pages/roof-cost/coconut-creek';
import ParklandRoofCostPage from './pages/roof-cost/parkland';
import MargateRoofCostPage from './pages/roof-cost/margate';
import TamaracRoofCostPage from './pages/roof-cost/tamarac';
import FortLauderdaleRoofCostPage from './pages/roof-cost/fort-lauderdale';
import WiltonManorsRoofCostPage from './pages/roof-cost/wilton-manors';
import OaklandParkRoofCostPage from './pages/roof-cost/oakland-park';
import SunriseRoofCostPage from './pages/roof-cost/sunrise';
import PlantationRoofCostPage from './pages/roof-cost/plantation';
import HollywoodRoofCostPage from './pages/roof-cost/hollywood';

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
          <Route path="financing-calculator" element={<FinancingCalculatorPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="roof-cost-calculator" element={<RoofCalculatorPage />} />

          <Route path="roof-cost/boca-raton" element={<BocaRatonRoofCostPage />} />
          <Route path="roof-cost/deerfield-beach" element={<DeerfieldBeachRoofCostPage />} />
          <Route path="roof-cost/pompano-beach" element={<PompanoBeachRoofCostPage />} />
          <Route path="roof-cost/lighthouse-point" element={<LighthousePointRoofCostPage />} />
          <Route path="roof-cost/highland-beach" element={<HighlandBeachRoofCostPage />} />
          <Route path="roof-cost/delray-beach" element={<DelrayBeachRoofCostPage />} />
          <Route path="roof-cost/boynton-beach" element={<BoyntonBeachRoofCostPage />} />
          <Route path="roof-cost/lake-worth-beach" element={<LakeWorthBeachRoofCostPage />} />
          <Route path="roof-cost/west-palm-beach" element={<WestPalmBeachRoofCostPage />} />
          <Route path="roof-cost/coral-springs" element={<CoralSpringsRoofCostPage />} />
          <Route path="roof-cost/coconut-creek" element={<CoconutCreekRoofCostPage />} />
          <Route path="roof-cost/parkland" element={<ParklandRoofCostPage />} />
          <Route path="roof-cost/margate" element={<MargateRoofCostPage />} />
          <Route path="roof-cost/tamarac" element={<TamaracRoofCostPage />} />
          <Route path="roof-cost/fort-lauderdale" element={<FortLauderdaleRoofCostPage />} />
          <Route path="roof-cost/wilton-manors" element={<WiltonManorsRoofCostPage />} />
          <Route path="roof-cost/oakland-park" element={<OaklandParkRoofCostPage />} />
          <Route path="roof-cost/sunrise" element={<SunriseRoofCostPage />} />
          <Route path="roof-cost/plantation" element={<PlantationRoofCostPage />} />
          <Route path="roof-cost/hollywood" element={<HollywoodRoofCostPage />} />
          <Route path="service-areas" element={<ServiceAreasPage />} />
          <Route path="service-areas/:city" element={<ServiceAreaDetailPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/:slug" element={<BlogDetailPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
