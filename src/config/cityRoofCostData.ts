export interface CityRoofCostData {
  cityName: string;
  citySlug: string;
  isCoastal?: boolean;
  hoaCommon?: boolean;
  specialNotes?: string;
}

export const cityRoofCostData: CityRoofCostData[] = [
  {
    cityName: 'Boca Raton',
    citySlug: 'boca-raton',
    isCoastal: true,
    hoaCommon: true,
    specialNotes: 'Luxury homes with strict HOA requirements and premium material preferences',
  },
  {
    cityName: 'Delray Beach',
    citySlug: 'delray-beach',
    isCoastal: true,
    hoaCommon: true,
  },
  {
    cityName: 'Boynton Beach',
    citySlug: 'boynton-beach',
    isCoastal: true,
    hoaCommon: true,
  },
  {
    cityName: 'Pompano Beach',
    citySlug: 'pompano-beach',
    isCoastal: true,
    hoaCommon: false,
  },
  {
    cityName: 'Deerfield Beach',
    citySlug: 'deerfield-beach',
    isCoastal: true,
    hoaCommon: false,
  },
  {
    cityName: 'Fort Lauderdale',
    citySlug: 'fort-lauderdale',
    isCoastal: true,
    hoaCommon: true,
  },
  {
    cityName: 'Coral Springs',
    citySlug: 'coral-springs',
    isCoastal: false,
    hoaCommon: true,
  },
  {
    cityName: 'Coconut Creek',
    citySlug: 'coconut-creek',
    isCoastal: false,
    hoaCommon: true,
  },
  {
    cityName: 'Parkland',
    citySlug: 'parkland',
    isCoastal: false,
    hoaCommon: true,
  },
  {
    cityName: 'Tamarac',
    citySlug: 'tamarac',
    isCoastal: false,
    hoaCommon: true,
  },
  {
    cityName: 'Margate',
    citySlug: 'margate',
    isCoastal: false,
    hoaCommon: true,
  },
  {
    cityName: 'Lake Worth Beach',
    citySlug: 'lake-worth-beach',
    isCoastal: true,
    hoaCommon: false,
  },
  {
    cityName: 'West Palm Beach',
    citySlug: 'west-palm-beach',
    isCoastal: true,
    hoaCommon: true,
  },
  {
    cityName: 'Wellington',
    citySlug: 'wellington',
    isCoastal: false,
    hoaCommon: true,
  },
  {
    cityName: 'Palm Beach Gardens',
    citySlug: 'palm-beach-gardens',
    isCoastal: false,
    hoaCommon: true,
  },
  {
    cityName: 'Jupiter',
    citySlug: 'jupiter',
    isCoastal: true,
    hoaCommon: true,
  },
  {
    cityName: 'Palm Springs',
    citySlug: 'palm-springs',
    isCoastal: false,
    hoaCommon: true,
  },
  {
    cityName: 'Greenacres',
    citySlug: 'greenacres',
    isCoastal: false,
    hoaCommon: false,
  },
  {
    cityName: 'Lauderdale-by-the-Sea',
    citySlug: 'lauderdale-by-the-sea',
    isCoastal: true,
    hoaCommon: false,
  },
  {
    cityName: 'Lighthouse Point',
    citySlug: 'lighthouse-point',
    isCoastal: true,
    hoaCommon: true,
  },
];

export function getCityData(citySlug: string): CityRoofCostData | undefined {
  return cityRoofCostData.find(city => city.citySlug === citySlug);
}
