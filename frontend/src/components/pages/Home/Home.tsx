import "./Home.css";
import Hero from "../../partials/Hero";
import CreateForm from "../../partials/CreateForm";
import Features from "../../partials/Features";

const Home = () => {
  return (
    <main className="flex flex-col items-center">
      <div className="glow-white-default left-110" />
      <div className="glow-blue-default left-180" />
      <div className="glow-middle" />
      <div className="glow-blue-default right-130" />
      <div className="glow-white-default right-50" />
      <Hero />
      <CreateForm />
      <Features />
    </main>
  );
};

export default Home;
