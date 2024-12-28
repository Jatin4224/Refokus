import StripeSingle from "./StripeSingle";
const Stripes = () => {
  let data = [
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6xmghhtOQx3FrUoPmRBn-fsCxa4cpn600Pg&s",
      number: 48,
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6xmghhtOQx3FrUoPmRBn-fsCxa4cpn600Pg&s",
      number: 2,
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6xmghhtOQx3FrUoPmRBn-fsCxa4cpn600Pg&s",
      number: 11,
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6xmghhtOQx3FrUoPmRBn-fsCxa4cpn600Pg&s",
      number: 8,
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6xmghhtOQx3FrUoPmRBn-fsCxa4cpn600Pg&s",
      number: 92,
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6xmghhtOQx3FrUoPmRBn-fsCxa4cpn600Pg&s",
      number: 3,
    },
  ];
  return (
    <div className="flex items-center mt-20">
      {data.map((elem, index) => (
        <StripeSingle key={index} val={elem} />
      ))}
    </div>
  );
};

export default Stripes;
