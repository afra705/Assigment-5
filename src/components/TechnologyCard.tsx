// import { useState } from "react";
import { MdStarRate } from "react-icons/md";
import type { ITechnology } from "../type";

export interface TechnologyCardProps {
    technology: ITechnology;
}

const TechnologyCard = ({ technology }: TechnologyCardProps) => {
    
    // const [] = useState();

    return (
        <div className="card bg-base-100 w-75 gap-3 shadow-sm">
              <figure className="flex justify-between px-7 pt-10">
                <img
                  src={technology.icon}
                  alt="Shoes"
                  className="h-10 w-10"
                />
                <button className="mt-[-30px] mr-[-20px] btn h-7 text-blue-500 bg-blue-100 rounded-[50px]">{technology.badge}</button>
              </figure>

              <div className="card-body ">
                <h2 className="card-title font-bold">{technology.name}</h2>
                  <div className="divider h-1 mb-1 text-gray-100"></div>
                <p className="text-gray-500">{technology.description}</p>
                <div className="flex justify-between">
                  <p className="bg-gray-200 w-20 text-center h-6 text-gray-500 rounded">{technology.category}</p>
                  <p className="ml-3 text-gray-500">{technology.difficulty}</p>
                  <p className="font-bold flex items-center text-center gap-1"><MdStarRate className="text-yellow-500"/>{technology.rating}</p>
                </div>
                <button className="text-center mt-3 bg-black text-white w-full h-8 rounded-xl">Add to stack</button>
              </div>
            </div>
    )
}

export default TechnologyCard;