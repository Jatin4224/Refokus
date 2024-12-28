import Button from "./Button";

const Product = ({ val }) => {
  return (
    <div className="w-full py-20 text-white">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <h1 className="text-6xl capitalize font-medium">{val.title}</h1>
        <div className="dets w-1/3">
          <p className="mb-10">{val.description}</p>
          {val.live && <Button />}
          {val.case && <Button title="Case Study" />}
        </div>
      </div>
    </div>
  );
};

export default Product;
