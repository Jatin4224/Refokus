import Marquee from "./Marquee";

const Marquees = () => {
  let images = [
    [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6xmghhtOQx3FrUoPmRBn-fsCxa4cpn600Pg&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6xmghhtOQx3FrUoPmRBn-fsCxa4cpn600Pg&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6xmghhtOQx3FrUoPmRBn-fsCxa4cpn600Pg&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6xmghhtOQx3FrUoPmRBn-fsCxa4cpn600Pg&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6xmghhtOQx3FrUoPmRBn-fsCxa4cpn600Pg&s",
    ],
    [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6xmghhtOQx3FrUoPmRBn-fsCxa4cpn600Pg&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6xmghhtOQx3FrUoPmRBn-fsCxa4cpn600Pg&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6xmghhtOQx3FrUoPmRBn-fsCxa4cpn600Pg&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6xmghhtOQx3FrUoPmRBn-fsCxa4cpn600Pg&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6xmghhtOQx3FrUoPmRBn-fsCxa4cpn600Pg&s",
    ],
  ];
  return (
    <div className="bg-zinc-900 py-20 ">
      {images.map((item) => (
        <Marquee imagesUrl={item} />
      ))}
    </div>
  );
};

export default Marquees;
