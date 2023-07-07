import FeatureProduct from "./components/FeatureProduct";
import HASection from "./components/HASection";
import {Services} from "./components/Services";
import {Trusted }from "./components/Trusted";

const Home = () => {
  const data = {
    name: "Our Shop",
  };

  return (
    <>
      <HASection myData={data} />
      <FeatureProduct />
      <Services />
   
    </>
  );
};

export default Home;
