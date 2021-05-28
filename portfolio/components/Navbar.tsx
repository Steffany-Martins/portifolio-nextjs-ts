import {useState} from 'react';
import Link from 'next/link';

const Navbar = () => {
 
const [activeItem, setActiveItem] = useState<string>("initialState")
  return (
    <div>
      <span>{activeItem}</span>
      <div>

      </div>
    </div>
  )
}

export default Navbar
