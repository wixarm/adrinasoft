import AppCarousel from "../ui-components/main/Carousel";
import { AppFooter } from "../ui-components/main/Footer";
import LastNewsSection from "../ui-components/main/LastNewsSection";

const Dashboard = () => {
  return (
    <div>
      <AppCarousel />
      <div className="m-10 h-10 text-center text-3xl font-bold  hover: transform transition duration-1000">
        <span className="relative inline-block">
          Games
          <span
            style={{
              animationDuration: "3s",
            }}
            className="absolute top-0 left-0 h-full w-full rounded-full bg-blue-400 opacity-25 animate-ping"
          ></span>
        </span>
      </div>{" "}
      <div className="p-3">
        <LastNewsSection />
      </div>
      <AppFooter />
    </div>
  );
};

export default Dashboard;
