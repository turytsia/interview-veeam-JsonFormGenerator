import { TabList } from "@headlessui/react";
import { Tab, type TabProps } from "./Tab";

interface TabsListProps {
  tabs: Array<TabProps>;
}

export const TabsList: React.FC<TabsListProps> = ({ tabs }) => {
  return (
    <TabList className="flex space-x-1 rounded-xl bg-gray-200 p-1 mb-4">
      {tabs.map(({ label, content }) => (
        <Tab key={label} label={label} content={content} />
      ))}
    </TabList>
  );
};
