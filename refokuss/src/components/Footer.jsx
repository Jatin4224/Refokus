const Footer = () => {
  return (
    <div className="w-full bg-zinc-900">
      <div className="max-w-screen-xl mx-auto py-10 flex gap-32">
        <div className="basis-1/2 ">
          <h1 className="text-[11.5rem] font-semibold leading-none tracking-tight">
            refokus.
          </h1>
        </div>
        <div className="basis-1/2 flex gap-4">
          <div className="basis-1/3">
            <h4 className="mb-10 text-zinc-500 capitalize">socials</h4>
            {["instagram", "twitter (x?)", "LinkedIn"].map((item, index) => (
              <a className="block mt-3 text-zinc-600 capitalize">{item}</a>
            ))}
          </div>
          <div className="basis-1/3">
            <h4 className="mb-10 text-zinc-500 capitalize">site map</h4>
            {["Home", "Work", "About"].map((item, index) => (
              <a className="block mt-3 text-zinc-600 capitalize">{item}</a>
            ))}
          </div>
          <div className="basis-1/2 flex flex-col items-end">
            <p className="text-right capitalize">
              Our agency is about people who love creating, designing and
              developing wow projects.
            </p>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhTRgetQrNgbfPwixS8YuhB0BeBsOTjQ5jsw&s"
              className="w-20 mt-10 rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
