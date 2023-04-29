import PoisonSliders from "./PoisonSliders";



const Category = () => {
  return (
    <div className=' px-2 py-[80px]  w-full h-screen overflow-y-scroll'>
       <div ><PoisonSliders title=" උග්‍ර විෂ " rawsCount={1} slidesPerView={1} poisonType="1"/></div> 
       <div ><PoisonSliders title=" මද විෂ " rawsCount={1} slidesPerView={1} poisonType="2"/></div> 
       <div ><PoisonSliders title=" සුළු විෂ  " rawsCount={1} slidesPerView={1} poisonType="3"/></div> 
       <div><PoisonSliders  title=" නිර් විෂ  " rawsCount={1} slidesPerView={1} poisonType="4"/></div> 
      </div>
  )
}

export default Category;