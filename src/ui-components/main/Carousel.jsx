import s1 from "../../assets/Img/s1.jpg";
import s2 from "../../assets/Img/s2.jpeg";
import s3 from "../../assets/Img/s3.jpg";
import { Carousel, Typography } from "@material-tailwind/react";

const AppCarousel = () => {
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
              Welcome to Adrina: Where Imagination Fuels Innovation
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-8 text-base md:text-lg lg:text-xl"
            >
              Step into the realm of Adrina, where creativity knows no bounds
              and gaming is elevated to an art form.
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
              Crafting Digital Adventures Beyond Boundaries
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-8 text-base md:text-lg lg:text-xl"
            >
              Embark on a journey with Adrina, where we transcend the ordinary
              to redefine the gaming landscape.
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
              Where Passion Meets Play
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-8 text-base md:text-lg lg:text-xl"
            >
              Discover the heart and soul of gaming with Adrina, where our
              unwavering passion for play drives everything we do.
            </Typography>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default AppCarousel;
