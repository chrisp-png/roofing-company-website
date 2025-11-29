# City Roof Cost Page Template System

This directory contains a reusable template system for generating city-specific roof cost pages.

## Components

### CityRoofCostTemplate.tsx
The main template component that generates a complete city roof cost page with:
- SEO-optimized title and meta description
- FAQ schema markup (3 questions)
- Pricing sections for all roof types
- Internal links to service pages
- Mobile-responsive accordion FAQs
- CTA sections with phone and calculator links

## Usage

### Creating a New City Page

1. Create a new page file in `src/pages/`:
```typescript
// src/pages/RoofCostYourCityPage.tsx
import CityRoofCostTemplate from '../components/city/CityRoofCostTemplate';

export default function RoofCostYourCityPage() {
  return (
    <CityRoofCostTemplate
      cityName="Your City"
      citySlug="your-city"
      isCoastal={true}  // or false if inland
      hoaCommon={true}  // or false if HOAs are uncommon
    />
  );
}
```

2. Add the route to `src/AppRouter.tsx`:
```typescript
import RoofCostYourCityPage from './pages/RoofCostYourCityPage';

// In the Routes component:
<Route path="roof-cost-your-city" element={<RoofCostYourCityPage />} />
```

3. Optionally add city data to `src/config/cityRoofCostData.ts`:
```typescript
{
  cityName: 'Your City',
  citySlug: 'your-city',
  isCoastal: true,
  hoaCommon: true,
  specialNotes: 'Any special characteristics of this city',
}
```

## Props

### CityRoofCostTemplate Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `cityName` | string | Yes | - | Display name of the city (e.g., "Boca Raton") |
| `citySlug` | string | Yes | - | URL-friendly slug (e.g., "boca-raton") |
| `isCoastal` | boolean | No | false | Whether the city is coastal (affects copy about weather) |
| `hoaCommon` | boolean | No | false | Whether HOAs are common (adds HOA-specific content) |

## SEO Features

Each page automatically includes:
- **Title**: "How Much Does a Roof Cost in [City], FL? | 2025 Roofing Guide"
- **Meta Description**: Customized based on city and HOA status
- **FAQ Schema**: 3-question FAQPage schema with city-specific content
- **Canonical URL**: `/roof-cost-[city-slug]`

## Content Sections

1. **Hero Section** - H1, intro paragraph, CTA buttons
2. **Pricing Section** - 4 roof types with price ranges
3. **Pricing Factors** - 6 factors (5 if no HOA)
4. **Common Systems** - 4 roof types with details and links
5. **Why Choose Us** - 6 reasons (includes HOA assistance if applicable)
6. **CTA Section** - Final conversion section
7. **FAQ Section** - 3 collapsible questions

## Internal Links

Each page includes links to:
- `/roof-cost-calculator`
- `/tile-roofing`
- `/metal-roofing`
- `/shingle-roofing`
- `/residential-roofing`
- `/contact`

## Examples

### Coastal City with Common HOAs (Boca Raton)
```typescript
<CityRoofCostTemplate
  cityName="Boca Raton"
  citySlug="boca-raton"
  isCoastal={true}
  hoaCommon={true}
/>
```

### Inland City with HOAs (Coral Springs)
```typescript
<CityRoofCostTemplate
  cityName="Coral Springs"
  citySlug="coral-springs"
  isCoastal={false}
  hoaCommon={true}
/>
```

### Coastal City without Common HOAs (Pompano Beach)
```typescript
<CityRoofCostTemplate
  cityName="Pompano Beach"
  citySlug="pompano-beach"
  isCoastal={true}
  hoaCommon={false}
/>
```

## Maintenance

To update content across all city pages:
1. Edit `CityRoofCostTemplate.tsx`
2. Changes will automatically apply to all city pages using the template

## Migration

To migrate existing city pages to use the template:
1. Read the existing page to understand city characteristics
2. Replace all content with template usage
3. Set `isCoastal` and `hoaCommon` props appropriately
4. Test the page to ensure proper rendering
