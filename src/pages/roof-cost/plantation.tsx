import CityRoofCostTemplate from '../../components/city/CityRoofCostTemplate';

export default function PlantationRoofCostPage() {
  return (
    <CityRoofCostTemplate
      cityName="Plantation"
      citySlug="plantation"
      isCoastal={false}
      hoaCommon={true}
    />
  );
}
