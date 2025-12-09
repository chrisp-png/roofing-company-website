import { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import BreadcrumbSchema from '../components/schema/BreadcrumbSchema';
import ImageGallerySchema from '../components/schema/ImageGallerySchema';
import ServiceAreaSchema from '../components/schema/ServiceAreaSchema';
import { getAllServiceAreas } from '../data/serviceAreas';
import { MapPin, Layers, X, ChevronLeft, ChevronRight, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';

interface ProjectImage {
  src: string;
  alt: string;
  city: string;
  roofType: string;
  filename: string;
}

const imageList = [
  'hero-modern-gray-metalroof.jpg',
  'project-luxury-tile-aerial-1.jpg',
  'project-luxury-tile-aerial-2.jpg',
  'Charcoal Gray standing seam metal roof.jpg',
  'Clay tile drone shot-Boca Raton.JPG',
  'Morrison Tile Roof.jpg',
  'project-commercial-flat-roof.jpg',
  'project-metalroof-decorative-driveway.jpg',
  'project-white-metalroof-street.jpg',
  'Weldon house, Delray Beach.jpg',
  '073-fort-lauderdale-new-shingle-roof-install-all-phase-usa.jpg.jpg',
  '087-completed-tile-roof-delray-beach-all-phase-usa.jpg.jpg'
];

function parseImageMetadata(filename: string): { city: string; roofType: string; alt: string } {
  const lower = filename.toLowerCase();

  let city = 'South Florida';
  const cityMatches = [
    { keywords: ['boca-raton', 'boca raton'], name: 'Boca Raton, FL' },
    { keywords: ['fort-lauderdale', 'fort lauderdale'], name: 'Fort Lauderdale, FL' },
    { keywords: ['coral-springs', 'coral springs'], name: 'Coral Springs, FL' },
    { keywords: ['pompano-beach', 'pompano beach'], name: 'Pompano Beach, FL' },
    { keywords: ['deerfield-beach', 'deerfield beach'], name: 'Deerfield Beach, FL' },
    { keywords: ['delray-beach', 'delray beach'], name: 'Delray Beach, FL' },
    { keywords: ['boynton-beach', 'boynton beach'], name: 'Boynton Beach, FL' },
    { keywords: ['coconut-creek', 'coconut creek'], name: 'Coconut Creek, FL' },
    { keywords: ['parkland'], name: 'Parkland, FL' },
    { keywords: ['lighthouse-point', 'lighthouse point'], name: 'Lighthouse Point, FL' },
    { keywords: ['wellington'], name: 'Wellington, FL' },
    { keywords: ['lake-worth', 'lake worth'], name: 'Lake Worth, FL' },
    { keywords: ['margate'], name: 'Margate, FL' },
    { keywords: ['hillsboro'], name: 'Hillsboro Beach, FL' }
  ];

  for (const match of cityMatches) {
    if (match.keywords.some(kw => lower.includes(kw))) {
      city = match.name;
      break;
    }
  }

  let roofType = 'Roofing Project';
  if (lower.includes('metal') || lower.includes('standing-seam') || lower.includes('standing seam')) {
    roofType = 'Metal Roof';
  } else if (lower.includes('tile') || lower.includes('clay')) {
    roofType = 'Tile Roof';
  } else if (lower.includes('shingle')) {
    roofType = 'Shingle Roof';
  } else if (lower.includes('flat') || lower.includes('single-ply') || lower.includes('torch')) {
    roofType = 'Flat Roof';
  } else if (lower.includes('crew') || lower.includes('team')) {
    roofType = 'Our Team';
  } else if (lower.includes('customer') || lower.includes('testimonial')) {
    roofType = 'Happy Customer';
  } else if (lower.includes('system') || lower.includes('underlayment') || lower.includes('decking')) {
    roofType = 'Roof System';
  }

  const cleanName = filename.replace(/\.(jpg|jpeg|png|JPG|JPEG|PNG)$/i, '')
    .replace(/[-_]/g, ' ')
    .replace(/\d+/g, '')
    .trim();

  const alt = `${roofType} installation in ${city} by All Phase Construction USA - ${cleanName}`;

  return { city, roofType, alt };
}

function Lightbox({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev
}: {
  images: ProjectImage[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}) {
  const current = images[currentIndex];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose, onNext, onPrev]);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2 bg-neutral-900/80 hover:bg-neutral-800 rounded-full transition-colors"
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6 text-white" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 z-50 p-3 bg-neutral-900/80 hover:bg-neutral-800 rounded-full transition-colors"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 z-50 p-3 bg-neutral-900/80 hover:bg-neutral-800 rounded-full transition-colors"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      <div
        className="max-w-7xl max-h-[90vh] mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={current.src}
          alt={current.alt}
          className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-lg"
        />
        <div className="mt-4 text-center">
          <div className="flex items-center justify-center gap-6 text-sm text-neutral-300">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{current.city}</span>
            </div>
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4" />
              <span>{current.roofType}</span>
            </div>
            <span className="text-neutral-500">
              {currentIndex + 1} / {images.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects: ProjectImage[] = imageList.map(filename => {
    const metadata = parseImageMetadata(filename);
    return {
      src: `/images/projects/${filename}`,
      filename,
      ...metadata
    };
  });

  const serviceAreas = getAllServiceAreas();

  const imageGalleryData = projects.map(project => ({
    url: `https://chrisp-png-roofing-c-gxj0.bolt.host${project.src}`,
    caption: project.alt,
    city: project.city,
    roofType: project.roofType
  }));

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % projects.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <>
      <SEO
        title="Featured Roofing Projects | Boca Raton, Delray Beach & South Florida | All Phase Construction"
        description="View featured tile, metal, and shingle roof installations by All Phase Construction USA in Boca Raton, Delray Beach, Fort Lauderdale & South Florida. Licensed contractor CCC1333268 & CGC1519065."
        url="https://chrisp-png-roofing-c-gxj0.bolt.host/projects"
        canonical="https://chrisp-png-roofing-c-gxj0.bolt.host/projects"
        ogTitle="Featured Roofing Projects | South Florida's Premier Roofing Contractor"
        ogDescription="Browse our showcase of luxury tile roofs, standing seam metal roofs, and premium installations across Broward & Palm Beach Counties."
        ogImage="https://chrisp-png-roofing-c-gxj0.bolt.host/images/projects/Morrison Tile Roof.jpg"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://chrisp-png-roofing-c-gxj0.bolt.host/' },
          { name: 'Projects', url: 'https://chrisp-png-roofing-c-gxj0.bolt.host/projects' }
        ]}
      />
      <ImageGallerySchema
        images={imageGalleryData}
        name="All Phase Construction USA Featured Projects"
        description="Showcase of premium roofing installations throughout South Florida"
      />
      <ServiceAreaSchema serviceAreas={serviceAreas} />

      <div className="min-h-screen bg-neutral-950">
        <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 border-b border-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Our Projects Gallery
              </h1>
              <p className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto">
                Real projects, real roofs, real customers across Broward and Palm Beach Counties.
              </p>
              <p className="text-sm text-neutral-400 mt-4">
                Click any image to view full size • {projects.length} projects
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.filename}
                className="bg-neutral-900 rounded-lg overflow-hidden border border-neutral-800 hover:border-neutral-600 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-800">
                  <img
                    src={project.src}
                    alt={project.alt}
                    title={`${project.roofType} in ${project.city} - Professional installation by All Phase Construction USA`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    width="400"
                    height="300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 text-neutral-900 px-4 py-2 rounded-full font-semibold text-sm">
                        View Full Size
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between gap-2 text-xs">
                    <div className="flex items-center gap-1.5 text-neutral-400">
                      <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                      <span className="font-medium truncate">{project.city}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-blue-400">
                      <Layers className="w-3.5 h-3.5 flex-shrink-0" />
                      <span className="truncate">{project.roofType}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-neutral-900/80 border-y border-neutral-800 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Premium Roofing Services Throughout South Florida
            </h2>

            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-neutral-300 leading-relaxed mb-6">
                All Phase Construction USA has completed thousands of roofing projects across <strong>Boca Raton</strong>, <strong>Delray Beach</strong>, <strong>Fort Lauderdale</strong>, <strong>Pompano Beach</strong>, <strong>Coral Springs</strong>, <strong>Parkland</strong>, <strong>Wellington</strong>, <strong>Boynton Beach</strong>, <strong>Coconut Creek</strong>, <strong>Deerfield Beach</strong>, and throughout <strong>Broward County</strong> and <strong>Palm Beach County</strong>.
              </p>

              <p className="text-neutral-300 leading-relaxed mb-6">
                Our dual licensing as both a <strong>Certified Roofing Contractor (CCC1333268)</strong> and <strong>General Contractor (CGC1519065)</strong> allows us to handle complete roofing projects from permit to completion. We specialize in <strong>tile roofing</strong>, <strong>metal roofing</strong>, <strong>shingle roofing</strong>, <strong>flat roofing</strong>, and <strong>commercial roofing systems</strong>.
              </p>

              <p className="text-neutral-300 leading-relaxed">
                Every project showcased in this gallery represents our commitment to superior craftsmanship, hurricane-rated materials, and customer satisfaction. From luxury estates in <strong>Royal Palm Yacht & Country Club</strong> to waterfront properties along the <strong>Intracoastal Waterway</strong>, we deliver roofing solutions that protect your investment and enhance your property value.
              </p>
            </div>

            <div className="mt-12 grid md:grid-cols-2 gap-6">
              <div className="bg-neutral-800/50 p-6 rounded-lg border border-neutral-700">
                <h3 className="text-xl font-bold text-white mb-3">Residential Roofing Excellence</h3>
                <p className="text-neutral-300 text-sm leading-relaxed">
                  From single-family homes to luxury estates, we install tile roofs, metal roofs, and shingle roofs that withstand Florida's harshest weather while enhancing curb appeal and property value.
                </p>
              </div>

              <div className="bg-neutral-800/50 p-6 rounded-lg border border-neutral-700">
                <h3 className="text-xl font-bold text-white mb-3">Commercial Roofing Expertise</h3>
                <p className="text-neutral-300 text-sm leading-relaxed">
                  We handle commercial flat roofing, HOA community re-roofs, and large-scale projects with minimal business disruption. Fully licensed, insured, and experienced in complex commercial applications.
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <a
                href="/roofing-projects"
                className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                View Complete Gallery (71+ Projects)
              </a>
            </div>
          </div>
        </div>

        <div className="bg-neutral-900/50 border-y border-neutral-800 py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              See More Projects on Social Media
            </h2>
            <p className="text-neutral-300 mb-8 max-w-2xl mx-auto">
              Follow us for daily project updates, before & after photos, roofing tips, and special offers. Join thousands of South Florida homeowners who trust All Phase Construction USA.
            </p>
            <div className="flex items-center justify-center gap-4">
              <a
                href="https://www.facebook.com/AllPhaseConstructionUsA"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-neutral-800 hover:bg-red-600 rounded-full flex items-center justify-center text-neutral-200 hover:text-white transition-all duration-200 shadow-lg hover:shadow-red-900/50 hover:scale-110"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/all_phase_construction_usa/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-neutral-800 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 rounded-full flex items-center justify-center text-neutral-200 hover:text-white transition-all duration-200 shadow-lg hover:shadow-pink-900/50 hover:scale-110"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.youtube.com/@allphaseconstructionusa5626"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-neutral-800 hover:bg-red-600 rounded-full flex items-center justify-center text-neutral-200 hover:text-white transition-all duration-200 shadow-lg hover:shadow-red-900/50 hover:scale-110"
                aria-label="Subscribe on YouTube"
              >
                <Youtube className="w-6 h-6" />
              </a>
              <a
                href="https://www.tiktok.com/@allphaseusa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-neutral-800 hover:bg-black rounded-full flex items-center justify-center text-neutral-200 hover:text-white transition-all duration-200 shadow-lg hover:shadow-neutral-900/50 hover:scale-110"
                aria-label="Follow us on TikTok"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/all-phase-construction-usa-llc"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-neutral-800 hover:bg-blue-700 rounded-full flex items-center justify-center text-neutral-200 hover:text-white transition-all duration-200 shadow-lg hover:shadow-blue-900/50 hover:scale-110"
                aria-label="Connect on LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-800 border-t border-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Roofing Project?
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Get a free inspection and quote from All Phase Construction USA. Licensed (CCC1333268 & CGC1519065), insured, and trusted across South Florida for over 30 years.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:561-123-4567"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-lg font-bold hover:bg-blue-50 transition-colors"
              >
                Call for Free Quote
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-700 text-white rounded-lg font-bold hover:bg-blue-900 transition-colors border border-blue-600"
              >
                Request Inspection
              </a>
            </div>
          </div>
        </div>
      </div>

      {lightboxOpen && (
        <Lightbox
          images={projects}
          currentIndex={currentImageIndex}
          onClose={() => setLightboxOpen(false)}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </>
  );
}
