import Articles from "@/components/Articles";
import Brands from "@/components/Brands";
import Cars from "@/components/Cars";
import Hero from "@/components/Hero";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <div className="container mx-auto p-10 flex flex-col gap-10">
        <Brands />
        <Cars />
        <Articles />
      </div>
    </div>
  );
};

export default HomePage;
