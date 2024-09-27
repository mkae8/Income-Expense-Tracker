/** @format */

"use client";
import React from "react";
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
    labels: [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 21, 2],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="w-fit h-52 px-[50px] pl-8 flex">
      <Bar
        data={data}
        options={{
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
};
