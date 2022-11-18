import React, { useEffect ,useRef,useState,Suspense} from 'react';
import {Link,Routes,Route} from 'react-router-dom';
import {CgMenu} from 'react-icons/cg';
import {FaTimes} from 'react-icons/fa';
import {MdSchool} from 'react-icons/md';
import {FiSun} from 'react-icons/fi';
import {BsFillMoonFill} from 'react-icons/bs';
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
    <div className='scrollbar-hide'>
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
            <div className='dark:bg-slate-900 w-full py-2 border-b flex justify-between '>
              <h1 className='text-xl text-orange-500 font-bold flex '><MdSchool className='my-1 mx-1'/>Company Name</h1>
              <div className='hidden md:block'>
                <ul className='flex'>
                  <li className='mx-2'><a href='/' className='text-gray-500 hover:text-orange-500'>Home</a></li>
                  <li className='mx-2'><a href='/' className='text-gray-500 hover:text-orange-500'>About</a></li>
                  <li className='mx-2'><a href='/' className='text-gray-500 hover:text-orange-500'>Services</a></li>
                  <li className='mx-2'><a href='/' className='text-gray-500 hover:text-orange-500'>Contact</a></li>
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
        <nav ref={navbar} className='fixed w-[70%] h-[100vh] z-[20] top-[0] shadow-xl bg-white md:hidden ml-[-100%] border-r dark:bg-gray-900 dark:text-white dark:border-r-slate-700 transition-all'>
          <div className='flex justify-end'>
            <button className='btn btn-sm hover:bg-gray-300 border-none'>
              
            </button>
            </div>
          <ul>
            <li className='btn w-[80%] text-left normal-case hover:bg-orange-500 hover:text-white border-none mx-auto rounded-none'>Home</li>
            <li className='btn w-[80%] text-left normal-case hover:bg-orange-500 hover:text-white border-none mx-auto rounded-none'>About</li>
            <li className='btn w-[80%] text-left normal-case hover:bg-orange-500 hover:text-white border-none mx-auto rounded-none'>Services</li>
            <li className='btn w-[80%] text-left normal-case hover:bg-orange-500 hover:text-white border-none mx-auto rounded-none'>Contact</li>

          </ul>
        </nav>
      </header>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        </Suspense>
        <div className='bg-black text-white '>
                    <h1 className='font-light text-xl uppercase py-3'>Newsletter Subscription</h1>
                    <p className='text-[11pt] font-light text-gray-300'>
                    Sign up for Belai Express updates to receive information about new arrivals, future events and specials.
                    </p>
                    <form className='flex flex-col md:flex-row w-[90%] mx-auto'>
                        <input type='email' className='bg-black outline outline-gray-400 py-1 my-2 text-center font-light' placeholder='me@example.com' />
                        <button className='btn btn-sm py-1 my-2 rounded-none text-gray-300 font-light'>Subscribe!</button>
                    </form>
                    <p className='text-gray-400 font-light text-[11pt] my-3'>
                        © 2022 Belai Express . All Rights Reserved. Ecommerce Software by Belai Express .Inc.
                    </p>
                    <div>
                        <ul className='flex justify-center text-[12pt] py-3'>
                            <li className='mx-[5px] text-[15pt]'>
                                <i className='fab fa-twitter' />
                            </li>
                             <li className='mx-[10px] text-[15pt]'>
                                <i className='fab fa-facebook' />
                            </li>
                            <li className='mx-[2.5px] text-[15pt]'>
                                <i className='fab fa-whatsapp' />
                            </li>
                             <li className='mx-[10px] text-[15pt]'>
                                <i className='fab fa-pinterest' />
                            </li>
                             <li className='mx-[2.5px] text-[15pt]'>
                                <i className='fab fa-vk' />
                            </li>
                            <li className='mx-[10px] text-[15pt]'>
                                <i className='fab fa-youtube' />
                            </li>
                            <li className='mx-[2.5px] text-[15pt]'>
                                <i className='fab fa-instagram' />
                            </li>
                            <li className='mx-[10px] text-[15pt]'>
                                <i className='fab fa-skype' />
                            </li>
                        </ul>
                        
                    </div>
                    <button className='font-light btn w-full bg-gray-400 text-black border-none rounded-none normal-case'><i className='fal fa-arrow-up' /> Top</button>
                </div>
      </div>

    </div>
  );
}

export default App;
