import { Tab as TabUI } from "@headlessui/react";
import clsx from "clsx";
import React from "react";

export interface TabProps {
  label: string;
  content: React.ReactNode;
}

export const Tab: React.FC<TabProps> = ({ label }) => {
  return (
    <TabUI
      className={({ selected }) =>
        clsx(
          "w-full py-2.5 text-sm font-medium leading-5 rounded-lg",
          selected
            ? "bg-white shadow text-blue-600"
            : "text-gray-500 hover:bg-white/[0.12] hover:text-blue-600",
        )
      }
    >
      {label}
    </TabUI>
  );
};
