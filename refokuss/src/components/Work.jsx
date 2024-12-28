import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";

const Work = () => {
  const [images, setImages] = useState([
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/66a2cefa6def1aabe206b2f6_TTR%20-%2016%209%20(A).webp",
      top: "60%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d8c8de92be5a9bdae6f1_Layout%20Land%20-%2016%209%20(A).webp",
      top: "62%",
      left: "48%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d3cddd783017a5e17454_Umlaut%20-%2016%209%20(A).webp",
      top: "68%",
      left: "52%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d625b55cd38f78a00b3a_Rainfall%20-%2016%209%20(A).webp",
      top: "64%",
      left: "51%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d625b55cd38f78a00b3a_Rainfall%20-%2016%209%20(A).webp",
      top: "66%",
      left: "49%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d711ae2b889bd611cdf4_YIR%202021%20-%2016%209%20(A).webp",
      top: "63%",
      left: "50%",
      isActive: false,
    },
  ]);
  const { scrollYProgress } = useScroll();

  function imagesShow(arr) {
    setImages((prev) =>
      prev.map((item, index) =>
        arr.indexOf(index) == -1
          ? { ...item, isActive: false }
          : { ...item, isActive: true }
      )
    );
  }
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    showAndHideImages(Math.floor(latest * 100));
  });

  function showAndHideImages(scrollval) {
    if (scrollval >= 0 && scrollval < 1) {
      imagesShow([]);
    } else if (scrollval >= 1 && scrollval < 2) {
      imagesShow([0]);
    } else if (scrollval >= 2 && scrollval < 3) {
      imagesShow([0, 1]);
    } else if (scrollval >= 3 && scrollval < 4) {
      imagesShow([0, 1, 2]);
    } else if (scrollval >= 4 && scrollval < 5) {
      imagesShow([0, 1, 2, 3]);
    } else if (scrollval >= 5 && scrollval < 6) {
      imagesShow([0, 1, 2, 3, 4]);
      console.log("show 5th image");
    } else if (scrollval > 6) {
      imagesShow([0, 1, 2, 3, 4, 5]);
    }
  }
  return (
    <div className="w-full mt-10">
      <div className="relative max-w-screen-xl mx-auto text-center">
        <h1 className="text-[30vw] leading-none font-medium tracking-tight select-none">
          work
        </h1>
        <div className="absolute w-full top-0 h-full">
          {images.map(
            (elem, index) =>
              elem.isActive && (
                <img
                  key={index}
                  className="w-60 rounded-lg absolute -translate-x-[50%]  -translate-y-[50%]"
                  src={elem.url}
                  style={{ top: elem.top, left: elem.left }}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;
