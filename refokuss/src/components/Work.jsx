const Work = () => {
  let images = [
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/66a2cefa6def1aabe206b2f6_TTR%20-%2016%209%20(A).webp",
      top: "50%",
      left: "50%",
      isActive: true,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d8c8de92be5a9bdae6f1_Layout%20Land%20-%2016%209%20(A).webp",
      top: "56%",
      left: "44%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d3cddd783017a5e17454_Umlaut%20-%2016%209%20(A).webp",
      top: "45%%",
      left: "56%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d625b55cd38f78a00b3a_Rainfall%20-%2016%209%20(A).webp",
      top: "60%%",
      left: "53%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d625b55cd38f78a00b3a_Rainfall%20-%2016%209%20(A).webp",
      top: "43%",
      left: "40%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d711ae2b889bd611cdf4_YIR%202021%20-%2016%209%20(A).webphttps://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d625b55cd38f78a00b3a_Rainfall%20-%2016%209%20(A).webp",
      top: "65 %",
      left: "55%",
      isActive: false,
    },
  ];
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
