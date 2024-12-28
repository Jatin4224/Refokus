import { FaArrowRightLong } from "react-icons/fa6";

const Card = ({ width, start, para, hover }) => {
  return (
    <div
      className={`w-1/2 bg-zinc-800 p-5 rounded-lg hover:${hover} ${width} min-h-[30rem] flex flex-col justify-between`}
    >
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          <h3>one heading</h3>
          <FaArrowRightLong />
        </div>
        <h1 className="text-3xl font-medium mt-10">whatever heading </h1>
      </div>
      <div className="down w-full ">
        {start && (
          <>
            <h1 className="text-6xl font-semibold tracking-tighter leading-none">
              start a project
            </h1>
            <button className="rounded-full mt-5 py-2 px-5 border-[1px] border-zinc-50 ">
              Contact Us
            </button>
          </>
        )}
        {para && (
          <p className="text-sm text-zinc-500 font-medium ">
            thats hwat she said
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;