import { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import BreadcrumbSchema from '../components/schema/BreadcrumbSchema';
import { MapPin, Layers, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectImage {
  src: string;
  alt: string;
  city: string;
  roofType: string;
  filename: string;
}

const allProjectImages = [
  '001-lake-worth-tile-roof-new-install-all-phase-usa.jpg.jpg',
  '002-wellington-tile-roof-new-install-all-phase-usa.jpg.jpg',
  '003-coconut-creek-shingle-roof-new-install-all-phase-usa.jpg.jpg',
  '004-coral-springs-barrel-tile-roof-new-install-all-phase-usa.jpg.jpg',
  '005-parkland-flat-tile-roof-new-install-all-phase-usa.jpg.jpg',
  '006-boca-raton-tile-roof-new-install-all-phase-usa.jpg.jpeg',
  '007-boca-raton-tile-roof-new-install-all-phase-usa.jpg.jpg',
  '008-boca-raton-tile-roof-new-install-all-phase-usa.jpg.jpg',
  '009-boca-raton-tile-roof-new-install-all-phase-usa.jpg.jpg',
  '010-boca-raton-tile-roof-new-install-all-phase-usa.jpg.jpg',
  '011-deerfield-beach-flat-roof-new-install-all-phase-usa.jpg.jpg',
  '012-deerfield-beach-single-ply-flat-roof-new-install-all-phase-usa.jpg.jpg',
  '016-coral-springs-flat-tile-roof-new-install-all-phase-usa.jpg.jpg',
  '019-coconut-creek-tile-and-flat-roof-new-install-all-phase-usa.jpg.jpg',
  '020-coconut-creek-dark-gray-tile-roof-new-install-all-phase-usa.jp.jpg',
  '022-boynton-beach-all-phase-construction-company-event-dillon-karl.jpg_(1).jpg',
  '024-deerfield-beach-all-phase-construction-office-building.jpg.jpg',
  '025-deerfield-beach-tile-roof-new-install-equipter-all-phase-usa.jpg.jpg',
  '027-lake-worth-flat-roof-restoration-all-phase-usa.jpg.jpg',
  '031-fwave-synthetic-shingle-roof-install-boca-raton-all-phase-usa.jpg.jpg',
  '035-hot-mop-commercial-flat-roof-coral-springs-all-phase-usa.jpg.jpg',
  '041-installing-coping-cap-coral-springs.jpg.jpg',
  '042-installing-pedestal-pavers-pompano-beach.jpg.jpg',
  '044-installing-taper-system-boca-raton.jpg.jpg',
  '046-iso-board-installed-commercial-flat-roof-boca-raton.jpg.jpg',
  '047-light-gray-shingle-roof-delray-beach.jpg.jpg',
  '051-lake-worth-metal-column-covers-new-install-all-phase-usa.jpg.jpg',
  '052-lighthouse-point-metal-roof-new-install-all-phase-usa.jpg.jpg',
  '055-wellington-tile-roof-new-install-all-phase-usa.jpg.jpg',
  '060-lighthouse-point-standing-seam-metal-roof-new-install-all-phase-usa.jpg.jpg',
  '061-new-tile-roof-in-coral-springs-all-phase-usa.jpg.jpg',
  '065-property-protection-before-start-boca-raton-all-phase-usa.jpg_(1).jpg',
  '068-roof-loading-single-ply-pompano-beach-all-phase-usa.jpg.jpg',
  '069-crane-roof-loading-pompano-beach-all-phase-usa.jpg.jpg',
  '070-tile-loaded-ready-for-install-boca-raton-all-phase-usa.jpg.jpg',
  '071-fort-lauderdale-shingle-roof-install-in-progress-all-phase-usa.jpg.jpg',
  '073-fort-lauderdale-new-shingle-roof-install-all-phase-usa.jpg.jpg',
  '075-hillsboro-mile-single-ply-flat-roof-install-all-phase-usa.jpg.jpg',
  '076-deerfield-beach-specialty-equipment-shingle-roof-install-all-phase-usa.jpg.jpg',
  '078-boynton-beach-green-standing-seam-metal-roof-install-all-phase-usa.jpg.jpg',
  '079-all-phase-roofing-fleet-fort-lauderdale-all-phase-usa.jpg.jpg',
  '080-roofing-service-truck-fort-lauderdale-all-phase-usa.jpg.jpg',
  '084-tile-install-in-progress-delray-beach-all-phase-usa.jpg_(1).jpg',
  '087-completed-tile-roof-delray-beach-all-phase-usa.jpg.jpg',
  '088-tile-roof-completed-boynton-beach-all-phase-usa.jpg.jpg',
  '089-tile-roof-in-fort-lauderdale-all-phase-usa.jpg.jpg',
  '091-tile-roof-in-parkland-all-phase-usa.jpg.jpg',
  '093-tile-roof-loaded-ready-for-install-boca-raton-all-phase-usa.jpg.jpg',
  '094-torch-applied-base-sheet-pompano-beach-all-phase-usa.jpg.jpg',
  '095-torch-applying-cap-sheet-pompano-beach-all-phase-usa.jpg_(1).jpg',
  '096-townhome-tile-roof-delray-beach-all-phase-usa.jpg.jpg',
  '097-weighted-roller-adhesion-boca-raton-tile-roof-all-phase-usa.jpg.jpg',
  'Charcoal Gray standing seam metal roof.jpg',
  'Clay tile drone shot-Boca Raton.JPG',
  'Clay tile install2- Boca Raton.JPG',
  'clay tile install3-Boca Raton.JPG',
  'Coating crew .PNG',
  'crew-flat-roof-commercial.jpg',
  'crew-team-photo-commercial.jpg',
  'crew-tile-install-action.jpg',
  'crew-tile-staging-aerial.jpg',
  'crew-training-warehouse.jpg',
  'customer-testimonial-indoor.jpg',
  'customer-testimonial-outdoor.jpg',
  'customer-testimonial-residential.jpg',
  'customer-thumbsup-elderly-woman.jpg',
  'Graham and happy customer 2.jpg',
  'Graham and happy customer 3.JPG',
  'Graham and happy customer 4.JPG',
  'Graham and happy customer.jpg',
  'Graham and happy customers.jpg',
  'hero-modern-gray-metalroof.jpg',
  'Karl and happy customer 5.JPEG',
  'Karl and Happy customer 6.JPEG',
  'Karl and Happy customer 7.JPEG',
  'Karl and Happy customer 8.JPEG',
  'Karl and happy customer 9.JPEG',
  'Morrison Tile Roof.jpg',
  'project-commercial-flat-roof.jpg',
  'project-luxury-tile-aerial-1.jpg',
  'project-luxury-tile-aerial-2.jpg',
  'project-metalroof-decorative-driveway.jpg',
  'project-modern-gray-sideview.jpg',
  'project-white-metalroof-street.jpg',
  'Standing seam metal roof.jpg',
  'system-commercial-materials-staging.jpg',
  'system-roof-decking-insulation.jpg',
  'system-titan-underlayment.jpg',
  'Tile install in progress.JPG',
  'Tile roof loaded and ready for install.JPG',
  'Torch applying cap sheet.jpg',
  'Ttorch applied base sheet.jpg',
  'Weldon front of house.jpg',
  'Weldon house, Delray Beach.jpg',
  'Working on single ply roof.JPG'
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
    { keywords: ['lake-worth'], name: 'Lake Worth, FL' },
    { keywords: ['parkland'], name: 'Parkland, FL' },
    { keywords: ['lighthouse-point', 'lighthouse point'], name: 'Lighthouse Point, FL' },
    { keywords: ['wellington'], name: 'Wellington, FL' },
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
  } else if (lower.includes('barrel') && lower.includes('tile')) {
    roofType = 'Barrel Tile Roof';
  } else if (lower.includes('tile') || lower.includes('clay')) {
    roofType = 'Tile Roof';
  } else if (lower.includes('shingle') || lower.includes('fwave')) {
    roofType = 'Shingle Roof';
  } else if (lower.includes('flat') || lower.includes('single-ply') || lower.includes('torch') || lower.includes('hot-mop')) {
    roofType = 'Flat Roof';
  } else if (lower.includes('crew') || lower.includes('team') || lower.includes('fleet') || lower.includes('truck')) {
    roofType = 'Our Team';
  } else if (lower.includes('customer') || lower.includes('testimonial') || lower.includes('happy')) {
    roofType = 'Happy Customer';
  } else if (lower.includes('system') || lower.includes('underlayment') || lower.includes('decking') || lower.includes('iso-board') || lower.includes('taper')) {
    roofType = 'Roof System';
  } else if (lower.includes('equipment') || lower.includes('crane') || lower.includes('loading') || lower.includes('equipter')) {
    roofType = 'Equipment & Process';
  } else if (lower.includes('office') || lower.includes('building') || lower.includes('event')) {
    roofType = 'Company';
  } else if (lower.includes('protection') || lower.includes('restoration')) {
    roofType = 'Roof Service';
  }

  const cleanName = filename.replace(/\.(jpg|jpeg|png|JPG|JPEG|PNG)$/i, '')
    .replace(/[-_]/g, ' ')
    .replace(/\d+/g, '')
    .replace(/\(1\)/g, '')
    .trim();

  const alt = `${roofType} in ${city} by All Phase Construction USA - Professional roofing contractor serving Broward and Palm Beach Counties`;

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

export default function RoofingProjectsGalleryPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects: ProjectImage[] = allProjectImages.map(filename => {
    const metadata = parseImageMetadata(filename);
    return {
      src: `/images/projects/${filename}`,
      filename,
      ...metadata
    };
  });

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
        title="Roofing Projects Gallery – All Phase Construction USA"
        description="Browse our complete gallery of roofing projects across Broward and Palm Beach Counties. See tile, metal, shingle, and flat roof installations by All Phase Construction USA."
        url="https://chrisp-png-roofing-c-gxj0.bolt.host/roofing-projects"
        canonical="https://chrisp-png-roofing-c-gxj0.bolt.host/roofing-projects"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://chrisp-png-roofing-c-gxj0.bolt.host/' },
          { name: 'Roofing Projects Gallery', url: 'https://chrisp-png-roofing-c-gxj0.bolt.host/roofing-projects' }
        ]}
      />

      <div className="min-h-screen bg-neutral-950">
        <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 border-b border-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Roofing Projects Gallery – All Phase Construction USA
              </h1>
              <p className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto">
                Real projects, real roofs, real customers across Broward and Palm Beach Counties. Browse our complete collection of residential and commercial roofing installations.
              </p>
              <p className="text-sm text-neutral-400 mt-4">
                Click any image to view full size • {projects.length} projects
              </p>
            </div>
          </div>
        </div>

        <div className="bg-neutral-900/50 border-y border-neutral-800">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-neutral-200 leading-relaxed mb-6">
                All Phase Construction USA proudly serves homeowners across <strong>Boca Raton, Delray Beach, Boynton Beach, Fort Lauderdale, Pompano Beach, Coconut Creek, Parkland, and Coral Springs</strong> with high-quality roofing installations backed by decades of experience. This gallery showcases real South Florida roofing projects including tile roofs, shingle roofs, flat roofing systems, HOA community re-roofs, commercial flat roof installations, and luxury residential tile roofs.
              </p>
              <p className="text-neutral-300 leading-relaxed mb-6">
                Each photo contains embedded GEO location data, helping customers — and AI search engines — verify our work across South Florida's most trusted communities. Whether you're exploring tile roof styles, comparing shingle options, or researching flat roof solutions, these completed projects provide a transparent look at our craftsmanship, materials, and installation quality.
              </p>
              <p className="text-neutral-300 leading-relaxed">
                Browse the gallery below to see why All Phase Construction USA is a top-rated roofing contractor in Palm Beach and Broward counties.
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
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
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

        <div className="bg-gradient-to-r from-blue-600 to-blue-800 border-t border-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Roofing Project?
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Get a free inspection and quote from All Phase Construction USA. Licensed, insured, and trusted across South Florida.
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
