import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-header">
      {/*Flex Container*/}
      <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
        {/*Logo and social links container*/}
        <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
          {/*Copywright for smaller screens.*/}
          <div className="mx-auto my-6 text-center text-white md:hidden">
            Copyright &copy; 2022. All Rights Reserved.
          </div>

          {/*Logo*/}
          <div className="h-8">
            <img src={"/img/icon.svg"} alt="logo" />
          </div>

          {/*Social links container*/}
          <div className="flex justify-center space-x-4">
            {/*Link 1*/}
            <a href="/">
              <img src={"/img/icon-facebook.svg"} alt="fb" height={"100%"} width={"100%"} />
            </a>
            {/*Link 2*/}
            <a href="/">
              <img src={"/img/icon-youtube.svg"} alt="youtube" height={"100%"} width={"100%"} />
            </a>
            {/*Link 1*/}
            <a href="/">
              <img src={"/img/icon-twitter.svg"} alt="twitter" height={"100%"} width={"100%"} />
            </a>
            {/*Link 1*/}
            <a href="/">
              <img src={"/img/icon-pinterest.svg"} alt="logo" height={"100%"} width={"100%"} />
            </a>
            {/*Link 1*/}
            <a href="/">
              <img src={"/img/icon-instagram.svg"} alt="logo" height={"100%"} width={"100%"} />
            </a>
          </div>
        </div>

        {/*List Container*/}
        <div className="flex justify-around space-x-32">
          <div className="flex flex-col space-y-3 text-white">
            <a href="#" className="hover:text-brightRed">
              Home
            </a>
            <a href="#" className="hover:text-brightRed">
              Products
            </a>
            <a href="#" className="hover:text-brightRed">
              Pricing
            </a>
            <a href="#" className="hover:text-brightRed">
              About
            </a>
          </div>
          <div className="flex flex-col space-y-3 text-white">
            <a href="#" className="hover:text-brightRed">
              Careers
            </a>
            <a href="#" className="hover:text-brightRed">
              Community
            </a>
            <a href="#" className="hover:text-brightRed">
              Privacy Policy
            </a>
          </div>
        </div>

        {/*Input Container*/}
        <div className="flex flex-col justify-between">
          <form action="post">
            <div className="flex space-x-3">
              <input
                type="text"
                className="flex-1 px-4 rounded-full focus:outline-none"
                placeholder="Updates in your inbox"
              />
              <button className="py-2 px-6 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none">
                Go
              </button>
            </div>
          </form>

          <div className="hidden text-white md:block">
            Copyright &copy; 2022. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;