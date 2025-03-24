import SectionHeader from "./SectionHeader";

const Brands = () => {
  return (
    <section className="flex flex-col gap-5">
      <SectionHeader
        title="Brands"
        subtitle="Explore a wide range of car brands from luxury to economy. Find detailed insights on performance, features, and history."
        route="/brands"
      />
    </section>
  );
};

export default Brands;
