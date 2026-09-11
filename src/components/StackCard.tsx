import type { ITechnology } from "../type";
import type { Dispatch } from "react";

export interface TechnologyCardProps {
  technology: ITechnology;
  isStack: ITechnology[];
  setIsStack: Dispatch<React.SetStateAction<ITechnology[]>>;
}

export const StackCard = ({
  technology,
  isStack,
  setIsStack,
}: TechnologyCardProps) => {
  return (
    <div className="shadow p-6">
      <h4 className="font-bold">Your Stack</h4>
      <p className="text-gray-500">{`${isStack.length} Technology Selected`}</p>

      <div className="grid grid-cols-1">
        {isStack.map((technology) => (
          <div className="flex border p-2 border-gray-200 rounded gap-3 mt-4">
            <img className="h-9 w-9" src={technology.icon} alt="" />
            <div className="">
              <h5 className="font-bold">{technology.name}</h5>   
              <p className="text-gray-500 text-[12px]">{technology.category}</p>
            </div>
            {/* delete */}
          </div>
        ))}
      </div>
    </div>
  );
};
