import {AiFillGithub as Github, AiFillLinkedin as Linkedin} from 'react-icons/ai';
import {GoLocation} from 'react-icons/go';
import {GiTie} from 'react-icons/gi';

const Sidebar = () => {
  return (
    <div>
      <img src="https://i.ibb.co/ggD0Jmt/1598294564393.jpg" alt='user avatar' className="w-32 h-32 mx-auto border-4 border-green-400 border-dashed rounded-full hover:border-opacity-50"/>
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-green">Steffany </span>
        Martins
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full">Web Developer</p>
      <a className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full" href="" download="name"><GiTie className="w-6 h-6"/>
      Download Resume</a>
      {/*social icon*/}
      <div className="flex w-9/12 mx-auto my-10 text-green-500 justify-evenly md:w-full">
        <a href="" className="w-8 h-8 cursor-pointer">
          <Github size={30} />
        </a>
        <a href="" className="w-8 h-8 cursor-pointer">
          <Linkedin size={30}/>
        </a>
      </div>
      <div>
        <div className="py-4 my-5 bg-gray-200" style={{marginLeft:"-1rem", marginRight: "-1rem"}}>
          <div className="flex items-center justify-center space-x-2">
          <GoLocation/>
          <span>Rio de Janeiro, Brasil</span>
          </div>
          <p className="my-2">ste-9@hotmail.com</p>
          <p className="my-2">84534534554/4552434674</p>
        </div>
        <button className="w-8/12 px-4 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 " onClick={() => window.open('mailto:ste-9@hotmail.com')}>Email</button>
        <button className="w-8/12 px-4 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 ">Toggle Theme</button>
      </div>
    </div>
  )
}

export default Sidebar


