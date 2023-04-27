import React, { useState } from "react";
import Data from '../../SnakeData/Data'


function SearchContent() {
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedBodyShape, setSelectedBodyShape] = useState("");
  
  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };
  
  const handleBodyShapeChange = (event) => {
    setSelectedBodyShape(event.target.value);
  };
  
  const filteredSnakes = Data.filter((Data) => {
    
    if (selectedColor && Data.bodyColor !== selectedColor) {
      return false;
    }
    if (selectedBodyShape && Data.style !== selectedBodyShape) {
      return false;
    }
    return true;
  });

  return (
    <div   >
      <h1 style={{ textAlign:"center",fontSize:"20px",borderRadius:"25px", fontWeight:"600", padding:"10px ",marginBottom: "20px", backgroundColor:"green" }}>Snakes Search</h1>
      <div style={{display:"flex" }}><label style={{ backgroundColor:"green", padding:"4px", borderRadius: "10px", marginRight:"10px"}}>
      <h2 style={{textAlign:"center"}}>Color</h2>
        <select value={selectedColor} onChange={handleColorChange} style={{cursor:"pointer",borderRadius:"25px"}} >
          <option value="">Any</option>
          <option value="11">brown</option>
          <option value="12">Black</option>
          <option value="13">Green</option>
          <option value="14">Brown / yellow</option>
          <option value="15">Red</option>
          <option value="16">Ash</option>
          <option value="17">Orange</option>
          
          
          {/* add more color options here */}
        </select>
      </label>
      <label style={{ backgroundColor:"green", padding:"4px", borderRadius: "10px", marginRight: "10px", }}>
         <h2 style={{textAlign:"center", }}>Shape</h2>
        <select value={selectedBodyShape} onChange={handleBodyShapeChange} style={{cursor:"pointer",borderRadius:"25px"}} >
          <option value="">Any</option>
          <option value="1">වයිරම් </option>
          <option value="2">හරස් ඉරි (වළලු )</option>
          <option value="3">නැත </option>
          <option value="4">පුල්ලි </option>
          <option value="5">පැතිරුණු රටා </option>
          <option value="6">වර්ණවත් හරස් ඉරි (වළලු) </option>
          <option value="7">හරස් ඉරි (මුදු ) </option>
          <option value="8">හරස් ඉරි </option>
          
          {/* add more body shape options here */}
        </select>
      </label></div>
      <div style={{ display: "flex", flexWrap: "wrap" , }}>
        {filteredSnakes.map((Data) => (
          <div
            key={Data.id}
            style={{
              width: "300px",
              height: "300px",
              margin: "20px 20px 40px 20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor:" rgb(197, 223, 174)",
              padding:"10px",
              fontWeight:"600",
              borderRadius:"25px"
              
            }}
          >
            <img src={Data.photo} alt={Data.name} style={{ width: "100%", height: "90%", objectFit: "cover" }} />
            <h2 style={{ textAlign: "center", marginTop: "5px" }}>{Data.name}</h2>
          </div>
        )
        
        )}
      </div>
    </div>
  );
}

export default SearchContent;