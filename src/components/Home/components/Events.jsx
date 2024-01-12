import EventsCard from '../utils/EventsCard'
import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
 
const Events=()=> {
  const [activeTab, setActiveTab] = React.useState("1");
  const data = [
    {
      value:"1",
      event_name:"The Nancy party’s ",
      date:"10/07/2022",
      lieu:"senegal", 
      img_link:"img10.png", 
      person_name:"pablo",
      person_img:"img4.png"
    },
    {
      value:"2",
      event_name:"The pablo party’s ",
      date:"10/07/2022",
      lieu:"senegal", 
      img_link:"agri.png", 
      person_name:"pablo",
      person_img:"img4.png"
    },
    {
      value:"3",
      event_name:"The Nan party’s ",
      date:"10/07/2022",
      lieu:"senegal", 
      img_link:"img10.png", 
      person_name:"pab",
      person_img:"img4.png"
    },
    {
      value:"4",
      event_name:"The Nancy party’s ",
      date:"10/07/2022",
      lieu:"senegal", 
      img_link:"img10.png", 
      person_name:"pablo",
      person_img:"img4.png"
    },
  ];
  return (
    <div className='mb-[5rem] p-4'>
      <Tabs value={activeTab}>
      <TabsHeader
        className="w-1/3 rounded-none  bg-transparent p-0"
        indicatorProps={{
          className:
            "bg-transparent border-b-0 border-black  shadow-none rounded-none",
        }}
      >
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={` mx-1 border-b-2    ${activeTab === value ? "border-black " : "border-gray-500"} `}
          >
            {/* {label} */}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, index,date,event_name,lieu,person_name,img_link,person_img }) => (
        
          <TabPanel key={index} value={value}>
          <EventsCard event_name={event_name} date={date} lieu={lieu} img_link={img_link} person_name={person_name} person_img={person_img}></EventsCard>
          </TabPanel>
         
        ))}
      </TabsBody>
    </Tabs>
    </div>
    
  );
}
export default Events;