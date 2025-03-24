import { brands } from "@/data";
import BrandCard from "./BrandCard";
import SectionHeader from "./SectionHeader";

const Brands = () => {
  return (
    <section className="flex flex-col gap-5">
      <SectionHeader
        title="Brands"
        subtitle="Explore a wide range of car brands from luxury to economy. Find detailed insights on performance, features, and history."
        route="/brands"
      />
      <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8 gap-5">
        {brands.map((brand) => (
          <BrandCard key={brand.id} brand={brand} />
        ))}
      </div>
    </section>
  );
};

export default Brands;
