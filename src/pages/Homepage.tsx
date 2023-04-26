import { CategoriesFood, FavoriteFood } from "../components";
import { HeroSection } from "../layout";

const Homepage = () => {
  return (
    <>
      <HeroSection />
      <CategoriesFood />
      <FavoriteFood />
    </>
  );
};

export default Homepage;
