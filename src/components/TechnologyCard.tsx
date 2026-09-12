import { useState } from "react";
import { MdStarRate } from "react-icons/md";
import type { ITechnology } from "../type";
import type { Dispatch } from "react";
import { toast } from "react-toastify";

export interface TechnologyCardProps {
  technology: ITechnology;
  isStack: ITechnology[];
  setIsStack: Dispatch<React.SetStateAction<ITechnology[]>>;
}

const TechnologyCard = ({
  technology,
  isStack,
  setIsStack,
}: TechnologyCardProps) => {
  const [isAdded, setIsAdded] = useState(false);
  const handleAdded = () => {
    if (isAdded) {
      toast.warning(`${technology.name} is already added to stack`);
      return;
    }
    setIsAdded(true);
    setIsStack([...isStack, technology]);
    toast.success(`${technology.name} is added to stack`);
  };

  return (
    <div className="card bg-base-100 w-75 gap-3 shadow-sm">
      <figure className="flex justify-between px-7 pt-10">
        <img src={technology.icon} alt="Shoes" className="h-10 w-10" />
        <button className="mt-[-30px] mr-[-20px] btn h-7 text-blue-500 bg-blue-100 rounded-[50px]">
          {technology.badge}
        </button>
      </figure>

      <div className="card-body ">
        <h2 className="card-title font-bold">{technology.name}</h2>
        <div className="divider h-1 mb-1 text-gray-100"></div>
        <p className="text-gray-500">{technology.description}</p>
        <div className="flex justify-between">
          <p className="bg-gray-200 w-20 text-center h-6 text-gray-500 rounded">
            {technology.category}
          </p>
          <p className="ml-3 text-gray-500">{technology.difficulty}</p>
          <p className="font-bold flex items-center text-center gap-1">
            <MdStarRate className="text-yellow-500" />
            {technology.rating}
          </p>
        </div>
        <button
          onClick={() => handleAdded()}
      
          className="text-center mt-3 bg-black text-white w-full h-9 rounded-xl"
        >
          {isAdded === true ? "✓ Added to Stack" : "Add to stack"}
        </button>
      </div>
    </div>
  );
};

export default TechnologyCard;
