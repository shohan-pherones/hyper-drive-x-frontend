import Brands from "@/components/Brands";
import Hero from "@/components/Hero";

const BrandsPage = () => {
  return (
    <div>
      <Hero />
      <div className="container mx-auto p-10 flex flex-col gap-10">
        <Brands />
      </div>
    </div>
  );
};

export default BrandsPage;
