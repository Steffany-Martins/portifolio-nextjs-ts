import {FunctionComponent,useState, useEffect} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';

//custom tag
const NavItem: FunctionComponent<{
  activeItem:string
  setActiveItem:Function
  name: string
  route:string}> = ({activeItem, name, route, setActiveItem}) =>{
  return activeItem !== name ? (
    <Link href={route}>
      <a>
        <span onClick={() => setActiveItem(name)}>{name}</span>
      </a>
    </Link>

    ):null
}

const Navbar = () => {
 
const [activeItem, setActiveItem] = useState<string>("")
const {pathname} = useRouter();


  useEffect(() => {
        if(pathname === '/') setActiveItem('About')
        if(pathname === '/projects') setActiveItem('Projects')
        if(pathname === '/resume') setActiveItem('Resume')

  }, [])
  return (
    <div>
      <span className="font-bold text-green">{activeItem}</span>
      <div className="flex text-red-400 text-red font-lg spacex-3">
        <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="About" route='/'/>
        <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="Projects" route='/projects'/>
        <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="Resume" route='/resume'/>
              

      </div>
    </div>
  )
}

export default Navbar
