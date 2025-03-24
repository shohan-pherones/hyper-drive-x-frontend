import Cars from "@/components/Cars";
import Hero from "@/components/Hero";

const CarsPage = () => {
  return (
    <div>
      <Hero />
      <div className="container mx-auto p-10 flex flex-col gap-10">
        <Cars />
      </div>
    </div>
  );
};

export default CarsPage;
