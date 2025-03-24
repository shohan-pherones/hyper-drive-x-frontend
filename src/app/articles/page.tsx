import Articles from "@/components/Articles";
import Hero from "@/components/Hero";

const ArticlesPage = () => {
  return (
    <div>
      <Hero />
      <div className="container mx-auto p-10 flex flex-col gap-10">
        <Articles />
      </div>
    </div>
  );
};

export default ArticlesPage;
