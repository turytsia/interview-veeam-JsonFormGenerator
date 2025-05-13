import { TabPanel, TabPanels } from "@headlessui/react";
import type { TabProps } from "./Tab";

interface TabsPanelsProps {
  tabs: Array<TabProps>;
}

export const TabsPanels: React.FC<TabsPanelsProps> = ({ tabs }) => {
  return (
    <TabPanels className="mt-2">
      {tabs.map(({ label, content }) => (
        <TabPanel key={label}>{content}</TabPanel>
      ))}
    </TabPanels>
  );
};
