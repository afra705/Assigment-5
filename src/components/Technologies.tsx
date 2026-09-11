import { use, useState } from "react";
import type { ITechnology } from "../type";
import TechnologyCard from "./TechnologyCard";
import { StackCard } from "./StackCard";

export interface TechnologiesProps {
  technologyPromise: Promise<ITechnology[]>;
}
const Technologies = ({ technologyPromise }: TechnologiesProps) => {
  const technologies = use(technologyPromise);
  const [isStack, setIsStack] = useState<ITechnology[]>([]);

  return (
    <div className="lg:w-7xl container mx-auto ml-35">
      <div>
        <h2 className="font-bold text-3xl">
          Explore the{" "}
          <span className="bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
            Technologies{" "}
          </span>
        </h2>
        <p className="text-[#475569] text-[14px] w-100px mt-2 mb-5">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>
      {/* card */}
      <div className="flex justify-between">
        {/* card1 */}
        <div className="grid grid-cols-3 gap-4">
          {technologies.map((technology) => (
            <TechnologyCard
              key={technology.name}
              technology={technology}
              isStack={isStack} 
              setIsStack={setIsStack}
            ></TechnologyCard>
          ))}
        </div>
        {/* stack */}
        <div className="w-75">
          <StackCard isStack={isStack} setIsStack={setIsStack}></StackCard>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
