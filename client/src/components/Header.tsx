import React, { useState } from 'react';

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const onButtonPress = (e: any) => {
    e.preventDefault();
    // Toggle current state
    setIsActive((current: boolean) => !current);
  };
  
  return (
    <header className="bg-header text-white" >
      <nav className="relative container mx-auto pt-4 pb-4 ">
        {/*Flex Container*/}
        <div className="flex items-center justify-between">
          {/*Logo*/}
          <div className="pt-2 flex items-center">
            <img src="/img/icon.svg" alt={"logo"} />
            <div className="font-bold " >CudosCoin<span className="text-red-400" >Investment</span></div>
          </div>
          {/*Menu Items*/}
          <div className="hidden lg:flex items-center space-x-6 font-medium">
            <a href="/" className="hover:text-red-400">
              Home
            </a>
            <a href="/" className="hover:text-red-400">
              About
            </a>
            <a href="/" className="hover:text-red-400">
              Login
            </a>
            {/*Buttons*/}
            <a href="/" className="hidden md:block p-3 px-6 pt-2 text-white bg-red-500 hover:bg-red-600 rounded-full baseline">
              Sign Up
            </a>
          </div>

          {/*Hamburger Icon*/}
          <button id="menu-btn" className={isActive ? "open block hamburger lg:hidden focus:outline-none" : "block hamburger lg:hidden focus:outline-none"} onClick={onButtonPress}>
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>

        {/*Mobile menu*/}
        <div className="lg:hidden">
          <div id="menu" className={isActive ? "absolute z-10 flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white text-black sm:w-auto sm:self-center left-6 right-6 drop-shadow-md" : "hidden absolute z-10 flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"}>
            <a className="hover:text-red-400" href="/">Home</a>
            <a className="hover:text-red-400" href="/">About</a>
            <a className="hover:text-red-400" href="/">Login</a>
            <a className="hover:text-red-400" href="/">Sign Up</a>
          </div>
        </div>
        
      </nav>
    </header>
  )
}

export default Header;