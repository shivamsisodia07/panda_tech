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
      img_link:"https://images.unsplash.com/photo-1655392030853-06383c26c55e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8&w=1000&q=80", 
      person_name:"pablo",
      person_img:"img4.png"
    },
    {
      value:"2",
      event_name:"The pablo party’s ",
      date:"10/07/2022",
      lieu:"senegal", 
      img_link:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Concert_Square%2C_Liverpool%2C_21_May_2013.jpg/640px-Concert_Square%2C_Liverpool%2C_21_May_2013.jpg", 
      person_name:"pablo",
      person_img:"img4.png"
    },
    {
      value:"3",
      event_name:"The Nan party’s ",
      date:"10/07/2022",
      lieu:"senegal", 
      img_link:"https://images.unsplash.com/photo-1655392030853-06383c26c55e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8&w=1000&q=80", 
      person_name:"pab",
      person_img:"img4.png"
    },
    {
      value:"4",
      event_name:"The Nancy party’s ",
      date:"10/07/2022",
      lieu:"senegal", 
      img_link:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Concert_Square%2C_Liverpool%2C_21_May_2013.jpg/640px-Concert_Square%2C_Liverpool%2C_21_May_2013.jpg", 
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