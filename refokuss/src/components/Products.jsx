import { useState } from "react";
import Product from "./Product";
import { motion } from "motion/react";
const Products = () => {
  let products = [
    {
      title: "arqitel",
      description:
        "my name is jatin sharma, my fav music artist is avicii,fredagain,dukus,blink-182",
      live: true,
      case: false,
    },
    {
      title: "YIR 2022",
      description:
        "my name is jatin sharma, my fav music artist is avicii,fredagain,dukus,blink-182",
      live: true,
      case: false,
    },
    {
      title: "cisco",
      description:
        "my name is jatin sharma, my fav music artist is avicii,fredagain,dukus,blink-182",
      live: true,
      case: true,
    },
    {
      title: "openAi",
      description:
        "my name is jatin sharma, my fav music artist is avicii,fredagain,dukus,blink-182",
      live: true,
      case: true,
    },
  ];
  const [pos, setPos] = useState(0);
  const mover = (val) => {
    setPos(val * 23);
  };
  return (
    <div className="bg-zinc-900 relative">
      {products.map((val, elem) => (
        <Product val={val} elem={elem} key={elem} mover={mover} count={elem} />
      ))}
      <div className="absolute top-0 w-full h-full pointer-events-none">
        <motion.div
          initial={{ y: pos, x: "-50% " }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
          className="window absolute w-[32rem] h-[23rem] bg-sky-100 left-[44%] overflow-hidden "
        >
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
          >
            <img
              src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d711ae2b889bd611cdf4_YIR%202021%20-%2016%209%20(A).webp"
              alt="Sky Blue Background"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
          >
            <img
              src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d8c8de92be5a9bdae6f1_Layout%20Land%20-%2016%209%20(A).webp"
              alt="Sky Blue Medium"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
          >
            <img
              src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/66a2cefa6def1aabe206b2f6_TTR%20-%2016%209%20(A).webp"
              alt="Sky Blue Dark"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
          >
            <img
              src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/66a2cefa6def1aabe206b2f6_TTR%20-%2016%209%20(A).webp"
              alt="Sky Blue Dark"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
