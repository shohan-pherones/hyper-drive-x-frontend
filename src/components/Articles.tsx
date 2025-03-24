import SectionHeader from "./SectionHeader";

const Articles = () => {
  return (
    <section className="flex flex-col gap-5">
      <SectionHeader
        title="Articles"
        subtitle="Discover a variety of articles covering car reviews, industry news, and in-depth insights on automotive trends."
        route="/articles"
      />
    </section>
  );
};

export default Articles;
