import React from "react";

export const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div className="spinner"></div>
      <style jsx>{`
        .spinner {
          border: 16px solid #f3f3f3;
          border-radius: 50%;
          border-top: 16px solid #3498db;
          width: 120px;
          height: 120px;
          animation: spin 2s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
    // <div className="w-screen h-screen">
    //   <div className="flex gap-2 justify-center items-center">
    //     loading
    //     <span className="loading loading-spinner loading-lg"></span>
    //   </div>
    // </div>
  );
};
