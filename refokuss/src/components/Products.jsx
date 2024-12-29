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
  return (
    <div className="bg-zinc-900 relative">
      {products.map((val, elem) => (
        <Product val={val} elem={elem} key={elem} />
      ))}
      <div className="absolute top-0 w-full h-full pointer-events-none">
        <motion.div className="window absolute w-[32rem] h-[23rem] bg-sky-100 left-[44%] overflow-hidden -translate-x-[50%]">
          <div className="w-full h-full bg-sky-100"></div>
          <div className="w-full h-full bg-sky-500"></div>
          <div className="w-full h-full bg-sky-800"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
