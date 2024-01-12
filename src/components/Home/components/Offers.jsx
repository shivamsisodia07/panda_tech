import React from 'react'
import OfferCard from '../utils/offerCard'
// import img5 from '../../../../public/assets/img5.png'
// import img1 from '../../../../public/assets/img1.png'
// import img2 from '../../../../public/assets/img2.png'
// import img3 from '../../../../public/assets/img3.png'
const offers = () => {
  const roles=[
    {
      role:"Lead Software Engineer",
      company_name:"Tubik Studio",
      img_link:"img5.png",
    },{
      role:"Risk Analyst",
      company_name:"Bubba Gump",
      img_link:"img1.png",
    },{
      role:"Financial Analyst",
      company_name:"SP-holding",
      img_link:"img2.png"
    },{
      role:"Data Engineer",
      company_name:"Vehement Capital Partners",
      img_link:"img3.png"
    }
  ]
  return (
    <div className="h-screen mb-4 mt-32 px-4">
      <div className="flex flex-row h-fit">
      <div className="w-1/3 p-4">
         
         {" "}
         <div className="font-bold text-start text-3xl mb-4">
         Offres d'emploi
         </div>
         <div className="flex flex-col  items-end ">
         <div className=" flex flex-col justify-end h-full">
           {" "}
           <p className="mb-4">
           Publiez les offres d'emploi au sein de votre organisation auprès de notre communauté d'experts! Expert à la recherche d'un emploi en Afrique? Trouvez le job de vos rêves! 
           </p>
           <div className="flex justify-center mb-4 ">
             <button className="py-2 px-4 border border-black rounded-3xl">
             Publier ou postuler à une offre d'emploi
             </button>
           </div>
         </div>
       </div>
     </div>
        <div className="w-2/3">
          <div className='flex flex-row flex-wrap gap-4'>
            
            {
              roles.map((item,index)=>{
               return <OfferCard company={item.company_name} img_link={item.img_link} role={item.role}  ></OfferCard>
              })
            }
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default offers