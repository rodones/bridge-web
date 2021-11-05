import { useAuthenticated } from "../../hooks";

const Home = (): JSX.Element => {
  useAuthenticated();

  return <div>home</div>;
};

export default Home;
