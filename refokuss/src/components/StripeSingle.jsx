const StripeSingle = ({ val }) => {
  return (
    <div className="max-w-[19.66%]  px-10 py-8 border-t-[1.2px] border-b-[1px]  border-r-[1.2px] border-zinc-600 flex justify-between items-center">
      <img className="max-w-[19.96%] " src={val.url} alt="Stripe" />
      <span className="font-semibold">{val.number}</span>
    </div>
  );
};

export default StripeSingle;
