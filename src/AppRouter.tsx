import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { ScrollToTop } from './components/ScrollToTop';

const HomePage = lazy(() => import('./pages/HomePage'));
const RoofCalculatorPage = lazy(() => import('./pages/RoofCalculatorPage'));
const ResidentialRoofingPage = lazy(() => import('./pages/ResidentialRoofingPage'));
const CommercialRoofingPage = lazy(() => import('./pages/CommercialRoofingPage'));
const ShingleRoofingPage = lazy(() => import('./pages/ShingleRoofingPage'));
const TileRoofingPage = lazy(() => import('./pages/TileRoofingPage'));
const MetalRoofingPage = lazy(() => import('./pages/MetalRoofingPage'));
const FlatRoofingPage = lazy(() => import('./pages/FlatRoofingPage'));
const WindMitigationPage = lazy(() => import('./pages/WindMitigationPage'));
const FinancingPage = lazy(() => import('./pages/FinancingPage'));
const FinancingCalculatorPage = lazy(() => import('./pages/FinancingCalculatorPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const BlogDetailPage = lazy(() => import('./pages/BlogDetailPage'));
const ServiceAreasPage = lazy(() => import('./pages/ServiceAreasPage'));
const ServiceAreaDetailPage = lazy(() => import('./pages/ServiceAreaDetailPage'));

const BocaRatonRoofCostPage = lazy(() => import('./pages/roof-cost/boca-raton'));
const DeerfieldBeachRoofCostPage = lazy(() => import('./pages/roof-cost/deerfield-beach'));
const PompanoBeachRoofCostPage = lazy(() => import('./pages/roof-cost/pompano-beach'));
const LighthousePointRoofCostPage = lazy(() => import('./pages/roof-cost/lighthouse-point'));
const HighlandBeachRoofCostPage = lazy(() => import('./pages/roof-cost/highland-beach'));
const DelrayBeachRoofCostPage = lazy(() => import('./pages/roof-cost/delray-beach'));
const BoyntonBeachRoofCostPage = lazy(() => import('./pages/roof-cost/boynton-beach'));
const LakeWorthBeachRoofCostPage = lazy(() => import('./pages/roof-cost/lake-worth-beach'));
const WestPalmBeachRoofCostPage = lazy(() => import('./pages/roof-cost/west-palm-beach'));
const CoralSpringsRoofCostPage = lazy(() => import('./pages/roof-cost/coral-springs'));
const CoconutCreekRoofCostPage = lazy(() => import('./pages/roof-cost/coconut-creek'));
const ParklandRoofCostPage = lazy(() => import('./pages/roof-cost/parkland'));
const MargateRoofCostPage = lazy(() => import('./pages/roof-cost/margate'));
const TamaracRoofCostPage = lazy(() => import('./pages/roof-cost/tamarac'));
const FortLauderdaleRoofCostPage = lazy(() => import('./pages/roof-cost/fort-lauderdale'));
const WiltonManorsRoofCostPage = lazy(() => import('./pages/roof-cost/wilton-manors'));
const OaklandParkRoofCostPage = lazy(() => import('./pages/roof-cost/oakland-park'));
const SunriseRoofCostPage = lazy(() => import('./pages/roof-cost/sunrise'));
const PlantationRoofCostPage = lazy(() => import('./pages/roof-cost/plantation'));
const HollywoodRoofCostPage = lazy(() => import('./pages/roof-cost/hollywood'));

const LoadingFallback = () => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    background: '#000',
    color: '#fff'
  }}>
    Loading...
  </div>
);

export default function AppRouter() {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<LoadingFallback />}>
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
      </Suspense>
    </Router>
  );
}
