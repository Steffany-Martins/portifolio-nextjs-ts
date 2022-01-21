import '../styles/globals.css';
//import
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

import {ThemeProvider} from 'next-themes';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <div className="grid grid-cols-12 gap-6 px-5 my-14 lg:px-34 sm:px-20 md:px-30">
        <div className="col-span-12 p-4 text-center bg-white dark:bg-dark-500 rounded-2xl lg:col-span-3 shadow-custom-light dark:shadow-custom-dark">
          <Sidebar/>
        </div>
        <div className="flex flex-col col-span-12 overflow-hidden bg-white rounded-2xl lg:col-span-9 dark:bg-dark-500">
          <Navbar/>
          <Component {...pageProps} />
        </div>
      </div>
    </ThemeProvider>

  )
}

export default MyApp
