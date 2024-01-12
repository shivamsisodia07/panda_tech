import React from "react";
import { useState } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

const StickyNavbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [mobileview, setmobileview] = useState(false);
  React.useEffect(() => {
    window.innerWidth <= 640 ? setmobileview(true) : setmobileview(false);
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal text-center"
      >
        <a href="#">missions de pANDA</a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal text-center"
      >
        <a href="#">Fonctionnalités</a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal text-center"
      >
        <a href="#">experts</a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal text-center"
      >
        <a href="#">Organisations en Afrique</a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal text-center"
      >
        <a href="#">Offres d'emploi</a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal text-center"
      >
        <a href="#">Evénements à venir</a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal text-center"
      >
        <a href="#" >
          Témoignages
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal text-center"
      >
        <a href="#">Fondateurs</a>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
      <div className="flex items-center justify-between text-blue-gray-900 mb-4">
        <Typography
          as="a"
          href="#"
          className="w-1/3 mr-4 cursor-pointer py-1.5 font-medium"
        >
          EN - FR
        </Typography>
        <div className="w-1/3 text-2xl text-center"> Bienvenue sur P NDA</div>
        <div className=" w-1/3 flex justify-center items-center gap-4">
          {/* <div className="mr-4 hidden lg:block">{navList}</div> */}
          <div className="flex justify-end items-end gap-x-4">
            <a href="#" className="hidden lg:inline-block">
              <span className="text-black text-sm border-b-2 border-black">
                Se connecter
              </span>
            </a>
            <a href="#" className="hidden lg:inline-block">
              <span className=" text-black text-sm border-b-2 border-black">
                Créer un compte
              </span>
            </a>
          </div>

          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      {!mobileview ? (
        <div className="flex justify-center items-center lg:hidden">
          {navList}
        </div>
      ) : (
        ""
      )}
      <MobileNav open={openNav} >
        <div className="flex justify-center border-2 p-2 border-black rounded-t-full mx-12">
          <div className="">
            <ul className=" mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
              <Typography className="text-black text-center font-bold">
               <NavLink to="#"> Se connecter</NavLink>
              </Typography>

              <Typography className="text-black text-center font-bold">
               <NavLink to="#">Créer un compte</NavLink> 
              </Typography>
            </ul>
            <div className="flex justify-center items-center mt-2 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M11.1904 1.5957C11.1904 1.18149 11.5262 0.845703 11.9404 0.845703C12.3546 0.845703 12.6904 1.18149 12.6904 1.5957V10.285L17.2437 5.73173C17.5366 5.43884 18.0115 5.43884 18.3044 5.73173C18.5973 6.02462 18.5973 6.4995 18.3044 6.79239L13.7511 11.3457H22.4404C22.8546 11.3457 23.1904 11.6815 23.1904 12.0957C23.1904 12.5099 22.8546 12.8457 22.4404 12.8457H13.7511L18.3044 17.399C18.5973 17.6919 18.5973 18.1668 18.3044 18.4597C18.0115 18.7526 17.5366 18.7526 17.2437 18.4597L12.6904 13.9064V22.5957C12.6904 23.0099 12.3546 23.3457 11.9404 23.3457C11.5262 23.3457 11.1904 23.0099 11.1904 22.5957V13.9063L6.63712 18.4597C6.34422 18.7525 5.86935 18.7525 5.57646 18.4597C5.28356 18.1668 5.28356 17.6919 5.57646 17.399L10.1297 12.8457H1.44043C1.02622 12.8457 0.69043 12.5099 0.69043 12.0957C0.69043 11.6815 1.02622 11.3457 1.44043 11.3457H10.1297L5.57645 6.79241C5.28356 6.49951 5.28356 6.02464 5.57645 5.73175C5.86934 5.43885 6.34422 5.43885 6.63711 5.73175L11.1904 10.2851V1.5957Z"
                  fill="#1F1F1F"
                />
              </svg>
            </div>
            {navList}
          </div>
        </div>
      </MobileNav>
    </Navbar>
  );
};

export default StickyNavbar;
