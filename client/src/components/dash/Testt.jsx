// ("use client");
// import React from "react";
// import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
// import Legend from "./Legend";

// const data = [
//   { name: "Bills", value: 2400000 },
//   { name: "Food", value: 1300000 },
//   { name: "Shopping", value: 1700000 },
//   { name: "Insurance", value: 1500000 },
//   { name: "Clothing", value: 1000000 },
// ];

// const COLORS = ["#1C64F2", "#16BDCA", "#F2901C", "#00FF00", "#00FFFF"];

// const RADIAN = Math.PI / 180;

// const renderCustomizedLabel = ({
//   cx,
//   cy,
//   midAngle,
//   innerRadius,
//   outerRadius,
//   percent,
//   index,
// }) => {
//   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
//   const x = cx + radius * Math.cos(-midAngle * RADIAN);
//   const y = cy + radius * Math.sin(-midAngle * RADIAN);

//   return (
//     <text
//       x={x}
//       y={y}
//       fill="white"
//       textAnchor={x > cx ? "start" : "end"}
//       dominantBaseline="central"
//     >
//       {`${(percent * 100).toFixed(0)}%`}
//     </text>
//   );
// };

// const Chartt = ({ startDate, endDate }) => {
//   const dataWithPercent = data.map((entry) => ({
//     ...entry,
//     percent:
//       (entry.value / data.reduce((sum, item) => sum + item.value, 0)) * 100,
//   }));

//   return (
//     <div className="flex">
//       <div className="w-[688px] h-[286px] bg-white rounded-2xl ">
//         <div className="border-b-[1px] border-b-slate-200 w-[688px]">
//           <div className="flex items-center space-x-1 pt-3 pb-3 pl-4 justify-between pr-4">
//             <div className="text-[14px] font-bold">Expense Breakdown</div>
//             <div className="text-slate-500 text-[14px]">
//               {startDate} - {endDate}
//             </div>
//           </div>
//         </div>
//         <ResponsiveContainer height={200} className="flex  ">
//           <PieChart className="flex pr-[40px]  ">
//             <Pie
//               data={data}
//               cx="50%"
//               cy="53%"
//               labelLine={false}
//               label={renderCustomizedLabel}
//               outerRadius={130}
//               fill="#8884d8"
//               dataKey="value"
//             >
//               {data.map((entry, index) => (
//                 <Cell
//                   key={`cell-${index}`}
//                   fill={COLORS[index % COLORS.length]}
//                 />
//               ))}
//             </Pie>
//             {/* <Legend data={dataWithPercent} /> */}
//           </PieChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// };

// export default Chartt;
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Mar",
    income: 1000000,
    expense: 2400000,
  },
  {
    name: "Apr",
    income: 3000000,
    expense: 1398000,
  },
  {
    name: "May",
    income: 2000000,
    expense: 9800000,
  },
  {
    name: "Jun",
    income: 2780000,
    expense: 3908000,
  },
  {
    name: "Jul",
    income: 1890000,
    expense: 4800000,
  },
  {
    name: "Aug",
    income: 2390000,
    expense: 3800000,
  },
];

export const IncomeChart = () => {
  return (
    <div className="w-[688px] h-[286px] bg-white rounded-2xl">
      <div className="border-b-[1px] border-b-slate-200 w-[688px]">
        <div className="flex items-center space-x-1 pt-3 pb-3 pl-4 justify-between pr-4">
          <div className="text-[14px] font-bold">Income - Expense</div>
          <div className="text-slate-500 text-[14px]"></div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="85%">
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" className="text-[12px]" />
          <YAxis
            tickFormatter={(value) => `${(value / 1000000).toFixed(0)}M`}
          />
          <Tooltip formatter={(value) => `${value.toLocaleString()}`} />

          <Bar dataKey="expense" fill="#F97316" />
          <Bar dataKey="income" fill="#84CC16" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default IncomeChart;

{
  /* <div className="flex flex-col w-[588px] h-[284px]  rounded-md bg-white">
<div className="font-semibold text-base text-[#0F172A] pl-6 py-4 border-b border-gray-200">
Income - Expense
</div>
<div className="w-[588px] h-[226px] px-5 py-5">
<Bar
  data={dataBar}
  options={{
    maintainAspectRatio: false,
  }}
/>
</div>
</div> */
}
