import SectionHeader from "./SectionHeader";

const Cars = () => {
  return (
    <section className="flex flex-col gap-5">
      <SectionHeader
        title="Cars"
        subtitle="Explore a wide range of cars from luxury to economy. Find detailed insights on performance, features, and history."
        route="/cars"
      />
    </section>
  );
};

export default Cars;
