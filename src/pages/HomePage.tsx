import SEO from '../components/SEO';
import HeroSection from '../components/home/HeroSection';
import TrustBadges from '../components/home/TrustBadges';
import GeoEntityIntro from '../components/GeoEntityIntro';
import WhyChooseBar from '../components/home/WhyChooseBar';
import TrustBar from '../components/home/TrustBar';
import UrgencyBanner from '../components/home/UrgencyBanner';
import ServicesGrid from '../components/home/ServicesGrid';
import PalmBeachCaseStudy from '../components/home/PalmBeachCaseStudy';
import AuthorityGroup from '../components/authority/AuthorityGroup';
import CustomerGallery from '../components/home/CustomerGallery';
import TestimonialsSection from '../components/home/TestimonialsSection';
import BottomCTA from '../components/home/BottomCTA';
import HomeLocalBusinessSchema from '../components/HomeLocalBusinessSchema';
import RoofGuideFaqSchema from '../components/RoofGuideFaqSchema';
import BreadcrumbSchema from '../components/schema/BreadcrumbSchema';
import ReviewSchema from '../components/schema/ReviewSchema';
import ComprehensiveFAQSchema from '../components/schema/ComprehensiveFAQSchema';

export default function HomePage() {
  const testimonialReviews = [
    {
      author: "Michael Rodriguez",
      rating: 5,
      reviewBody: "All Phase replaced our tile roof in Boca Raton. Professional crew, clean job site, and they coordinated everything with our HOA. Insurance went down significantly after the wind mitigation inspection.",
      datePublished: "2024-11-15"
    },
    {
      author: "Jennifer Wilson",
      rating: 5,
      reviewBody: "Excellent experience from start to finish. They explained every step of the process, handled all permits, and the new metal roof looks amazing. Highly recommend for anyone in South Florida.",
      datePublished: "2024-10-28"
    },
    {
      author: "David Chen",
      rating: 5,
      reviewBody: "Fast, professional, and fairly priced. Our flat roof replacement in Fort Lauderdale was completed on schedule. The team was respectful of our property and cleaned up perfectly each day.",
      datePublished: "2024-09-12"
    }
  ];

  return (
    <>
      <SEO
        title="All Phase Construction USA | Roofing Contractor in South Florida"
        description="Licensed roofing and general contractor serving Broward and Palm Beach counties. Expert tile, metal, shingle, and flat roof installation. Free estimates & financing available."
        url="/"
        canonical="/"
      />
      <HomeLocalBusinessSchema />
      <RoofGuideFaqSchema />
      <ComprehensiveFAQSchema />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.allphaseusa.com/" }
        ]}
      />
      <ReviewSchema reviews={testimonialReviews} />
      <HeroSection />
      <TrustBadges />
      <GeoEntityIntro />
      <WhyChooseBar />
      <TrustBar />
      <UrgencyBanner />
      <ServicesGrid />
      <PalmBeachCaseStudy />
      <AuthorityGroup />
      <CustomerGallery />
      <TestimonialsSection />
      <BottomCTA />
    </>
  );
}
