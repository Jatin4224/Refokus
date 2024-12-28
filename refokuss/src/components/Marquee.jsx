const Marquee = ({ imagesUrl }) => {
  return (
    <div className="flex w-full py-8 gap-20 whitespace-nowrap overflow-hidden">
      {imagesUrl.map((url) => (
        <img src={url} className="w-[6vw] h-10 flex-shrink-0" />
      ))}{" "}
      {imagesUrl.map((url) => (
        <img src={url} className="w-[6vw] h-10 flex-shrink-0" />
      ))}
    </div>
  );
};

export default Marquee;
