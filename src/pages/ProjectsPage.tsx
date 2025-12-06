import SEO from '../components/SEO';
import BreadcrumbSchema from '../components/schema/BreadcrumbSchema';
import { MapPin, Layers } from 'lucide-react';

interface ProjectGalleryItem {
  id: string;
  imageSrc: string;
  alt: string;
  city: string;
  roofType: string;
  description?: string;
}

const PROJECT_GALLERY: ProjectGalleryItem[] = [
  // Existing real project images from public/images/projects
  {
    id: 'p001',
    imageSrc: '/images/projects/Standing seam metal roof.jpg',
    alt: 'Standing seam metal roof installation in South Florida',
    city: 'Boca Raton',
    roofType: 'Standing Seam Metal',
    description: 'Premium standing seam metal roof installation'
  },
  {
    id: 'p002',
    imageSrc: '/images/projects/Charcoal Gray standing seam metal roof.jpg',
    alt: 'Charcoal gray standing seam metal roof',
    city: 'Fort Lauderdale',
    roofType: 'Standing Seam Metal',
    description: 'Modern charcoal gray metal roof system'
  },
  {
    id: 'p003',
    imageSrc: '/images/projects/Clay tile drone shot-Boca Raton.JPG',
    alt: 'Aerial view of clay tile roof installation in Boca Raton',
    city: 'Boca Raton',
    roofType: 'Clay Tile',
    description: 'Complete clay tile roof replacement'
  },
  {
    id: 'p004',
    imageSrc: '/images/projects/Clay tile install2- Boca Raton.JPG',
    alt: 'Clay tile roof installation in progress Boca Raton',
    city: 'Boca Raton',
    roofType: 'Clay Tile',
    description: 'Clay tile installation process'
  },
  {
    id: 'p005',
    imageSrc: '/images/projects/clay tile install3-Boca Raton.JPG',
    alt: 'Clay tile roofing project in Boca Raton',
    city: 'Boca Raton',
    roofType: 'Clay Tile',
    description: 'Premium clay tile roofing system'
  },
  {
    id: 'p006',
    imageSrc: '/images/projects/Morrison Tile Roof.jpg',
    alt: 'Morrison residence tile roof in Parkland',
    city: 'Parkland',
    roofType: 'Concrete Tile',
    description: 'Complete tile roof replacement'
  },
  {
    id: 'p007',
    imageSrc: '/images/projects/Weldon front of house.jpg',
    alt: 'Weldon residence front view with new tile roof',
    city: 'Delray Beach',
    roofType: 'Concrete Tile',
    description: 'Elegant tile roof installation'
  },
  {
    id: 'p008',
    imageSrc: '/images/projects/Weldon house, Delray Beach.jpg',
    alt: 'Complete roof replacement Weldon house Delray Beach',
    city: 'Delray Beach',
    roofType: 'Concrete Tile',
    description: 'Full roof replacement with tile system'
  },
  {
    id: 'p009',
    imageSrc: '/images/projects/Torch applying cap sheet.jpg',
    alt: 'Commercial flat roof torch-down installation',
    city: 'Pompano Beach',
    roofType: 'Modified Bitumen',
    description: 'Commercial flat roof with torch-applied cap sheet'
  },
  {
    id: 'p010',
    imageSrc: '/images/projects/Ttorch applied base sheet.jpg',
    alt: 'Torch applied base sheet commercial roofing',
    city: 'Fort Lauderdale',
    roofType: 'Modified Bitumen',
    description: 'Modified bitumen roofing system'
  },
  {
    id: 'p011',
    imageSrc: '/images/projects/Working on single ply roof.JPG',
    alt: 'Commercial single ply TPO roof installation',
    city: 'Fort Lauderdale',
    roofType: 'TPO Single Ply',
    description: 'Commercial TPO flat roof system'
  },
  {
    id: 'p012',
    imageSrc: '/images/projects/Coating crew .PNG',
    alt: 'Roof coating application crew at work',
    city: 'Broward County',
    roofType: 'Roof Coating',
    description: 'Professional roof coating application'
  },
  {
    id: 'p013',
    imageSrc: '/images/projects/Tile install in progress.JPG',
    alt: 'Tile roof installation in progress',
    city: 'Palm Beach County',
    roofType: 'Concrete Tile',
    description: 'Tile roof installation process'
  },
  {
    id: 'p014',
    imageSrc: '/images/projects/Tile roof loaded and ready for install.JPG',
    alt: 'Tile materials staged and ready for installation',
    city: 'Palm Beach Gardens',
    roofType: 'Concrete Tile',
    description: 'Materials staging for tile roof project'
  },
  {
    id: 'p015',
    imageSrc: '/images/projects/project-luxury-tile-aerial-1.jpg',
    alt: 'Luxury tile roof aerial view',
    city: 'Boca Raton',
    roofType: 'Premium Tile',
    description: 'High-end tile roof installation'
  },
  {
    id: 'p016',
    imageSrc: '/images/projects/project-luxury-tile-aerial-2.jpg',
    alt: 'Luxury estate tile roof from above',
    city: 'Boca Raton',
    roofType: 'Premium Tile',
    description: 'Luxury estate roofing project'
  },
  {
    id: 'p017',
    imageSrc: '/images/projects/project-modern-gray-sideview.jpg',
    alt: 'Modern gray metal roof side view',
    city: 'Coral Springs',
    roofType: 'Metal Roof',
    description: 'Contemporary metal roof system'
  },
  {
    id: 'p018',
    imageSrc: '/images/projects/project-white-metalroof-street.jpg',
    alt: 'White metal roof street view',
    city: 'Deerfield Beach',
    roofType: 'Metal Roof',
    description: 'White metal roof installation'
  },
  {
    id: 'p019',
    imageSrc: '/images/projects/hero-modern-gray-metalroof.jpg',
    alt: 'Modern gray metal roof contemporary home',
    city: 'Parkland',
    roofType: 'Standing Seam Metal',
    description: 'Modern architectural metal roof'
  },
  {
    id: 'p020',
    imageSrc: '/images/projects/project-metalroof-decorative-driveway.jpg',
    alt: 'Metal roof with decorative driveway',
    city: 'Weston',
    roofType: 'Metal Roof',
    description: 'Metal roof on luxury home'
  },
  {
    id: 'p021',
    imageSrc: '/images/projects/project-commercial-flat-roof.jpg',
    alt: 'Commercial flat roof installation',
    city: 'Fort Lauderdale',
    roofType: 'TPO Commercial',
    description: 'Large commercial flat roof project'
  },
  {
    id: 'p022',
    imageSrc: '/images/projects/crew-flat-roof-commercial.jpg',
    alt: 'Crew working on commercial flat roof',
    city: 'Pompano Beach',
    roofType: 'Commercial Flat',
    description: 'Commercial roofing crew at work'
  },
  {
    id: 'p023',
    imageSrc: '/images/projects/crew-team-photo-commercial.jpg',
    alt: 'All Phase Construction commercial roofing team',
    city: 'Broward County',
    roofType: 'Commercial Project',
    description: 'Professional commercial roofing team'
  },
  {
    id: 'p024',
    imageSrc: '/images/projects/crew-tile-install-action.jpg',
    alt: 'Crew installing tile roof',
    city: 'Palm Beach County',
    roofType: 'Tile Installation',
    description: 'Expert tile roof installation crew'
  },
  {
    id: 'p025',
    imageSrc: '/images/projects/crew-tile-staging-aerial.jpg',
    alt: 'Aerial view of tile staging area',
    city: 'Boca Raton',
    roofType: 'Tile Project',
    description: 'Organized tile roof project staging'
  },
  {
    id: 'p026',
    imageSrc: '/images/projects/system-roof-decking-insulation.jpg',
    alt: 'Roof decking and insulation system',
    city: 'Delray Beach',
    roofType: 'Roof System',
    description: 'Quality roof decking preparation'
  },
  {
    id: 'p027',
    imageSrc: '/images/projects/system-titan-underlayment.jpg',
    alt: 'Titan underlayment installation',
    city: 'Boynton Beach',
    roofType: 'Roof System',
    description: 'Premium underlayment system'
  },
  {
    id: 'p028',
    imageSrc: '/images/projects/system-commercial-materials-staging.jpg',
    alt: 'Commercial roofing materials staging',
    city: 'Fort Lauderdale',
    roofType: 'Commercial',
    description: 'Materials staging for commercial project'
  },
  // Real project entries from Davie and Fort Lauderdale
  {
    id: 'p029',
    imageSrc: '/images/projects/001-fort-lauderdale-commercial-roof-restoration-all-phase-usa.jpg',
    alt: 'Commercial roof restoration at an aviation facility in Fort Lauderdale, Florida by All Phase Construction USA.',
    city: 'Fort Lauderdale, FL',
    roofType: 'Commercial Roof Restoration',
    description: 'Aviation facility roof restoration with premium commercial coating system.'
  },
  {
    id: 'p030',
    imageSrc: '/images/projects/002-davie-flat-tile-roof-all-phase-usa.jpg',
    alt: 'Flat tile roof project in Davie, Florida completed by All Phase Construction USA.',
    city: 'Davie, FL',
    roofType: 'Flat Tile Roof',
    description: 'Flat tile roof project performed in Davie, improving water shedding and curb appeal.'
  },
  {
    id: 'p031',
    imageSrc: '/images/projects/003-davie-tile-roof-replacement-all-phase-usa.jpg',
    alt: 'Tile roof replacement with upgraded underlayment in Davie, Florida by All Phase Construction USA.',
    city: 'Davie, FL',
    roofType: 'Tile Roof Replacement',
    description: 'Full tile roof replacement with upgraded waterproofing underlayment.'
  },
  {
    id: 'p032',
    imageSrc: '/images/projects/004-davie-roof-flashing-repair-all-phase-usa.jpg',
    alt: 'Roof flashing repair performed in Davie, Florida by All Phase Construction USA.',
    city: 'Davie, FL',
    roofType: 'Roof Flashing Repair',
    description: 'Professional roof flashing repair to prevent water intrusion.'
  },
  {
    id: 'p033',
    imageSrc: '/images/projects/005-davie-tile-roof-cleaning-all-phase-usa.jpg',
    alt: 'Tile roof cleaning and maintenance in Davie, Florida using crane access by All Phase Construction USA.',
    city: 'Davie, FL',
    roofType: 'Tile Roof Cleaning',
    description: 'Tile roof cleaning using crane access for safe and thorough service.'
  },
  {
    id: 'p034',
    imageSrc: '/images/projects/006-davie-tile-roof-repair-all-phase-usa.jpg',
    alt: 'Tile roof repair and maintenance in Davie, Florida by All Phase Construction USA.',
    city: 'Davie, FL',
    roofType: 'Tile Roof Repair',
    description: 'Tile roof repair addressing cracked tiles and underlayment exposure.'
  },
  {
    id: 'p035',
    imageSrc: '/images/projects/007-davie-flat-roof-repair-all-phase-usa.jpg',
    alt: 'Flat roof repair work completed in Davie, Florida by All Phase Construction USA.',
    city: 'Davie, FL',
    roofType: 'Flat Roof Repair',
    description: 'Flat roof repair to improve drainage and waterproofing integrity.'
  },
  {
    id: 'p036',
    imageSrc: '/images/projects/008-davie-barrel-tile-roof-repair-all-phase-usa.jpg',
    alt: 'Barrel tile roof repair completed in Davie, Florida by All Phase Construction USA.',
    city: 'Davie, FL',
    roofType: 'Barrel Tile Roof Repair',
    description: 'Barrel tile roof repair restoring aesthetic and functional performance.'
  },
  {
    id: 'p037',
    imageSrc: '/images/projects/009-davie-tile-roof-leak-repair-all-phase-usa.jpg',
    alt: 'Tile roof leak repair services performed in Davie, Florida by All Phase Construction USA.',
    city: 'Davie, FL',
    roofType: 'Tile Roof Leak Repair',
    description: 'Tile roof leak repair to stop active water intrusion.'
  },
  {
    id: 'p038',
    imageSrc: '/images/projects/010-davie-tile-roof-leak-detection-all-phase-usa.jpg',
    alt: 'Tile roof leak detection and diagnostic service in Davie, Florida by All Phase Construction USA.',
    city: 'Davie, FL',
    roofType: 'Tile Roof Leak Detection',
    description: 'Leak detection service for a tile roof identifying moisture pathways.'
  },
  {
    id: 'p039',
    imageSrc: '/images/projects/011-davie-shingle-roof-replacement-all-phase-usa.jpg',
    alt: 'Shingle roof replacement project completed in Davie, Florida by All Phase Construction USA.',
    city: 'Davie, FL',
    roofType: 'Shingle Roof Replacement',
    description: 'Full asphalt shingle roof replacement increasing durability and lifespan.'
  },
  {
    id: 'p040',
    imageSrc: '/images/projects/012-davie-asphalt-shingle-repair-all-phase-usa.jpg',
    alt: 'Asphalt shingle roof repair project in Davie, Florida by All Phase Construction USA.',
    city: 'Davie, FL',
    roofType: 'Asphalt Shingle Repair',
    description: 'Asphalt shingle repair restoring damaged sections of the roof.'
  },
  {
    id: 'p041',
    imageSrc: '/images/projects/013-davie-shingle-roof-leak-repair-all-phase-usa.jpg',
    alt: 'Shingle roof leak repair project in Davie, Florida by All Phase Construction USA.',
    city: 'Davie, FL',
    roofType: 'Shingle Roof Leak Repair',
    description: 'Leak repair on an asphalt shingle roof preventing further interior damage.'
  },
  {
    id: 'p042',
    imageSrc: '/images/projects/014-davie-soffit-repair-all-phase-usa.jpg',
    alt: 'Soffit repair project performed in Davie, Florida by All Phase Construction USA.',
    city: 'Davie, FL',
    roofType: 'Soffit Repair',
    description: 'Soffit repair providing improved ventilation and aesthetic restoration.'
  },
  {
    id: 'p043',
    imageSrc: '/images/projects/015-davie-soffit-and-fascia-repair-all-phase-usa.jpg',
    alt: 'Soffit and fascia repair completed in Davie, Florida by All Phase Construction USA.',
    city: 'Davie, FL',
    roofType: 'Soffit & Fascia Repair',
    description: 'Soffit and fascia repair reinforcing the roof edge structure.'
  },
  {
    id: 'p044',
    imageSrc: '/images/projects/016-davie-shingle-roof-replacement-all-phase-usa.jpg',
    alt: 'Shingle roof replacement project in Davie, Florida by All Phase Construction USA.',
    city: 'Davie, FL',
    roofType: 'Shingle Roof Replacement',
    description: 'Shingle roof replacement improving durability and curb appeal.'
  },
  {
    id: 'p045',
    imageSrc: '/images/projects/017-davie-flat-roof-coating-all-phase-usa.jpg',
    alt: 'Flat roof coating application in Davie, Florida by All Phase Construction USA.',
    city: 'Davie, FL',
    roofType: 'Flat Roof Coating',
    description: 'Protective flat roof coating system applied to extend roof life.'
  },
  {
    id: 'p046',
    imageSrc: '/images/projects/018-davie-commercial-roof-repair-all-phase-usa.jpg',
    alt: 'Commercial roof repair performed in Davie, Florida by All Phase Construction USA.',
    city: 'Davie, FL',
    roofType: 'Commercial Roof Repair',
    description: 'Commercial roof repair restoring waterproofing integrity.'
  },
  {
    id: 'p047',
    imageSrc: '/images/projects/019-davie-tile-roof-valley-repair-all-phase-usa.jpg',
    alt: 'Tile roof valley repair in Davie, Florida by All Phase Construction USA.',
    city: 'Davie, FL',
    roofType: 'Tile Roof Valley Repair',
    description: 'Reconstruction of tile roof valley to improve drainage and prevent leaks.'
  },
  {
    id: 'p048',
    imageSrc: '/images/projects/020-davie-tile-roof-ridge-repair-all-phase-usa.jpg',
    alt: 'Tile roof ridge repair completed in Davie, Florida by All Phase Construction USA.',
    city: 'Davie, FL',
    roofType: 'Tile Roof Ridge Repair',
    description: 'Tile ridge repair ensuring proper sealing and weather protection.'
  },
  {
    id: 'p049',
    imageSrc: '/images/projects/021-davie-broken-tile-replacement-all-phase-usa.jpg',
    alt: 'Broken tile replacement in Davie, Florida by All Phase Construction USA.',
    city: 'Davie, FL',
    roofType: 'Tile Roof Repair',
    description: 'Replacement of cracked and broken tiles to restore roof integrity.'
  },
  {
    id: 'p050',
    imageSrc: '/images/projects/022-davie-tile-roof-underlayment-repair-all-phase-usa.jpg',
    alt: 'Tile roof underlayment repair in Davie, Florida by All Phase Construction USA.',
    city: 'Davie, FL',
    roofType: 'Underlayment Repair',
    description: 'Repair of damaged tile roof underlayment to prevent water intrusion.'
  },
  {
    id: 'p051',
    imageSrc: '/images/projects/023-davie-gutter-repair-all-phase-usa.jpg',
    alt: 'Gutter repair performed in Davie, Florida by All Phase Construction USA.',
    city: 'Davie, FL',
    roofType: 'Gutter Repair',
    description: 'Gutter repair ensuring proper drainage around the home.'
  },
  {
    id: 'p052',
    imageSrc: '/images/projects/024-davie-gutter-cleaning-all-phase-usa.jpg',
    alt: 'Gutter cleaning project in Davie, Florida by All Phase Construction USA.',
    city: 'Davie, FL',
    roofType: 'Gutter Cleaning',
    description: 'Gutter cleaning service improving water flow and preventing overflow.'
  },
  {
    id: 'p053',
    imageSrc: '/images/projects/025-parkland-metal-roof-installation-all-phase-usa.jpg',
    alt: 'Metal roof installation completed in Parkland, Florida by All Phase Construction USA.',
    city: 'Parkland, FL',
    roofType: 'Metal Roof Installation',
    description: 'Mechanically seamed metal roof installed for long-term performance.'
  },
  {
    id: 'p054',
    imageSrc: '/images/projects/026-parkland-metal-roof-flashing-all-phase-usa.jpg',
    alt: 'Metal roof flashing work in Parkland, Florida by All Phase Construction USA.',
    city: 'Parkland, FL',
    roofType: 'Metal Roof Flashing',
    description: 'Flashing installation improving waterproofing around penetrations.'
  },
  {
    id: 'p055',
    imageSrc: '/images/projects/027-parkland-metal-roof-trim-install-all-phase-usa.jpg',
    alt: 'Metal roof trim installation in Parkland, Florida by All Phase Construction USA.',
    city: 'Parkland, FL',
    roofType: 'Metal Roof Trim',
    description: 'Installation of metal roof trim components for a finished look.'
  },
  {
    id: 'p056',
    imageSrc: '/images/projects/028-parkland-metal-roof-panels-all-phase-usa.jpg',
    alt: 'Mechanically seamed metal roof panels installed in Parkland, Florida by All Phase Construction USA.',
    city: 'Parkland, FL',
    roofType: 'Metal Roof Panels',
    description: 'Installation of metal roof panels with concealed fasteners.'
  },
  {
    id: 'p057',
    imageSrc: '/images/projects/029-parkland-metal-roof-seam-locking-all-phase-usa.jpg',
    alt: 'Metal roof seam locking performed in Parkland, Florida by All Phase Construction USA.',
    city: 'Parkland, FL',
    roofType: 'Seam-Locked Metal Roof',
    description: 'Mechanically seamed roof system locked in place for superior strength.'
  },
  {
    id: 'p058',
    imageSrc: '/images/projects/030-parkland-metal-roof-finishing-all-phase-usa.jpg',
    alt: 'Metal roof finishing work in Parkland, Florida by All Phase Construction USA.',
    city: 'Parkland, FL',
    roofType: 'Metal Roof Finishing',
    description: 'Finishing details applied to complete the mechanically seamed metal roof.'
  },
  {
    id: 'p059',
    imageSrc: '/images/projects/project-59.jpg',
    alt: 'Metal roof in Lighthouse Point',
    city: 'Lighthouse Point',
    roofType: 'Aluminum Roof',
    description: 'Coastal aluminum roofing'
  },
  {
    id: 'p060',
    imageSrc: '/images/projects/project-60.jpg',
    alt: 'Tile roof in Sea Ranch Lakes',
    city: 'Sea Ranch Lakes',
    roofType: 'Mediterranean Tile',
    description: 'Luxury Mediterranean tile roof'
  }
];

export default function ProjectsPage() {
  return (
    <>
      <SEO
        title="Projects | All Phase Construction USA"
        description="View real roofing projects completed by All Phase Construction USA across Broward and Palm Beach Counties, including tile, metal, flat roofs, waterproofing, and more."
        url="https://chrisp-png-roofing-c-gxj0.bolt.host/projects"
        canonical="https://chrisp-png-roofing-c-gxj0.bolt.host/projects"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://chrisp-png-roofing-c-gxj0.bolt.host/' },
          { name: 'Projects', url: 'https://chrisp-png-roofing-c-gxj0.bolt.host/projects' }
        ]}
      />

      <div className="min-h-screen bg-neutral-950">
        {/* Header Section */}
        <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 border-b border-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Projects & Real Roofs
              </h1>
              <p className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto">
                Real projects, real roofs, real customers across Broward and Palm Beach Counties.
              </p>
            </div>
          </div>
        </div>

        {/* Gallery Grid Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {PROJECT_GALLERY.map((project) => (
              <div
                key={project.id}
                className="bg-neutral-900 rounded-lg overflow-hidden border border-neutral-800 hover:border-neutral-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-800">
                  <img
                    src={project.imageSrc}
                    alt={project.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2 text-neutral-400 text-sm">
                      <MapPin className="w-4 h-4 flex-shrink-0" />
                      <span className="font-medium">{project.city}</span>
                    </div>
                    <div className="flex items-center gap-2 text-blue-400 text-sm">
                      <Layers className="w-4 h-4 flex-shrink-0" />
                      <span className="text-right">{project.roofType}</span>
                    </div>
                  </div>
                  {project.description && (
                    <p className="text-neutral-300 text-sm line-clamp-2">
                      {project.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Section */}
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
    </>
  );
}
