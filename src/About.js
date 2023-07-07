import HASection from "./components/HASection.js";
import { useProductContext } from "./context/productcontext";

const About = () => {
  const { myName } = useProductContext();

  const data = {
    name: "Bake N Bash",
  };

  return (
    <>
      {myName}
      <HASection myData={data} />
    </>
  );
};

export default About;