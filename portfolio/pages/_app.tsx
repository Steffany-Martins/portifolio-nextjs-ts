import '../styles/globals.css';
//import
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <div className="grid grid-cols-12 gap-6 px-5 lg:px-34 my-14 sm:px-20 md:px-30">
      <div className="col-span-12 p-4 text-center bg-white rounded-2xl lg:col-span-3 ">
        <Sidebar/>
      </div>
      <div className="flex flex-col col-span-12 bg-white rounded-2xl lg:col-span-9">
        <Navbar/>
        <Component {...pageProps} />
      </div>
    </div>

  )
}

export default MyApp
