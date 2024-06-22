import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import LandingNavBar from "../components/LandingNavBar";
import Payments from "../components/Payments";
import PotentialLogos from "../components/potentialLogos";
import { useAuth } from "../context/authContext";

const Home = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="bg-dark">
      <LandingNavBar />
      <Hero />
      <Features />
      <Payments />
      <PotentialLogos />
      <Footer />
    </div>
  );
};

export default Home;
