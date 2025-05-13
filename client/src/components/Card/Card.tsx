import React, { type PropsWithChildren } from "react";

export const Card: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 bg-gradient-to-r from-blue-200 to-cyan-200">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-6">
        {children}
      </div>
    </div>
  );
};
