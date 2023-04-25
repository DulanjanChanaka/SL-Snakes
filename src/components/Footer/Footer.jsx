import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
//import { IconButton } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { useState } from 'react';
import style from "../../Pages/Home/Home.module.css"
import { Link } from 'react-router-dom';


const footerData= [
  {
    Icon:HomeOutlinedIcon,
    title:"Home",
    path:"/"
  },
  {
    Icon:SearchOutlinedIcon,
    title:"Search",
    path:"/Search"
  },
  {
    Icon:CategoryOutlinedIcon,
    title:"Category",
    path:"/Category"
  },
  {
    Icon:AccountCircleOutlinedIcon,
    title:" About",
    path:"/About"
  }

]

const Footer = () => {
  const [footerMenuSelect, setFooterMenuSelect]= useState("Home")

  return (
    <div className={style.footerContainer}>
      {footerData.map(({Icon,title, path},index)=>(
        <Link to={path}  key={index} ><div  onClick={()=>
          setFooterMenuSelect(title)
        } className={style.footerMenu}
        style={{
          color: footerMenuSelect === title? 'white':'rgb(34, 26, 26)'
        }}
        >
        <Icon/>
        <p>{title}</p>
      </div></Link>

      ))}
      
    </div>
  )
}
export default Footer