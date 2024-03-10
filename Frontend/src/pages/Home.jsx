import LandingNavBar from "../components/LandingNavBar";
import { useAuth } from "../context/authContext";


const Home = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="">

      <LandingNavBar/>

    </div>
  );
};

export default Home;
