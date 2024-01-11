import React from "react";

const Footer = () => {
  return (
    <div className="relative inline-flex h-[1030px] w-full flex-row items-start justify-between pb-96 tracking-[0px] text-neutral-800">
      <div className="relative flex flex-grow flex-col items-center justify-between gap-y-20 self-stretch">
        <div className="h-px self-stretch bg-gray-600 opacity-10" />
        <div className="font-jost flex w-[861px] flex-grow items-end justify-center pr-px pt-4 text-center text-[40px] font-medium leading-snug">
          Rejoignez notre communauté et aidez-nous à construire la première
          plateforme de networking en ligne à destination du marché africain!
        </div>
        <div className="font-bi-z_udpgothic flex flex-wrap items-center justify-between gap-y-5 gap-x-5 pt-1.5 text-center text-[15px] font-normal leading-normal">
          <div className="flex h-14 flex-grow items-center justify-center">
            <div className="relative flex h-14 flex-grow items-center justify-between py-5 px-16">
              <div className="absolute inset-0 flex rounded-3xl">
                <div className="h-full w-full -scale-x-100 rounded-3xl border-[0.5px] border-solid border-neutral-800" />
              </div>
              <div className="relative flex flex-grow">
                <div className="flex h-full w-full -scale-x-100 justify-center">
                  Se connecter
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex flex-grow items-center justify-between self-stretch py-5 px-12">
            <div className="absolute inset-0 flex rounded-3xl">
              <div className="h-full w-full -scale-x-100 rounded-3xl border-[0.5px] border-solid border-neutral-800" />
            </div>
            <div className="relative flex flex-grow">
              <div className="flex h-full w-full -scale-x-100 justify-center">
                Créer un compte
              </div>
            </div>
          </div>
        </div>
        <div className="font-bi-z_udpgothic flex flex-col items-center justify-between pr-2.5 leading-normal">
          <div className="flex flex-grow items-center justify-between gap-x-48 pr-5 text-[15px] font-bold leading-normal">
            <div className="text-left">
              <span className="uppercase">Page d'accueil</span>
            </div>
            <div className="text-left">
              <span className="uppercase">pour les EXPERTS</span>
            </div>
            <div className="w-52 self-stretch text-left">
              <span className="uppercase">
                pour les organisations en Afrique
              </span>
            </div>
            <div className="flex justify-end text-right">
              <span className="uppercase">Contact</span>
            </div>
          </div>
          <div className="flex h-10 items-center justify-center self-stretch text-[13px] font-normal leading-normal">
            <div className="flex h-10 flex-grow items-center justify-between gap-x-40">
              <div className="w-40 self-stretch text-left">
                <ul className="ml-[1em] list-disc">
                  <li className="mb-0">Missions de PANDA</li>
                </ul>
              </div>
              <div className="flex items-center self-stretch pl-10 text-left">
                <ul className="ml-[1em] list-disc">
                  <li className="mb-0">
                    Découvrez les organisations en Afrique
                  </li>
                </ul>
              </div>
              <div className="flex w-44 justify-end self-stretch text-right">
                <ul className="ml-[1em] list-disc">
                  <li className="mb-0">Découvrez les experts</li>
                </ul>
              </div>
              <div className="flex items-center justify-end pl-20 text-right">
                <ul className="ml-[1em] list-disc">
                  <li className="mb-0">Nous contacter</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 right-3 flex h-3 w-3.5 items-center justify-center">
        <div className="h-3 w-3.5">
          <svg
            width="100%"
            height="100%"
            style={{ overflow: "visible" }}
            preserveAspectRatio="none"
            viewBox="0 0 13 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.31224 2.96133L6.34042 3.43711L5.87076 3.37885C4.16119 3.15552 2.66767 2.39816 1.39959 1.12617L0.779637 0.495035L0.619952 0.961106C0.281797 2.00006 0.497841 3.09727 1.20233 3.83521C1.57806 4.24302 1.49352 4.30128 0.84539 4.05854C0.619952 3.98086 0.422695 3.9226 0.403908 3.95173C0.338156 4.0197 0.563593 4.90329 0.742064 5.25285C0.986288 5.73834 1.48413 6.21412 2.02893 6.4957L2.4892 6.71903L1.9444 6.72874C1.41838 6.72874 1.39959 6.73845 1.45595 6.94235C1.64381 7.57349 2.38588 8.24347 3.21248 8.53476L3.79486 8.73867L3.28763 9.04938C2.53617 9.49604 1.65321 9.74849 0.770244 9.76791C0.347549 9.77762 0 9.81646 0 9.84559C0 9.94269 1.14597 10.4864 1.81289 10.7001C3.81365 11.3312 6.19013 11.0593 7.97484 9.98153C9.24293 9.21445 10.511 7.69001 11.1028 6.21412C11.4222 5.42762 11.7415 3.99057 11.7415 3.30117C11.7415 2.85452 11.7697 2.79626 12.2957 2.26222C12.6057 1.95151 12.8969 1.61166 12.9532 1.51457C13.0472 1.33008 13.0378 1.33008 12.5587 1.49515C11.7603 1.78644 11.6476 1.7476 12.0421 1.31066C12.3333 0.999946 12.6808 0.436776 12.6808 0.271709C12.6808 0.24258 12.5399 0.291129 12.3803 0.378517C12.2112 0.475616 11.8355 0.621263 11.5537 0.708651L11.0464 0.873718L10.5862 0.553294C10.3325 0.378517 9.9756 0.184321 9.78773 0.126062C9.30868 -0.0098753 8.57601 0.00954437 8.14392 0.164902C6.96977 0.601844 6.2277 1.72818 6.31224 2.96133Z"
              fill="#1F1F1F"
            />
          </svg>
        </div>
      </div>
      <div className="font-bi-z_udpgothic absolute bottom-2.5 right-16 flex h-5 w-96 items-center justify-center text-left text-[13px] font-normal leading-normal">
        <div className="flex flex-grow items-start justify-between gap-x-96 self-stretch">
          <div>© 2022 Tous droits réservés</div>
          <div className="flex items-center justify-center gap-x-11">
            <div className="w-2 self-stretch">
              <svg
                width="100%"
                height="100%"
                style={{ overflow: "visible" }}
                preserveAspectRatio="none"
                viewBox="0 0 7 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.55073 15.0352V7.53457H0V4.94973H1.55073V3.3978C1.55073 1.28908 2.42638 0.0351562 4.91418 0.0351562H6.98534V2.62029H5.69072C4.72228 2.62029 4.65821 2.98153 4.65821 3.65569L4.65469 4.94943H7L6.72556 7.53428H4.65469V15.0352H1.55073Z"
                  fill="#1F1F1F"
                />
              </svg>
            </div>
            <div className="h-3.5 w-3.5">
              <svg
                width="100%"
                height="100%"
                style={{ overflow: "visible" }}
                preserveAspectRatio="none"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3 14.0352H0V5.03516H3V14.0352Z"
                  fill="#1F1F1F"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.49108 3.03516H1.47404C0.578773 3.03516 0 2.36818 0 1.53464C0 0.683462 0.5964 0.0351562 1.50865 0.0351562C2.42091 0.0351562 2.98269 0.683462 3 1.53464C3 2.36818 2.42091 3.03516 1.49108 3.03516Z"
                  fill="#1F1F1F"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.9999 14.0349H11.0519V9.33051C11.0519 8.14886 10.6253 7.34254 9.55814 7.34254C8.74368 7.34254 8.25855 7.88612 8.04549 8.41114C7.96754 8.5993 7.94841 8.86146 7.94841 9.12426V14.0352H5C5 14.0352 5.03886 6.06699 5 5.24187H7.94841V6.48737C8.33968 5.88864 9.04046 5.03516 10.6057 5.03516C12.5456 5.03516 14 6.29221 14 8.99312L13.9999 14.0349Z"
                  fill="#1F1F1F"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="font-bi-z_udpgothic absolute bottom-96 left-9 flex h-5 w-[817px] items-center justify-center text-[13px] font-normal leading-normal">
        <div className="flex flex-grow items-center justify-between gap-x-96 self-stretch">
          <div className="w-32 self-stretch text-left">
            <ul className="ml-[1em] list-disc">
              <li className="mb-0">Fonctionnalités</li>
            </ul>
          </div>
          <div className="flex w-24 justify-end self-stretch text-right">
            <ul className="ml-[1em] list-disc">
              <li className="mb-0">Travel Map</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="font-bi-z_udpgothic absolute bottom-80 left-9 flex h-5 w-[879px] items-center justify-center text-[13px] font-normal leading-normal">
        <div className="flex flex-grow items-center justify-between gap-x-96 self-stretch">
          <div className="w-44 self-stretch text-left">
            <ul className="ml-[1em] list-disc">
              <li className="mb-0">Découvrez les experts</li>
            </ul>
          </div>
          <div className="flex w-40 justify-end self-stretch text-right">
            <ul className="ml-[1em] list-disc">
              <li className="mb-0">Evénements à venir</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="font-bi-z_udpgothic absolute bottom-72 left-9 flex h-8 w-96 items-start justify-between gap-x-12 pt-2.5 text-[13px] font-normal leading-normal">
        <div className="flex h-2.5 flex-grow text-left">
          <ul className="ml-[1em] list-disc">
            <li className="mb-0">Découvrez les organisations en Afrique</li>
          </ul>
        </div>
        <div className="flex w-40 justify-end text-right">
          <ul className="ml-[1em] list-disc">
            <li className="mb-0">Evénements à venir</li>
          </ul>
        </div>
      </div>
      <div className="font-bi-z_udpgothic absolute bottom-64 left-9 flex h-5 w-32 items-center justify-center text-left text-[13px] font-normal leading-normal">
        <div className="flex-grow self-stretch">
          <ul className="ml-[1em] list-disc">
            <li className="mb-0">Offres d'emploi</li>
          </ul>
        </div>
      </div>
      <div className="font-bi-z_udpgothic absolute bottom-56 left-9 flex h-5 w-40 items-center justify-center text-left text-[13px] font-normal leading-normal">
        <div className="flex-grow self-stretch">
          <ul className="ml-[1em] list-disc">
            <li className="mb-0">Evénements à venir</li>
          </ul>
        </div>
      </div>
      <div className="font-bi-z_udpgothic absolute bottom-44 left-9 flex h-5 w-28 items-center justify-center text-left text-[13px] font-normal leading-normal">
        <div className="flex-grow self-stretch">
          <ul className="ml-[1em] list-disc">
            <li className="mb-0">Témoignages</li>
          </ul>
        </div>
      </div>
      <div className="font-bi-z_udpgothic absolute bottom-36 left-9 flex h-5 w-32 items-center justify-center text-left text-[13px] font-normal leading-normal">
        <div className="flex-grow self-stretch">
          <ul className="ml-[1em] list-disc">
            <li className="mb-0">Les fondateurs</li>
          </ul>
        </div>
      </div>
      <div className="font-bi-z_udpgothic absolute bottom-96 left-96 flex h-5 w-32 items-center justify-center text-left text-[13px] font-normal leading-normal">
        <div className="flex-grow self-stretch">
          <ul className="ml-[1em] list-disc">
            <li className="mb-0">Offres d'emploi</li>
          </ul>
        </div>
      </div>
      <div className="font-bi-z_udpgothic absolute bottom-80 left-96 flex h-5 w-24 items-center justify-center text-left text-[13px] font-normal leading-normal">
        <div className="flex-grow self-stretch">
          <ul className="ml-[1em] list-disc">
            <li className="mb-0">Travel Map</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
