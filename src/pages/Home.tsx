import { CategoriesFood, FavoriteFood } from "../components";
import { BlogSection, HeroSection } from "../layout";

const Homepage = () => {
  return (
    <>
      <HeroSection />
      <CategoriesFood />
      <FavoriteFood />

      <BlogSection />
    </>
  );
};

export default Homepage;
