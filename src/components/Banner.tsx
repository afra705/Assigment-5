import BannerImg from "../assets/banner-stack.png";
export const Banner = () => {
  return (
    <div className="lg:w-7xl container mx-auto flex justify-between mt-20 ml-35 mb-16 ">
      {/* part1 */}
      <div>
        <h1 className="font-bold text-6xl">
          Build Your Ideal <br />
          <span className="bg-gradient-to-r from-[#f94711] via-[#3f9ce8] to-[#7C3AED] bg-clip-text text-transparent">Development Stack</span>
        </h1>
        <p className="text-[#475569] text-[14px] w-100px mt-5 mb-5">
         Explore frontend, backend, database, and tooling options, <br />
        compare them side by side, and put together the stack that fits your <br />
        next project.
        </p>
         <div className="flex gap-4">
            <button className="btn text-white  bg-gradient-to-r from-[#F97316] to-[#EC4899]">Explore Technologies</button>
            <button className="btn w-36 bg-white text-[#8c8c8e] border">Learn More</button>
         </div>
      </div>
      {/* part2 */}
      <div className="mt-[-110px]">
        <img src={BannerImg} alt="" />
      </div>
    </div>
  );
};
