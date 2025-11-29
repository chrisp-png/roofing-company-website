import CityRoofCostTemplate from '../../components/city/CityRoofCostTemplate';

export default function ParklandRoofCostPage() {
  return (
    <CityRoofCostTemplate
      cityName="Parkland"
      citySlug="parkland"
      isCoastal={false}
      hoaCommon={true}
    />
  );
}
