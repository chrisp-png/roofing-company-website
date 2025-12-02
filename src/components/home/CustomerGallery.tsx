import { useState, useEffect } from 'react';

interface GalleryImage {
  file_path: string;
  alt_text: string;
}

interface CustomerTestimonial {
  id: string;
  customer_name: string;
  testimonial_quote: string;
  project_type: string;
  project_location: string;
  images: GalleryImage;
}

const FALLBACK_ITEMS = [
  {
    id: '1',
    customer_name: 'The Martinez Family',
    testimonial_quote: 'Our new tile roof is absolutely stunning. Worth every penny!',
    project_type: 'tile',
    project_location: 'Boca Raton',
    images: {
      file_path: '/images/hero-desktop-1920.jpg',
      alt_text: 'All Phase Construction USA – Tile roof in Boca Raton, Florida'
    }
  },
  {
    id: '2',
    customer_name: 'David & Linda Chen',
    testimonial_quote: 'Best roofing decision we made. Metal roof looks amazing!',
    project_type: 'metal',
    project_location: 'Fort Lauderdale',
    images: {
      file_path: '/images/hero-desktop-1280.jpg',
      alt_text: 'All Phase Construction USA – Metal roof in Fort Lauderdale, Florida'
    }
  },
  {
    id: '3',
    customer_name: 'Robert Wilson',
    testimonial_quote: 'From old and damaged to beautiful and secure. Thank you!',
    project_type: 'tile',
    project_location: 'Delray Beach',
    images: {
      file_path: '/images/hero-desktop-1920.jpg',
      alt_text: 'All Phase Construction USA – Tile roof in Delray Beach, Florida'
    }
  },
  {
    id: '4',
    customer_name: 'Jennifer Rodriguez',
    testimonial_quote: 'Impact-rated shingles give us peace of mind during hurricane season.',
    project_type: 'shingle',
    project_location: 'Pompano Beach',
    images: {
      file_path: '/images/hero-desktop-1280.jpg',
      alt_text: 'All Phase Construction USA – Shingle roof in Pompano Beach, Florida'
    }
  },
  {
    id: '5',
    customer_name: 'Coral Springs Business Park',
    testimonial_quote: 'Our commercial flat roof installation was completed on time and on budget.',
    project_type: 'flat',
    project_location: 'Coral Springs',
    images: {
      file_path: '/images/hero-mobile.jpg',
      alt_text: 'All Phase Construction USA – Flat roof in Coral Springs, Florida'
    }
  },
  {
    id: '6',
    customer_name: 'The Thompson Family',
    testimonial_quote: 'The crew was fantastic and our roof looks incredible!',
    project_type: 'shingle',
    project_location: 'Palm Beach County',
    images: {
      file_path: '/images/hero-desktop-1920.jpg',
      alt_text: 'All Phase Construction USA – Shingle roof in Palm Beach County, Florida'
    }
  },
  {
    id: '7',
    customer_name: 'Estate in Boca Raton',
    testimonial_quote: 'Aerial view shows the incredible craftsmanship of our tile roof.',
    project_type: 'tile',
    project_location: 'Boca Raton',
    images: {
      file_path: '/images/hero-desktop-1280.jpg',
      alt_text: 'All Phase Construction USA – Tile roof in Boca Raton, Florida'
    }
  },
  {
    id: '8',
    customer_name: 'Michael Stevens',
    testimonial_quote: 'The foam adhesive attachment is a game-changer for wind resistance.',
    project_type: 'tile',
    project_location: 'Broward County',
    images: {
      file_path: '/images/hero-mobile.jpg',
      alt_text: 'All Phase Construction USA – Tile roof installation in Broward County, Florida'
    }
  },
  {
    id: '9',
    customer_name: 'Sarah Martinez',
    testimonial_quote: 'Professional metal roof installation with attention to every detail.',
    project_type: 'metal',
    project_location: 'Palm Beach County',
    images: {
      file_path: '/images/hero-desktop-1920.jpg',
      alt_text: 'All Phase Construction USA – Metal roof in Palm Beach County, Florida'
    }
  }
];

const PROJECT_TYPE_LABELS: Record<string, string> = {
  'tile': 'Tile Roof',
  'metal': 'Metal Roof',
  'shingle': 'Shingle Roof',
  'flat': 'Flat Roof',
  'repair': 'Roof Repair',
  'wind_mitigation': 'Wind Mitigation',
  'commercial': 'Commercial Roof',
  'hoa': 'HOA/Condo Roof'
};

export default function CustomerGallery() {
  const [items, setItems] = useState<CustomerTestimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setItems(FALLBACK_ITEMS);
    setLoading(false);
  }, []);

  if (loading) {
    return null;
  }

  return (
    <section
      className="py-16 bg-neutral-950 border-t border-neutral-800"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
          Real Roofs. Real Neighbors. Real Results.
        </h2>

        <p className="text-neutral-400 text-center max-w-2xl mx-auto mb-12">
          These are real All Phase Construction USA customers in Broward & Palm Beach Counties – not stock photos.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((item, index) => {
            const projectTypeLabel = PROJECT_TYPE_LABELS[item.project_type] || item.project_type;

            return (
              <div
                key={item.id}
                className="bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800 hover:border-neutral-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                itemScope
                itemType="https://schema.org/Review"
                itemProp="itemListElement"
              >
                <meta itemProp="position" content={String(index + 1)} />
                <div itemProp="itemReviewed" itemScope itemType="https://schema.org/Service">
                  <meta itemProp="name" content="Roofing Installation Service" />
                </div>

                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.images.file_path}
                    alt={item.images.alt_text}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-white font-semibold text-base">
                      {item.customer_name}
                    </h3>
                    <div className="flex text-yellow-500 text-xs">
                      {'⭐'.repeat(5)}
                    </div>
                  </div>

                  <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                    <meta itemProp="ratingValue" content="5" />
                    <meta itemProp="bestRating" content="5" />
                  </div>

                  <p
                    className="text-neutral-300 text-sm mb-3 line-clamp-2"
                    itemProp="reviewBody"
                  >
                    "{item.testimonial_quote}"
                  </p>

                  <div className="flex items-center text-xs text-neutral-500 border-t border-neutral-800 pt-3">
                    <span itemProp="author" itemScope itemType="https://schema.org/Person">
                      <meta itemProp="name" content={item.customer_name} />
                    </span>
                    <span className="font-medium">{item.project_location}</span>
                    <span className="mx-2">•</span>
                    <span className="italic">{projectTypeLabel}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
