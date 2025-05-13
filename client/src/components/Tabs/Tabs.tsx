import { TabGroup } from "@headlessui/react";
import React from "react";
import { TabsList } from "./TabList";
import { TabsPanels } from "./TabsPanels";
import type { TabProps } from "./Tab";

export interface TabsProps {
  tabs: Array<TabProps>;
}

export const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  return (
    <TabGroup>
      <TabGroup>
        <TabsList tabs={tabs} />
        <TabsPanels tabs={tabs} />
      </TabGroup>
    </TabGroup>
  );
};
