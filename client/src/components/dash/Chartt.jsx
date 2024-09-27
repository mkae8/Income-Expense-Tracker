// "use client";

// import { Bar } from "react-chartjs-2";

// export const Chartt = () => {
//   const asd = {
//     labels: [2016, 2017],
//     datasets: [],
//   };

//   return (
//     <div className="w-52 h-52 flex">
//       <Bar data={asd} />
//     </div>
//   );
// };

"use client";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Бүртгэх
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const Chartt = () => {
  const data = {
    labels: [2016, 2017],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="w-52 h-52 flex">
      <Bar
        data={data}
        options={{
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
};
