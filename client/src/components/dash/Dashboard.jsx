import Header from "./Header";
import { Chartt } from "./Chartt";
import { Test } from "./Test";
import { Last } from "./Last";

export const Dashboard = () => {
  return (
    <div className="bg-white">
      <Header />
      <div className="bg-[#F3F4F6] flex">
        <div className="bg-[#F3F4F6] flex justify-center items-center flex-col gap-10 h-full w-[1200px] mx-auto">
          <Test />
          <Chartt />
          <Last />
        </div>
      </div>
    </div>
  );
};
