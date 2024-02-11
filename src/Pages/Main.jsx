import AppCarousel from "../ui-components/main/Carousel";
import { AppFooter } from "../layout/Footer";
import { GridGallery } from "../ui-components/main/Gellery";
import LastGamesSection from "../ui-components/main/LastGamesSection";

const Main = () => {
  const preferredLanguage = localStorage.getItem("preferredLanguage") || "en";

  return (
    <div>
      <AppCarousel />
      <div className="m-10 h-10 text-center text-3xl font-bold  hover: transform transition duration-1000">
        <span className="relative inline-block">
          {preferredLanguage === "fa" ? "بازی ها" : "Games"}
          <span
            style={{
              animationDuration: "3s",
            }}
            className="absolute top-0 left-0 h-full w-full rounded-full bg-blue-400 opacity-25 animate-ping"
          ></span>
        </span>
      </div>{" "}
      <div className="p-3">
        <LastGamesSection />
      </div>
      <div className="m-10 h-10 text-center text-3xl font-bold  hover: transform transition duration-1000">
        <span className="relative inline-block">
          {preferredLanguage === "fa" ? "گالری" : "Gallery"}
          <span
            style={{
              animationDuration: "3s",
            }}
            className="absolute top-0 left-0 h-full w-full rounded-full bg-blue-400 opacity-25 animate-ping"
          ></span>
        </span>
      </div>{" "}
      <div className="bg-gradient-to-r from-indigo-500 p-8">
        <div className="container mx-auto">
          <GridGallery />
        </div>
      </div>
      <AppFooter />
    </div>
  );
};

export default Main;
