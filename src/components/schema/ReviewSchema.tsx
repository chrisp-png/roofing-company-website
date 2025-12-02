interface Review {
  author: string;
  rating: number;
  reviewBody: string;
  datePublished: string;
}

interface ReviewSchemaProps {
  reviews: Review[];
}

export default function ReviewSchema({ reviews }: ReviewSchemaProps) {
  const aggregateRating = {
    "@type": "AggregateRating",
    "ratingValue": (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1),
    "reviewCount": reviews.length,
    "bestRating": "5",
    "worstRating": "1"
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "@id": "https://chrisp-png-roofing-c-gxj0.bolt.host/#organization",
    "name": "All Phase Construction USA, LLC",
    "aggregateRating": aggregateRating,
    "review": reviews.map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.author
      },
      "datePublished": review.datePublished,
      "reviewBody": review.reviewBody,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating.toString(),
        "bestRating": "5",
        "worstRating": "1"
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
