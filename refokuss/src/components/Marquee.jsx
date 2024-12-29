import { motion } from "framer-motion";

const Marquee = ({ imagesUrl, direction = "left" }) => {
  return (
    <div className="flex w-full overflow-hidden">
      <motion.div
        className="flex flex-shrink-0 gap-40 py-10 pr-40"
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 25, repeat: Infinity }}
      >
        {imagesUrl.map((url, index) => (
          <img
            key={`${url}-${index}`}
            src={url}
            className="w-[6vw] h-10 flex-shrink-0"
            alt="Marquee image"
          />
        ))}

        {imagesUrl.map((url, index) => (
          <img
            key={`repeat-${url}-${index}`}
            src={url}
            className="w-[6vw] h-10 flex-shrink-0"
            alt="Marquee image"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
