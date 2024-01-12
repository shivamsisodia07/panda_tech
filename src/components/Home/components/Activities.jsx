import React from "react";
import ActivityCard from "../utils//activityCard";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

const Activity = () => {
  const [activeTab, setActiveTab] = React.useState("1");
  const data = [
    {
      value: "1",
      img_link: "agri.png",
      activity: [
        { name: "Les énergies renouvelables" },
        { name: "L'agro-alimentaire" },
        {
          name: "Les technologies",
        },
        {
          name: "Le e-commerce",
        },
        {
          name: "Les solutions de paiement",
        },
      ],
    },
    {
      value: "2",
      img_link: "agri.png",
      activity: [
        { name: "Les énergies renouvelables" },
        { name: "L'agro-alimentaire" },
        {
          name: "Les technologies",
        },
        {
          name: "Le e-commerce",
        },
        {
          name: "Les solutions de paiement",
        },
      ],
    },
    {
      value: "3",
      img_link: "agri.png",
      activity: [
        { name: "Les énergies renouvelables" },
        { name: "L'agro-alimentaire" },
        {
          name: "Les technologies",
        },
        {
          name: "Le e-commerce",
        },
        {
          name: "Les solutions de paiement",
        },
      ],
    },
    {
      value: "4",
      img_link: "agri.png",
      activity: [
        { name: "Les énergies renouvelables" },
        { name: "L'agro-alimentaire" },
        {
          name: "Les technologies",
        },
        {
          name: "Le e-commerce",
        },
        {
          name: "Les solutions de paiement",
        },
      ],
    },
    {
      value: "5",
      img_link: "agri.png",
      activity: [
        { name: "Les énergies renouvelables" },
        { name: "L'agro-alimentaire" },
        {
          name: "Les technologies",
        },
        {
          name: "Le e-commerce",
        },
        {
          name: "Les solutions de paiement",
        },
      ],
    },
  ];
  return (
    <div className="mb-[5rem] p-4">
      <div className="font-bold text-black text-2xl md:text-3xl mb-2 p-4">
        Top 5 des domaines d’activités porteurs en Afrique
      </div>
      <div className="p-4 ">
        <Tabs value={activeTab}>
          <TabsHeader
            className="rounded-none  bg-transparent p-0 justify-end items-end"
            indicatorProps={{
              className:
                "bg-transparent border-b-0 border-black  shadow-none rounded-none",
            }}
          >
            <div className="md:w-1/3 flex flex-row justify-end items-end">
              {data.map(({ value }) => (
                <Tab
                  key={value}
                  value={value}
                  onClick={() => setActiveTab(value)}
                  className={` mx-1 border-b-2    ${
                    activeTab === value ? "border-black " : "border-gray-500"
                  } `}
                ></Tab>
              ))}
            </div>
          </TabsHeader>
          <TabsBody>
            {data.map(({ value, index, img_link, activity }) => (
              <TabPanel key={index} value={value}>
                <ActivityCard
                  value={value}
                  img_link={img_link}
                  activity={activity}
                ></ActivityCard>
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
    </div>
  );
};

export default Activity;
