
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { IconButton } from '@mui/material';

const Header = () => {
  return (<header className='fixed top-0 rounded-b-lg left-0 z-[100] w-full p-2 bg-my-background flex items-center justify-between drop-shadow-header-shadow'>
    <div className='flex items-center'>
        <IconButton>
        <MenuOutlinedIcon />
        </IconButton>
        <h1 className="ml-5 text-sm font-bold">SL <span className="text-white">SNAKES</span></h1>
    </div>

  </header>)
}

export default Header