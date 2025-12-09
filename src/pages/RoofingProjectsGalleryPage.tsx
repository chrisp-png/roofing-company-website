import { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import BreadcrumbSchema from '../components/schema/BreadcrumbSchema';
import ImageGallerySchema from '../components/schema/ImageGallerySchema';
import FAQSchema from '../components/schema/FAQSchema';
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
  'Graham and happy customer 2.jpg',
  'Graham and happy customer 3.JPG',
  'Graham and happy customer 4.JPG',
  'Graham and happy customer.jpg',
  'Graham and happy customers.jpg',
  'Karl and happy customer 5.JPEG',
  'Karl and Happy customer 6.JPEG',
  'Karl and Happy customer 7.JPEG',
  'Karl and Happy customer 8.JPEG',
  'Karl and happy customer 9.JPEG',
  'Morrison Tile Roof.jpg',
  'Standing seam metal roof.jpg',
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

const roofingFAQs = [
  {
    question: "How much does a new roof cost in South Florida?",
    answer: "Roof replacement costs in South Florida vary by material and size. Asphalt shingle roofs typically range from $8,000-$15,000 for an average home. Tile roofs cost $15,000-$30,000+. Metal roofs range from $18,000-$35,000+. Flat roofs for commercial properties cost $3-$7 per square foot. All Phase Construction USA provides free inspections and detailed quotes for properties throughout Boca Raton, Delray Beach, Fort Lauderdale, Pompano Beach, Coral Springs, and all Broward and Palm Beach County cities."
  },
  {
    question: "What is the best roof for hurricanes in Florida?",
    answer: "Metal roofs and concrete tile roofs are the best options for hurricane protection in South Florida. Standing seam metal roofs can withstand winds up to 160 mph when properly installed. Concrete and clay tile roofs offer excellent wind resistance and impact protection. All Phase Construction USA installs hurricane-rated roofing systems that meet Florida Building Code requirements for high-velocity hurricane zones in Broward and Palm Beach Counties."
  },
  {
    question: "How long does a tile roof last in Florida?",
    answer: "Concrete tile roofs in Florida typically last 40-50 years, while clay tile roofs can last 50-100 years with proper maintenance. South Florida's climate, including UV exposure, salt air, and heavy rain, requires quality installation and periodic maintenance. All Phase Construction USA has installed thousands of tile roofs throughout Boca Raton, Delray Beach, Parkland, Wellington, and surrounding areas with full warranty protection."
  },
  {
    question: "Do I need a permit to replace my roof in Florida?",
    answer: "Yes, roof replacement in Florida requires building permits in all cities including Boca Raton, Delray Beach, Fort Lauderdale, Pompano Beach, Coral Springs, and other Broward and Palm Beach County municipalities. All Phase Construction USA handles all permit applications, inspections, and ensures compliance with Florida Building Code and local requirements. Our licensed contractors (CCC1333268 & CGC1519065) manage the entire permitting process."
  },
  {
    question: "How long does it take to replace a roof in South Florida?",
    answer: "Most residential roof replacements in South Florida take 2-5 days depending on size, complexity, and weather. Simple shingle roof replacements may take 1-2 days. Tile roof installations typically require 3-7 days. Flat roof systems can take 2-4 days. All Phase Construction USA coordinates with homeowners to minimize disruption and works efficiently while maintaining the highest quality standards throughout Broward and Palm Beach Counties."
  },
  {
    question: "What areas does All Phase Construction USA serve?",
    answer: "All Phase Construction USA serves all of Broward County and Palm Beach County, including Boca Raton, Delray Beach, Boynton Beach, Fort Lauderdale, Pompano Beach, Deerfield Beach, Coral Springs, Coconut Creek, Parkland, Plantation, Sunrise, Margate, Wellington, West Palm Beach, Lake Worth Beach, and surrounding South Florida communities. We are licensed and insured to work throughout the region with over 30 years of local experience."
  }
];

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
        title="Roofing Projects Gallery | Boca Raton, Delray Beach, Fort Lauderdale | All Phase Construction USA"
        description="View 71+ real roofing projects in Boca Raton, Delray Beach, Fort Lauderdale, Pompano Beach, Coral Springs & South Florida. Tile, metal, shingle & flat roof installations by licensed contractor CCC1333268 & CGC1519065."
        url="https://chrisp-png-roofing-c-gxj0.bolt.host/roofing-projects"
        canonical="https://chrisp-png-roofing-c-gxj0.bolt.host/roofing-projects"
        ogTitle="South Florida Roofing Projects | 71+ Real Installations | All Phase Construction"
        ogDescription="Browse verified roofing projects across Broward & Palm Beach Counties. See tile, metal, shingle & flat roof installations in Boca Raton, Delray Beach, Fort Lauderdale & more."
        ogImage="https://chrisp-png-roofing-c-gxj0.bolt.host/images/projects/Clay tile drone shot-Boca Raton.JPG"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://chrisp-png-roofing-c-gxj0.bolt.host/' },
          { name: 'Roofing Projects Gallery', url: 'https://chrisp-png-roofing-c-gxj0.bolt.host/roofing-projects' }
        ]}
      />
      <ImageGallerySchema
        images={imageGalleryData}
        name="All Phase Construction USA Roofing Projects Gallery"
        description="Complete gallery of residential and commercial roofing projects throughout South Florida including Boca Raton, Delray Beach, Fort Lauderdale, and Palm Beach County"
      />
      <FAQSchema faqs={roofingFAQs} />
      <ServiceAreaSchema serviceAreas={serviceAreas} />

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
                    title={`${project.roofType} in ${project.city} - Click to view full size`}
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
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Roofing Projects Across South Florida
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-neutral-800/50 p-6 rounded-lg border border-neutral-700">
                <h3 className="text-xl font-bold text-white mb-3">Boca Raton Roofing</h3>
                <p className="text-neutral-300 text-sm leading-relaxed">
                  Serving East Boca, West Boca, Mizner Park, Town Center Mall area, Broken Sound, Royal Palm Yacht & Country Club, St. Andrews Country Club, and luxury estates throughout Boca Raton (33427, 33428, 33431, 33432, 33433, 33434, 33486, 33487, 33488, 33496, 33497, 33498).
                </p>
              </div>

              <div className="bg-neutral-800/50 p-6 rounded-lg border border-neutral-700">
                <h3 className="text-xl font-bold text-white mb-3">Delray Beach Roofing</h3>
                <p className="text-neutral-300 text-sm leading-relaxed">
                  Expert installations near Atlantic Avenue, Pineapple Grove, Seagate, Seven Bridges, Del-Trail, and waterfront properties along the Intracoastal. Protecting homes in the Village by the Sea (33444, 33445, 33446, 33447, 33448, 33482, 33483, 33484).
                </p>
              </div>

              <div className="bg-neutral-800/50 p-6 rounded-lg border border-neutral-700">
                <h3 className="text-xl font-bold text-white mb-3">Fort Lauderdale Roofing</h3>
                <p className="text-neutral-300 text-sm leading-relaxed">
                  Professional service for Victoria Park, Las Olas, Colee Hammock, Rio Vista, Harbor Beach, Coral Ridge, and properties throughout the Venice of America. Waterfront specialists (33301, 33304, 33305, 33306, 33308, 33309, 33311, 33312, 33315, 33316, 33317, 33319).
                </p>
              </div>

              <div className="bg-neutral-800/50 p-6 rounded-lg border border-neutral-700">
                <h3 className="text-xl font-bold text-white mb-3">Pompano Beach Roofing</h3>
                <p className="text-neutral-300 text-sm leading-relaxed">
                  Coastal roofing experts serving Hillsboro Shores, Lighthouse Point, Palm Aire, Cresthaven, and beachfront properties near Pompano Pier. Saltwater-resistant installations throughout 33060-33077 zip codes with hurricane-rated materials.
                </p>
              </div>

              <div className="bg-neutral-800/50 p-6 rounded-lg border border-neutral-700">
                <h3 className="text-xl font-bold text-white mb-3">Coral Springs Roofing</h3>
                <p className="text-neutral-300 text-sm leading-relaxed">
                  Trusted contractor for Eagle Trace, Heron Bay, Wyndham Lakes, Coral Springs Country Club, Ramblewood, and master-planned communities. Tile and shingle specialists in this award-winning city (33065, 33071, 33073, 33075, 33076, 33077).
                </p>
              </div>

              <div className="bg-neutral-800/50 p-6 rounded-lg border border-neutral-700">
                <h3 className="text-xl font-bold text-white mb-3">Parkland & Wellington</h3>
                <p className="text-neutral-300 text-sm leading-relaxed">
                  Premium roofing for luxury estates in Parkland Golf & Country Club, Heron Bay, Wellington equestrian properties, Olympia, Grand Isles, and Versailles. High-end tile and barrel tile installations for discriminating homeowners.
                </p>
              </div>
            </div>

            <div className="prose prose-invert prose-lg max-w-none">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Additional Service Areas in Broward & Palm Beach Counties
              </h2>
              <p className="text-neutral-300 leading-relaxed mb-4">
                All Phase Construction USA proudly serves homeowners and businesses throughout <strong>Boynton Beach</strong> (Ocean Ridge, Aberdeen, Canyon Lakes, Hunter's Run), <strong>Coconut Creek</strong> (Wynmoor Village, Banyan Trails), <strong>Deerfield Beach</strong> (Century Village, Kings Point), <strong>Lake Worth Beach</strong> (College Park, Parrot Cove), <strong>West Palm Beach</strong> (CityPlace, Northwood, Ibis, Frenchman's Creek), <strong>Margate</strong>, <strong>Plantation</strong>, <strong>Sunrise</strong>, <strong>Tamarac</strong>, <strong>Hollywood</strong>, and all surrounding communities.
              </p>
              <p className="text-neutral-300 leading-relaxed">
                With dual licenses (CCC1333268 Certified Roofing Contractor & CGC1519065 General Contractor), we handle residential and commercial projects of any size across South Florida. From small repairs to complete re-roofs, our team delivers superior craftsmanship backed by comprehensive warranties.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-neutral-950 py-16 border-y border-neutral-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Frequently Asked Questions About Roofing in South Florida
            </h2>

            <div className="space-y-6">
              {roofingFAQs.map((faq, index) => (
                <div key={index} className="bg-neutral-900/50 p-6 rounded-lg border border-neutral-800">
                  <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                  <p className="text-neutral-300 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-neutral-900/50 border-y border-neutral-800 py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Follow Us for More Projects & Updates
            </h2>
            <p className="text-neutral-300 mb-8 max-w-2xl mx-auto">
              Join thousands of followers for daily project photos, time-lapse videos, roofing education, customer testimonials, and exclusive promotions. See why we're South Florida's most trusted roofing contractor.
            </p>
            <div className="flex items-center justify-center gap-4 mb-6">
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
            <p className="text-sm text-neutral-400">
              @all_phase_construction_usa | @allphaseusa
            </p>
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
