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
    cityName: 'Deerfield Beach',
    citySlug: 'deerfield-beach',
    isCoastal: true,
    hoaCommon: false,
  },
  {
    cityName: 'Pompano Beach',
    citySlug: 'pompano-beach',
    isCoastal: true,
    hoaCommon: false,
  },
  {
    cityName: 'Lighthouse Point',
    citySlug: 'lighthouse-point',
    isCoastal: true,
    hoaCommon: true,
  },
  {
    cityName: 'Highland Beach',
    citySlug: 'highland-beach',
    isCoastal: true,
    hoaCommon: true,
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
    cityName: 'Margate',
    citySlug: 'margate',
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
    cityName: 'Fort Lauderdale',
    citySlug: 'fort-lauderdale',
    isCoastal: true,
    hoaCommon: true,
  },
  {
    cityName: 'Wilton Manors',
    citySlug: 'wilton-manors',
    isCoastal: false,
    hoaCommon: false,
  },
  {
    cityName: 'Oakland Park',
    citySlug: 'oakland-park',
    isCoastal: false,
    hoaCommon: false,
  },
  {
    cityName: 'Sunrise',
    citySlug: 'sunrise',
    isCoastal: false,
    hoaCommon: true,
  },
  {
    cityName: 'Plantation',
    citySlug: 'plantation',
    isCoastal: false,
    hoaCommon: true,
  },
  {
    cityName: 'Hollywood',
    citySlug: 'hollywood',
    isCoastal: true,
    hoaCommon: true,
  },
];

export function getCityData(citySlug: string): CityRoofCostData | undefined {
  return cityRoofCostData.find(city => city.citySlug === citySlug);
}
