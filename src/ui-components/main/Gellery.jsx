import React from "react";
import img1 from "../../assets/Img/games/g1.jpg";
import img2 from "../../assets/Img/games/g2.jpg";
import img3 from "../../assets/Img/games/g3.jpg";
import img4 from "../../assets/Img/games/g4.jpg";
import img5 from "../../assets/Img/games/g5.jpg";
import img6 from "../../assets/Img/games/g6.jpg";

export function GridGallery() {
  const data = [
    {
      imgelink: img1,
    },
    {
      imgelink: img2,
    },
    {
      imgelink: img3,
    },
    {
      imgelink: img4,
    },
    {
      imgelink: img5,
    },
    {
      imgelink: img6,
    },
  ];

  const [active, setActive] = React.useState(img1);

  return (
    <div className="grid gap-4 ">
      <div>
        <img
          className="bluehover h-auto w-full max-w-full rounded-3xl object-cover object-center md:h-[480px]"
          src={active}
          alt=""
        />
      </div>
      <div className="grid grid-cols-6">
        {data.map(({ imgelink }, index) => (
          <div key={index} className="mx-auto bluehover">
            <img
              onClick={() => setActive(imgelink)}
              src={imgelink}
              className="h-20 max-w-full cursor-pointer rounded-2xl object-cover object-center"
              alt="gallery-image "
            />
          </div>
        ))}
      </div>
    </div>
  );
}
