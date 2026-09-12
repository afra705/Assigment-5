import { IoMdClose } from "react-icons/io";
import type { ITechnology } from "../type";
import type { Dispatch } from "react";
import { toast } from "react-toastify";

export interface TechnologyCardProps {
  isStack: ITechnology[];
  setIsStack: Dispatch<React.SetStateAction<ITechnology[]>>;
}

export const StackCard = ({ isStack, setIsStack }: TechnologyCardProps) => {
  const handleDelete = (technology: ITechnology) => {
    const restTechnology = isStack.filter(
      (Stack) => Stack.name !== technology.name,
    );
    setIsStack(restTechnology);

    toast.info(`${technology.name} removed from stack`)
  };
const RemoveAll = () =>{
    setIsStack([])
    toast.info(`Stack cleared successfully.`)
}

  return (
    <div className="shadow p-6 rounded-2xl">
      <h4 className="font-bold">Your Stack</h4>
      <p className="text-gray-500">{isStack.length > 0 ? (`${isStack.length} Technology Selected`) : 'No technologies selected yet.'}</p>

   {
    isStack.length === 0 ? (<p className="border border-dashed p-7 mt-4 border-gray-300 text-center text-gray-500">Your stack is empty</p>) : (<div className="grid grid-cols-1">
        {isStack.map((technology) => (
          <div key={technology.name} className="max-w-77 flex border p-3 border-gray-200 rounded gap-3 mt-4">
            <img className="h-9 w-9" src={technology.icon} alt="" />
            {/*  */}
            <div className="flex justify-between w-full">
              <div className="">
              <h5 className="font-bold">{technology.name}</h5>
              <p className="text-gray-500 text-[12px]">{technology.category}</p>
            </div>
            {/* delete */}
            <div
              onClick={() => handleDelete(technology)}
              className=" mt-3 text-gray-400 text-2xl"
            >
              <IoMdClose />
            </div>
            </div>
            {/*Remove all*/}
           
          </div>     
        ))}
         <button onClick={()=>RemoveAll()} className=" text-red-600 mt-5 border border-red-300 font-bold p-2 rounded-xl">Remove All</button>
      </div>)
   }
    </div>
  );
};


