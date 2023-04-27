// import Data from "../../SnakeData/Data";


// const PoisonSlider = ({ poisonType }) => {
//   const filteredData = Data.filter((Data) => Data.poison === poisonType);

//   return (
//     <div  className="swiper-container">
//       <div className="swiper-wrapper"
//       key={Data.id}
//       style={{
//         width: "200px",
//         height: "200px",
//         margin: "20px 20px 40px 20px",
//         display: "flex",
//         flexDirection: "raw",
//         alignItems: "center",
//         backgroundColor:" rgb(197, 223, 174)",
//         padding:"10px",
//         fontWeight:"600",
//         borderRadius:"25px",
        
        
        
//       }}
//       >
//         {filteredData.map((Data) => (
//           <div  key={Data.id} className="swiper-slide">
//             <img src={Data.photo} alt={Data.name} style={{ width: "100%", height: "90%", objectFit: "cover" }} />
//             <h3 style={{ textAlign: "center", marginTop: "5px" }} >{Data.name}</h3>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

//export default PoisonSlider;

