import Header from "./Header";
import { Chartt } from "./Chartt";
import { Test } from "./Test";
import { Last } from "./Last";

export const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className="bg-[#F3F4F6] flex flex-col gap-10 h-full">
        <Test />
        <Chartt />
        <Last />
      </div>
    </div>
  );
};
