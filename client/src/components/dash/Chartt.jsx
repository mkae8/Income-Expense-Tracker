"use client";
import React from "react";
import { Bar, Doughnut } from "react-chartjs-2"; // Doughnut импортлох
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Бүртгэх
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement, // Doughnut графикт шаардлагатай
  Title,
  Tooltip,
  Legend
);

export const Chartt = () => {
  const dataBar = {
    labels: [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 21, 2, 32],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const dataDoughnut = {
    labels: ["Red", "Blue", "Yellow", "sdad"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100, 40],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
          "rgb(59, 145, 246)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="flex px-32  justify-between">
      <div className="flex flex-col w-[588px] h-[284px]  rounded-md bg-white">
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
      </div>
      <div>
        <div className="flex flex-col w-[588px] h-[284px] rounded-md bg-white">
          <div className="flex justify-between px-5 border-b border-gray-200">
            <div className="font-semibold text-base text-[#0F172A] pl-6 py-4">
              My Doughnut Chart
            </div>
            <div className="py-4 pr-6">publishedAt</div>
          </div>
          <div className="w-[588px] h-[226px] px-5 py-5">
            <Doughnut
              data={dataDoughnut}
              options={{
                maintainAspectRatio: false,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
