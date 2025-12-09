export interface ServiceArea {
  name: string;
  displayName: string;
  latitude: number;
  longitude: number;
  zipCodes: string[];
  landmarks: string[];
  neighborhoods: string[];
  description: string;
}

export const serviceAreas: ServiceArea[] = [
  {
    name: 'Boca Raton',
    displayName: 'Boca Raton, FL',
    latitude: 26.3683,
    longitude: -80.1289,
    zipCodes: ['33427', '33428', '33431', '33432', '33433', '33434', '33486', '33487', '33488', '33496', '33497', '33498'],
    landmarks: ['Mizner Park', 'Town Center Mall', 'Red Reef Park', 'Gumbo Limbo Nature Center', 'Spanish River Park'],
    neighborhoods: ['East Boca', 'West Boca', 'Broken Sound', 'Mizner Court', 'Royal Palm Yacht & Country Club', 'The Oaks', 'St. Andrews Country Club'],
    description: 'Premier roofing services for luxury homes and estates throughout Boca Raton, from beachfront properties along the Atlantic to gated communities in West Boca. Serving homeowners near Mizner Park, Town Center Mall, and exclusive neighborhoods like Royal Palm Yacht & Country Club.'
  },
  {
    name: 'Delray Beach',
    displayName: 'Delray Beach, FL',
    latitude: 26.4615,
    longitude: -80.0728,
    zipCodes: ['33444', '33445', '33446', '33447', '33448', '33482', '33483', '33484'],
    landmarks: ['Atlantic Avenue', 'Delray Beach Market', 'Veterans Park', 'Morikami Museum', 'Wakodahatchee Wetlands'],
    neighborhoods: ['Pineapple Grove', 'Lake Ida', 'Del-Trail', 'Tropic Isle', 'Seagate', 'Bexley', 'Seven Bridges'],
    description: 'Expert roofing installations for Delray Beach homes, from historic properties near Atlantic Avenue to modern residences in Seagate and Seven Bridges. Protecting homes near the Village by the Sea with superior craftsmanship and hurricane-rated materials.'
  },
  {
    name: 'Boynton Beach',
    displayName: 'Boynton Beach, FL',
    latitude: 26.5254,
    longitude: -80.0665,
    zipCodes: ['33424', '33425', '33426', '33435', '33436', '33437', '33472', '33473', '33474'],
    landmarks: ['Ocean Avenue', 'Boynton Harbor Marina', 'Oceanfront Park', 'Schoolhouse Children\'s Museum', 'Green Cay Nature Center'],
    neighborhoods: ['Ocean Ridge', 'Aberdeen', 'Canyon Lakes', 'Hunter\'s Run', 'Leisureville', 'Valencia Lakes', 'Cascades'],
    description: 'Trusted roofing contractor serving Boynton Beach communities from oceanfront properties to inland neighborhoods like Canyon Lakes and Hunter\'s Run. Over 30 years of experience protecting homes in this thriving coastal city.'
  },
  {
    name: 'Fort Lauderdale',
    displayName: 'Fort Lauderdale, FL',
    latitude: 26.1224,
    longitude: -80.1373,
    zipCodes: ['33301', '33304', '33305', '33306', '33308', '33309', '33311', '33312', '33315', '33316', '33317', '33319', '33334', '33394'],
    landmarks: ['Las Olas Boulevard', 'Fort Lauderdale Beach', 'Riverwalk', 'Hugh Taylor Birch State Park', 'Museum of Discovery and Science'],
    neighborhoods: ['Victoria Park', 'Colee Hammock', 'Rio Vista', 'Lauderdale Beach', 'Coral Ridge', 'Plantation Acres', 'Harbor Beach'],
    description: 'Professional roofing services throughout Fort Lauderdale, from waterfront mansions along the Intracoastal to family homes in Coral Ridge and Victoria Park. Serving the Venice of America with tile, metal, and flat roof expertise.'
  },
  {
    name: 'Pompano Beach',
    displayName: 'Pompano Beach, FL',
    latitude: 26.2379,
    longitude: -80.1248,
    zipCodes: ['33060', '33061', '33062', '33063', '33064', '33065', '33066', '33067', '33068', '33069', '33071', '33072', '33073', '33074', '33076', '33077'],
    landmarks: ['Pompano Beach Pier', 'Hillsboro Lighthouse', 'Pompano Beach Airpark', 'Fern Forest Nature Center', 'Festival Marketplace'],
    neighborhoods: ['Hillsboro Shores', 'Lighthouse Point', 'Palm Aire', 'Cresthaven', 'Leisureville', 'Crystal Lake', 'Cypress Bend'],
    description: 'Comprehensive roofing solutions for Pompano Beach residents, from beachside condos near the famous pier to single-family homes in Palm Aire and Cresthaven. Expert in coastal roofing with saltwater-resistant materials.'
  },
  {
    name: 'Coral Springs',
    displayName: 'Coral Springs, FL',
    latitude: 26.2708,
    longitude: -80.2706,
    zipCodes: ['33065', '33071', '33073', '33075', '33076', '33077'],
    landmarks: ['Coral Springs Center for the Arts', 'Mullins Park', 'Coral Springs Museum of Art', 'Sportsplex', 'Cypress Park'],
    neighborhoods: ['Eagle Trace', 'Heron Bay', 'Wyndham Lakes', 'Woodside', 'Coral Springs Country Club', 'Ramblewood', 'Country Glen'],
    description: 'Top-rated roofing contractor in Coral Springs, serving master-planned communities like Heron Bay and Eagle Trace. Specializing in tile and shingle roofs for family-friendly neighborhoods throughout this award-winning city.'
  },
  {
    name: 'Coconut Creek',
    displayName: 'Coconut Creek, FL',
    latitude: 26.2517,
    longitude: -80.1790,
    zipCodes: ['33063', '33066', '33073', '33097'],
    landmarks: ['Butterfly World', 'Tradewinds Park', 'Seminole Casino Coconut Creek', 'Coconut Creek Community Center'],
    neighborhoods: ['Wynmoor Village', 'Banyan Trails', 'Cocobay', 'Monterrey', 'Regency Lakes', 'Woodlands'],
    description: 'Reliable roofing services for Coconut Creek\'s "Butterfly Capital of the World," from retirement communities like Wynmoor to newer developments in Banyan Trails. Expert installation and repair for all roof types.'
  },
  {
    name: 'Parkland',
    displayName: 'Parkland, FL',
    latitude: 26.3103,
    longitude: -80.2373,
    zipCodes: ['33067', '33076'],
    landmarks: ['Pine Trails Park', 'Parkland Equestrian Center', 'Terramar Visitor Center'],
    neighborhoods: ['Heron Bay', 'Parkland Golf & Country Club', 'Parkland Isles', 'Cascades', 'Cypresshead', 'Pine Tree Estates'],
    description: 'Premium roofing for Parkland\'s luxury estates and family homes. Serving upscale communities like Parkland Golf & Country Club and Heron Bay with high-end tile and metal roof installations that complement the city\'s natural beauty.'
  },
  {
    name: 'Deerfield Beach',
    displayName: 'Deerfield Beach, FL',
    latitude: 26.3184,
    longitude: -80.0998,
    zipCodes: ['33441', '33442', '33443'],
    landmarks: ['Deerfield Beach Pier', 'Quiet Waters Park', 'Deerfield Island Park', 'Constitution Park'],
    neighborhoods: ['Century Village', 'The Cove', 'Hillsboro Pines', 'Kings Point', 'Newport Cove', 'Riverview'],
    description: 'Experienced roofing contractor serving Deerfield Beach, from the iconic pier to Century Village and Kings Point. Specializing in re-roofing projects for coastal properties and retirement communities with strict HOA requirements.'
  },
  {
    name: 'Lake Worth Beach',
    displayName: 'Lake Worth Beach, FL',
    latitude: 26.6156,
    longitude: -80.0517,
    zipCodes: ['33460', '33461', '33462', '33463', '33465', '33467'],
    landmarks: ['Lake Worth Beach Municipal Beach', 'Bryant Park', 'Lake Worth Pier', 'Cultural Plaza'],
    neighborhoods: ['College Park', 'Parrot Cove', 'Lake Osborne Estates', 'Park Ridge Estates', 'South Palm Park'],
    description: 'Quality roofing services for Lake Worth Beach\'s diverse communities, from historic downtown properties to lakefront homes and golf course estates. Protecting homes near the beach and Intracoastal Waterway with superior workmanship.'
  },
  {
    name: 'Wellington',
    displayName: 'Wellington, FL',
    latitude: 26.6587,
    longitude: -80.2683,
    zipCodes: ['33414', '33449', '33467', '33470'],
    landmarks: ['Palm Beach International Equestrian Center', 'Wellington Mall', 'Village Park', 'Wellington Preserve'],
    neighborhoods: ['Olympia', 'Grand Isles', 'Versailles', 'Aero Club', 'Wellington Green', 'Black Diamond'],
    description: 'Premier roofing for Wellington\'s equestrian estates and upscale communities. Serving the "Winter Equestrian Capital of the World" with custom tile and barrel tile installations for luxury properties near the polo grounds.'
  },
  {
    name: 'West Palm Beach',
    displayName: 'West Palm Beach, FL',
    latitude: 26.7153,
    longitude: -80.0534,
    zipCodes: ['33401', '33405', '33406', '33407', '33409', '33411', '33412', '33413', '33415', '33417'],
    landmarks: ['CityPlace', 'Clematis Street', 'Norton Museum of Art', 'Kravis Center', 'Palm Beach Zoo'],
    neighborhoods: ['Northwood', 'Flamingo Park', 'El Cid', 'Grandview Heights', 'Palm Beach Lakes', 'Ibis', 'Frenchman\'s Creek'],
    description: 'Full-service roofing for West Palm Beach, from downtown high-rises to waterfront estates in Frenchman\'s Creek. Expert in commercial flat roofing and luxury residential installations throughout Palm Beach County\'s largest city.'
  }
];

export const getAllServiceAreas = () => serviceAreas;

export const getServiceAreaByName = (name: string) =>
  serviceAreas.find(area => area.name.toLowerCase() === name.toLowerCase());
