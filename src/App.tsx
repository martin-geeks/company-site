import React, { useEffect ,useRef,useState,Suspense} from 'react';
import {Link,Routes,Route} from 'react-router-dom';
import {CgMenu} from 'react-icons/cg';
import {FaTimes, FaVk} from 'react-icons/fa';
import {MdSchool} from 'react-icons/md';
import {FiSun} from 'react-icons/fi';
import {BsBuilding, BsFacebook, BsFillMoonFill, BsInstagram, BsSkype, BsTwitter, BsWhatsapp, BsYoutube} from 'react-icons/bs';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './main.css';
const Home = React.lazy(() => import('./components/Home'));

function App() {
  const [isLogged,setLogged] = useState<boolean>(false);
  const navbar = useRef<HTMLDivElement>(null);
  const [isMenuOpen,setMenuOpen] = useState<boolean>(false);
  const [theme, setTheme] = useState<string>('');
  const autoTheme = () => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      setTheme('dark');
      } else {
      document.documentElement.classList.remove('dark')
      setTheme('light');
      }

  }
  const toggleTheme = () => {
    if (document.documentElement.classList.contains('dark')) {
      localStorage.theme = 'light'
      document.documentElement.classList.remove('dark')
      setTheme('light');
    } else {
      localStorage.theme = 'dark'
      document.documentElement.classList.add('dark');
      setTheme('dark');
    }
  }
  const toggleNavbar = () => {
    navbar.current?.classList.toggle('ml-[-100%]');
    if(navbar.current?.classList.contains('ml-[-100%]')){
      setMenuOpen(false);
    }else{
      setMenuOpen(true);
    }

  }
  useEffect(() => {
    Aos.init({duration:200});
    setLogged(true);
    autoTheme();
  }, []);

  return (
    <div className='scrollbar-hide dark:bg-black dark:text-white '>
      <header className="">
        {isLogged ?
         null
         :
          <div data-aos='slide-down' className=' bg-white dark:bg-slate-900 py-2  flex justify-end'>
            <button className='btn btn-sm md:btn-md rounded bg-orange-500 text-white normal-case hover:bg-orange-700 border-none mx-1'>Create Account</button>
            <button className='btn btn-sm md:btn-md rounded bg-orange-500 text-white normal-case hover:bg-orange-700 border-none mx-1'>Login</button>
          </div>
          }
        <div>
          <div className='flex justify-between'>
            <div className='bg-white dark:bg-black w-full py-2 border-b border-b-gray-300 dark:border-b-slate-900 flex justify-between '>
              <h1 className='text-xl text-orange-500 font-bold flex '><BsBuilding className='my-1 mx-1'/>Company Name</h1>
              <div className='hidden md:block'>
                <ul className='flex'>
                  <li className='mx-2'><a href='#home' className='text-gray-500 hover:text-orange-500'>Home</a></li>
                  <li className='mx-2'><a href='#about' className='text-gray-500 hover:text-orange-500'>About</a></li>
                  <li className='mx-2'><a href='#services' className='text-gray-500 hover:text-orange-500'>Services</a></li>
                  <li className='mx-2'><a href='#contact' className='text-gray-500 hover:text-orange-500'>Contact</a></li>
                </ul>
              </div>
              <div className='md:hidden'>
                <button onClick={toggleTheme} className='btn btn-sm md:btn-md rounded bg-orange-500 text-white normal-case hover:bg-orange-700 border-none mx-1 my-1'>{theme === 'light'? <BsFillMoonFill />:<FiSun/> }</button>
              <button onClick={toggleNavbar} className='btn btn-sm hover:bg-gray-300 border-none md:hidden dark:text-white '>
                {isMenuOpen ? <FaTimes className='text-xl'/> : <CgMenu className='text-xl'/>}
              </button>
              </div>
            </div>
          </div>
        </div>
        <nav ref={navbar} className='fixed w-[70%] h-[100vh] z-[20] top-[0] shadow-xl bg-white md:hidden ml-[-100%] border-r dark:bg-black dark:text-white dark:border-r-slate-700 transition-all'>
          <div className='flex justify-end'>
            <button className='btn btn-sm hover:bg-gray-300 border-none'>
              
            </button>
            </div>
          <ul>
            
            <li className='mx-2'><a href='#home' className='btn w-[80%] text-left normal-case hover:bg-orange-500 hover:text-white border-none mx-auto rounded-none'>Home</a></li>
            <li className=''><a href='#about' className='btn w-[80%] text-left normal-case hover:bg-orange-500 hover:text-white border-none mx-auto rounded-none'>About</a></li>
            <li className='mx-2'><a href='#services' className='btn w-[80%] text-left normal-case hover:bg-orange-500 hover:text-white border-none mx-auto rounded-none'>Services</a></li>
            <li className='mx-2'><a href='#contact' className='btn w-[80%] text-left normal-case hover:bg-orange-500 hover:text-white border-none mx-auto rounded-none'>Contact</a></li>

          </ul>
        </nav>
      </header>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        </Suspense>
        <div className='bg-black text-white dark:bg-gray-900'>
                    <h1 className='font-light text-xl uppercase py-3 text-center'>Newsletter Subscription</h1>
                    <p className='text-[11pt] font-light text-gray-300 text-center'>
                    Sign up for Company updates to receive information about new arrivals, future events and specials.
                    </p>
                    <form className='flex flex-col md:flex-row w-[90%] mx-auto'>
                        <input type='email' className='bg-white outline-none py-1 my-2 text-center text-black' placeholder='me@example.com' />
                        <button className='btn btn-sm py-1 my-2 rounded-none text-gray-300 font-light'>Subscribe!</button>
                    </form>
                    <p className='text-gray-400 font-light text-[11pt] my-3  text-center'>
                        © 2022 Company Name . All Rights Reserved. Ecommerce Software by Company Name .Inc.
                    </p>
                    <div>
                        <ul className='flex justify-center text-[12pt] py-3'>
                            <li className='mx-[5px] text-[15pt]'>
                                <BsTwitter />
                            </li>
                             <li className='mx-[10px] text-[15pt]'>
                                <BsFacebook  />
                            </li>
                            <li className='mx-[2.5px] text-[15pt]'>
                                <BsWhatsapp />
                            </li>
                             <li className='mx-[2.5px] text-[15pt]'>
                                <i className='fab fa-pinterest' />
                            </li>
                             <li className='mx-[5px] text-[15pt]'>
                                <FaVk />
                            </li>
                            <li className='mx-[5px] text-[15pt]'>
                                <BsYoutube/>
                            </li>
                            <li className='mx-[2.5px] text-[15pt]'>
                                <BsInstagram />
                            </li>
                            <li className='mx-[10px] text-[15pt]'>
                                <BsSkype />
                            </li>
                        </ul>
                        
                    </div>
                    <button className='font-light btn w-full bg-gray-400 text-black border-none rounded-none normal-case hidden'><i className='fal fa-arrow-up' /> Top</button>
                </div>
      </div>

    </div>
  );
}

export default App;
