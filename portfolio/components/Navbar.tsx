import {FunctionComponent,useState, useEffect} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';

//style
const classContent = 'hover:border-green border-b-4 border-white';
//custom tag
const NavItem: FunctionComponent<{
  activeItem:string
  setActiveItem:Function
  name: string
  route:string}> = ({activeItem, name, route, setActiveItem}) =>{
  return activeItem !== name ? (
    <Link href={route}>
      <a>
        <span className={classContent} onClick={() => setActiveItem(name)}>{name}</span>
      </a>
    </Link>

    ): null
}

const Navbar = () => {
 
  const {pathname} = useRouter();
  const [activeItem, setActiveItem] = useState<string>("")


  useEffect(() => {
        if(pathname === '/') setActiveItem('About')
        if(pathname === '/projects') setActiveItem('Projects')
        if(pathname === '/resume') setActiveItem('Resume')

  }, [])
  return (
    <div className='flex justify-between px-5 py-3 my-3'>
      <span className="text-xl font-bold border-b-4 cursor-pointer hover:opacity-50 text-green border-green md:text-2xl motion-safe:animate-bounce" >{activeItem}</span>
      <div className="flex space-x-5 text-lg text-black-200">
        <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="About" route='/'/>
        <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="Projects" route='/projects'/>
        <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="Resume" route='/resume'/>
              

      </div>
    </div>
  )
}

export default Navbar
