interface CustomerProject {
  id: string;
  name: string;
  quote: string;
  city: string;
  roofType: string;
  imageUrl: string;
  alt: string;
  rating: number;
}

const customerProjects: CustomerProject[] = [
  {
    id: '1',
    name: 'The Martinez Family',
    quote: 'Our new tile roof is absolutely stunning. Worth every penny!',
    city: 'Boca Raton',
    roofType: 'tile',
    imageUrl: '/images/projects/project-1.jpg',
    alt: 'Tile roof installation in Boca Raton, Florida',
    rating: 5
  },
  {
    id: '2',
    name: 'David & Linda Chen',
    quote: 'Best roofing decision we made. Metal roof looks amazing!',
    city: 'Fort Lauderdale',
    roofType: 'metal',
    imageUrl: '/images/projects/project-2.jpg',
    alt: 'Metal roof installation in Fort Lauderdale, Florida',
    rating: 5
  },
  {
    id: '3',
    name: 'Robert Wilson',
    quote: 'From old and damaged to beautiful and secure. Thank you!',
    city: 'Delray Beach',
    roofType: 'tile',
    imageUrl: '/images/projects/project-3.jpg',
    alt: 'Tile roof replacement in Delray Beach, Florida',
    rating: 5
  },
  {
    id: '4',
    name: 'Jennifer Rodriguez',
    quote: 'Impact-rated shingles give us peace of mind during hurricane season.',
    city: 'Pompano Beach',
    roofType: 'shingle',
    imageUrl: '/images/projects/project-4.jpg',
    alt: 'Shingle roof installation in Pompano Beach, Florida',
    rating: 5
  },
  {
    id: '5',
    name: 'Coral Springs Business Park',
    quote: 'Our commercial flat roof installation was completed on time and on budget.',
    city: 'Coral Springs',
    roofType: 'flat',
    imageUrl: '/images/projects/project-5.jpg',
    alt: 'Commercial flat roof in Coral Springs, Florida',
    rating: 5
  },
  {
    id: '6',
    name: 'The Thompson Family',
    quote: 'The crew was fantastic and our roof looks incredible!',
    city: 'Palm Beach County',
    roofType: 'shingle',
    imageUrl: '/images/projects/project-6.jpg',
    alt: 'Shingle roof installation in Palm Beach County, Florida',
    rating: 5
  },
  {
    id: '7',
    name: 'Estate in Boca Raton',
    quote: 'Aerial view shows the incredible craftsmanship of our tile roof.',
    city: 'Boca Raton',
    roofType: 'tile',
    imageUrl: '/images/projects/project-7.jpg',
    alt: 'Luxury tile roof in Boca Raton, Florida',
    rating: 5
  },
  {
    id: '8',
    name: 'Michael Stevens',
    quote: 'The foam adhesive attachment is a game-changer for wind resistance.',
    city: 'Broward County',
    roofType: 'tile',
    imageUrl: '/images/projects/project-8.jpg',
    alt: 'Hurricane-rated tile roof in Broward County, Florida',
    rating: 5
  },
  {
    id: '9',
    name: 'Sarah Martinez',
    quote: 'Professional metal roof installation with attention to every detail.',
    city: 'Palm Beach County',
    roofType: 'metal',
    imageUrl: '/images/projects/project-9.jpg',
    alt: 'Standing seam metal roof in Palm Beach County, Florida',
    rating: 5
  },
  {
    id: '10',
    name: 'James Patterson',
    quote: 'The wind mitigation inspection saved us hundreds on insurance.',
    city: 'Delray Beach',
    roofType: 'wind_mitigation',
    imageUrl: '/images/projects/project-10.jpg',
    alt: 'Wind mitigation roof upgrade in Delray Beach, Florida',
    rating: 5
  },
  {
    id: '11',
    name: 'Karen Williams',
    quote: 'The commercial flat roof exceeded our expectations.',
    city: 'Fort Lauderdale',
    roofType: 'commercial',
    imageUrl: '/images/projects/project-11.jpg',
    alt: 'Commercial TPO roof in Fort Lauderdale, Florida',
    rating: 5
  },
  {
    id: '12',
    name: 'The Anderson Family',
    quote: 'Our HOA was impressed with the quality and professionalism.',
    city: 'Parkland',
    roofType: 'hoa',
    imageUrl: '/images/projects/project-12.jpg',
    alt: 'HOA multi-family roof replacement in Parkland, Florida',
    rating: 5
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
          {customerProjects.map((item, index) => {
            const projectTypeLabel = PROJECT_TYPE_LABELS[item.roofType] || item.roofType;

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
                    src={item.imageUrl}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-white font-semibold text-base">
                      {item.name}
                    </h3>
                    <div className="flex text-yellow-500 text-xs">
                      {'⭐'.repeat(item.rating)}
                    </div>
                  </div>

                  <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                    <meta itemProp="ratingValue" content={String(item.rating)} />
                    <meta itemProp="bestRating" content="5" />
                  </div>

                  <p
                    className="text-neutral-300 text-sm mb-3 line-clamp-2"
                    itemProp="reviewBody"
                  >
                    "{item.quote}"
                  </p>

                  <div className="flex items-center text-xs text-neutral-500 border-t border-neutral-800 pt-3">
                    <span itemProp="author" itemScope itemType="https://schema.org/Person">
                      <meta itemProp="name" content={item.name} />
                    </span>
                    <span className="font-medium">{item.city}</span>
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
