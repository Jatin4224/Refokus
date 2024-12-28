import Product from "./Product";
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
    <div className="bg-zinc-900">
      {products.map((val, elem) => (
        <Product val={val} elem={elem} />
      ))}
    </div>
  );
};

export default Products;
