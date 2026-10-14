import CategoryShowcase from "@/component/home/CategoryShowcase";
import DesignerShowcase from "@/component/home/DesignerShowcase";
import EditorialBanner from "@/component/home/EditorialBanner";
import FeaturedCollection from "@/component/home/FeaturedCollection";
import Hero from "@/component/home/Hero";
import Journal from "@/component/home/Journal";
import PrivateEdit from "@/component/home/PrivateEdit";

// const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// const Home = async () => {
//   await delay(3000);

const Home = () => {
  return (
    <div className="">
      <Hero />
      <CategoryShowcase />
      <FeaturedCollection />
      <EditorialBanner />
      <DesignerShowcase />
      <Journal />
      <PrivateEdit />
    </div>
  );
};
export default Home;
