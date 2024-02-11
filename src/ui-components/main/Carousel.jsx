import s1 from "../../assets/Img/s1.jpg";
import s2 from "../../assets/Img/s2.jpeg";
import s3 from "../../assets/Img/s3.jpg";
import { Carousel, Typography } from "@material-tailwind/react";
import str from "../../translations/localization";

const AppCarousel = () => {
  const preferredLanguage = localStorage.getItem("preferredLanguage") || "en";
  return (
    <Carousel className="" loop autoplay>
      <div className="relative h-dvh w-full">
        <img src={s1} alt="image 1" className="h-full w-full object-cover" />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-2xl md:text-3xl lg:text-4xl"
            >
              {str.carousel.s1title}
            </Typography>
            <Typography
              dir={preferredLanguage === "fa" ? "rtl" : "ltr"}
              variant="lead"
              color="white"
              className="mb-8 text-base md:text-lg lg:text-xl"
            >
              {str.carousel.s1text}
            </Typography>
          </div>
        </div>
      </div>
      <div className="relative h-dvh w-full">
        <img src={s2} alt="image 1" className="h-full w-full object-cover" />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-2xl md:text-3xl lg:text-4xl"
            >
              {str.carousel.s2title}
            </Typography>
            <Typography
              dir={preferredLanguage === "fa" ? "rtl" : "ltr"}
              variant="lead"
              color="white"
              className="mb-8 text-base md:text-lg lg:text-xl"
            >
              {str.carousel.s2text}
            </Typography>
          </div>
        </div>
      </div>
      <div className="relative h-dvh w-full">
        <img src={s3} alt="image 1" className="h-full w-full object-cover" />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-2xl md:text-3xl lg:text-4xl"
            >
              {str.carousel.s3title}
            </Typography>
            <Typography
              dir={preferredLanguage === "fa" ? "rtl" : "ltr"}
              variant="lead"
              color="white"
              className="mb-8 text-base md:text-lg lg:text-xl"
            >
              {str.carousel.s3text}
            </Typography>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default AppCarousel;
