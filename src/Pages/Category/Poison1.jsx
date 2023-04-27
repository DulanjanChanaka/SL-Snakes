// import Swiper from 'swiper';
// import 'swiper/swiper-bundle.css';
// import PoisonSlider from './PoisonSlider';
// import { useEffect } from 'react';

// const Poison = () => {
//   // Initialize Swiper
//   useEffect(() => {
//     new Swiper('.swiper-container', {
//       slidesPerView: 4,
//       spaceBetween: 30,
//       loop: true,
//       pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//       },
//     });
//   }, []);

//   return (
//     <div >
//       <h1>Poison Slides</h1>
//       <div className="swiper-container">
//         <div className="swiper-wrapper"
//         style={{display:"flex",
//                  flexDirection:"column"
//     }}
//         >
//           <div className="swiper-slide">
//             <PoisonSlider poisonType="1" />
//           </div>
//           <div className="swiper-slide">
//             <PoisonSlider poisonType="2" />
//           </div>
//           <div className="swiper-slide">
//             <PoisonSlider poisonType="3" />
//           </div>
//           <div className="swiper-slide">
//             <PoisonSlider poisonType="4" />
//           </div>
//         </div>
//         <div className="swiper-pagination"></div>
//       </div>
//     </div>
//   );
// };

//export default Poison;