interface GeoEntityIntroProps {
  headline?: string;
  primaryDescription?: string;
  secondaryDescription?: string;
  customCities?: string[];
}

const DEFAULT_CONTENT = {
  headline: "South Florida's Trusted Roofing & General Contracting Experts",
  primaryDescription: "All Phase Construction USA is a dual-licensed Roofing Contractor (CCC1331464) and General Contractor (CGC1526236) serving Palm Beach and Broward Counties since 1999. We specialize in tile, metal, shingle, and flat roofing systems built to exceed Florida Building Code HVHZ standards with superior wind mitigation features.",
  secondaryDescription: "Homeowners in Boca Raton, Delray Beach, Fort Lauderdale, Coral Springs, Parkland, Deerfield Beach, Coconut Creek, Pompano Beach, Boynton Beach, and 20+ surrounding cities trust us for code-compliant reroofs, emergency repairs, HOA/COA projects, insurance-driven replacements, and premium roof systems backed by manufacturer warranties and Form 1802 wind mitigation certification.",
};

export default function GeoEntityIntro({
  headline = DEFAULT_CONTENT.headline,
  primaryDescription = DEFAULT_CONTENT.primaryDescription,
  secondaryDescription = DEFAULT_CONTENT.secondaryDescription,
}: GeoEntityIntroProps) {
  return (
    <section
      id="geo-intro"
      className="py-12 bg-black border-b border-neutral-800"
      itemScope
      itemType="https://schema.org/AboutPage"
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" itemProp="headline">
          {headline}
        </h2>

        <p
          className="text-neutral-300 text-lg md:text-xl max-w-3xl mx-auto mb-6"
          itemProp="description"
        >
          {primaryDescription}
        </p>

        {secondaryDescription && (
          <p className="text-neutral-300 text-lg md:text-xl max-w-3xl mx-auto">
            {secondaryDescription}
          </p>
        )}
      </div>
    </section>
  );
}
