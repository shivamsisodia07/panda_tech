import React from "react";
import Testimoniacard from "../utils/testimonialCard";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

const Testimonials = () => {
  const [activeTab, setActiveTab] = React.useState("1");
  const data = [
    {
      value: "1",
      img_link: "img9.png",
      member_name: "Artur Luison",
      member_position: "Manager",
      quotes:
        "Risus, sed venenatis sed morbi lectus nunc tincidunt quam. Eget volutpat elementum cum turpis feugiat imperdiet auctor accumsan. Ut pulvinar orci. ",
      title: "Very Nice Atmosphere and experience with “Welcome to PANDA”",
      desc: "Risus, sed venenatis sed morbi lectus nunc tincidunt quam. Eget volutpat elementum cum turpis feugiat imperdiet auctor accumsan. Ut pulvinar orci.",
    },
    {
      value: "2",
      img_link: "img9.png",
      member_name: "Artur Luison",
      member_position: "Manager",
      quotes:
        "Risus, sed venenatis sed morbi lectus nunc tincidunt quam. Eget volutpat elementum cum turpis feugiat imperdiet auctor accumsan. Ut pulvinar orci. ",
      title: "Very Nice Atmosphere and experience with “Welcome to PANDA”",
      desc: "Risus, sed venenatis sed morbi lectus nunc tincidunt quam. Eget volutpat elementum cum turpis feugiat imperdiet auctor accumsan. Ut pulvinar orci.",
    },
    {
      value: "3",
      img_link: "img9.png",
      member_name: "Artur Luison",
      member_position: "Manager",
      quotes:
        "Risus, sed venenatis sed morbi lectus nunc tincidunt quam. Eget volutpat elementum cum turpis feugiat imperdiet auctor accumsan. Ut pulvinar orci. ",
      title: "Very Nice Atmosphere and experience with “Welcome to PANDA”",
      desc: "Risus, sed venenatis sed morbi lectus nunc tincidunt quam. Eget volutpat elementum cum turpis feugiat imperdiet auctor accumsan. Ut pulvinar orci.",
    },
    {
      value: "4",
      img_link: "img9.png",
      member_name: "Artur Luison",
      member_position: "Manager",
      quotes:
        "Risus, sed venenatis sed morbi lectus nunc tincidunt quam. Eget volutpat elementum cum turpis feugiat imperdiet auctor accumsan. Ut pulvinar orci. ",
      title: "Very Nice Atmosphere and experience with “Welcome to PANDA”",
      desc: "Risus, sed venenatis sed morbi lectus nunc tincidunt quam. Eget volutpat elementum cum turpis feugiat imperdiet auctor accumsan. Ut pulvinar orci.",
    },
  ];
  return (
      <div className="mb-[5rem] p-4" >
        <div className="font-bold text-black text-3xl mb-2 p-4">
          Témoignages
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
              <div className='md:w-1/3 flex flex-row justify-end items-end'>
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
              {data.map(
                ({
                  value,
                  index,
                  member_name,
                  member_position,
                  img_link,
                  title,
                  desc,
                  quotes,
                }) => (
                  <TabPanel key={index} value={value}>
                    <Testimoniacard
                      member_name={member_name}
                      member_position={member_position}
                      title={title}
                      quotes={quotes}
                      img_link={img_link}
                      desc={desc}
                    ></Testimoniacard>
                  </TabPanel>
                )
              )}
            </TabsBody>
          </Tabs>
        </div>
      </div>
  );
};

export default Testimonials;
