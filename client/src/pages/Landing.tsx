import React from 'react';
import { FaDesktop, FaMedal, FaChartLine } from "react-icons/fa";

const Landing = () => {
  return (
    <div className="flex flex-col">
      <section className="first">
        <div className="flex container mx-auto px-3 pt-6">
          <div className="h-full w-full text-white flex flex-col justify-center">
            <div className="text-lg font-medium pl-1.5" >Prepare for a New Future</div>
            <h1 className=" leading-tight text-5xl font-medium md:leading-normal xl:text-6xl xl:leading-normal">Our work is a presentation of sustainable value and secure investment.</h1>
            <a href="/" className="w-40 p-3 px-6 pt-2 mt-8 text-white bg-red-500 hover:bg-red-600 rounded-full font-bold baseline">
              Get Started {'>'}
            </a>
          </div>
          <div className="h-full w-full hidden lg:block">blah</div>
        </div>
      </section>

      <section className="second">
        <div className="flex flex-col justify-center container mx-auto my-12 px-3 lg:h-[90vh]">
          <div className="flex flex-col">
            <p className="font-bold text-red-400">We are skilled & technical experts</p>
            <div className="flex">
            <h2 className="leading-tight text-4xl font-medium mt-5 md:text-[40px] md:font-bold md:w-2/3">We trade with big organizations and help clients find innovative solutions to their problems.</h2>
            <div className="hidden md:w-1/3">blah</div>
            </div>
          </div>
          <div className="flex flex-col mt-8 items-center md:flex-row">
            <div className="h-72 w-96 flex flex-col py-3 rounded-sm lg:mr-4">
              <div className="">
                <FaDesktop color="rgb(248,113,113)" fontSize="4rem" />
              </div>
              <div className="mt-5 text-xl font-bold w-2/3" >Modern & Profit-Oriented Strategies</div>
              <div className="mt-5 text-md text-gray-700" >We use cutting-edge strategies that have been tried and tested and yield result.</div>
            </div>
            <div className="h-72 w-96 flex flex-col py-3 rounded-sm lg:mr-4">
              <div className="">
                <FaMedal color="rgb(248,113,113)" fontSize="4rem" />
              </div>
              <div className="mt-5 text-xl font-bold w-2/3" >Modern & Profit-Oriented Strategies</div>
              <div className="mt-5 text-md text-gray-700" >We use cutting-edge strategies that have been tried and tested and yield result.</div>
            </div>
            <div className="h-72 w-96 flex flex-col py-3 rounded-sm">
              <div className="">
                <FaChartLine color="rgb(248,113,113)" fontSize="4rem" />
              </div>
              <div className="mt-5 text-xl font-bold w-2/3" >Modern & Profit-Oriented Strategies</div>
              <div className="mt-5 text-md text-gray-700" >We use cutting-edge strategies that have been tried and tested and yield result.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="third">
        <div className="flex flex-row h-[80vh] md:h-[100vh] lg:h-[90vh]">
          <div className="hidden section3 flex-1 md:block"></div>
          <div className="flex-1 flex flex-col justify-center ml-8 max-w-lg">
            <div className="text-md font-bold text-red-500">What we are</div>
            <div className="text-[2.5rem] leading-tight mt-5 font-semibold">We are a dynamic team of experienced people</div>
            <div className="flex mt-7">
              <div className="mr-5"><img src={"/img/drip.svg"} alt={"drip"} height={"150px"} width={"150px"} /></div>
              <div>
                <h3 className="font-bold mb-4 text-xl">We are a Perfect Solution</h3>
                <p className="text-gray-700 mb-7 leading-7">We provide trading services in the area of Cryptocurrencies and management of Cryptocurrency related assets, helping companies and individuals to reach their highest financial potential. We optimize the investment process, thereby yielding returns on investment.</p>
                <a href="/" className="w-40 p-3 px-6 pt-2 text-white bg-red-500 hover:bg-red-600 rounded-full font-bold">
                  Get Started
                </a>              
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="fourth">
        <div className="container mx-auto flex flex-col py-24 border-y-2 border-gray-300 md:border-t-0 md:flex-row">
          <div className="flex-1 flex flex-col py-6 items-center justify-center">
            <div className="counter text-6xl font-bold">2<span className="text-2xl pl-1 font-semibold">M</span></div>
            <div className="text-gray-700">Deposited Amount</div>
          </div>
          <div className="flex-1 flex flex-col py-6 items-center justify-center">
            <div className="counter text-6xl font-bold">90<span className="text-2xl font-semibold">K</span></div>
            <div className="text-gray-700">Users Worldwide</div>
          </div>
          <div className="flex-1 flex flex-col py-6 items-center justify-center">
            <div className="counter text-6xl font-bold">65</div>
            <div className="text-gray-700">Available Countries</div>
          </div>
          <div className="flex-1 flex flex-col py-6 items-center justify-center">
            <div className="counter text-6xl font-bold">14</div>
            <div className="text-gray-700">Award Wins</div>
          </div>
        </div>
      </section>

      <div className="container my-24 px-6 mx-auto">
        <section className="mb-32 text-gray-800 text-center">

          <div className="text-md font-bold mb-4 text-red-500">Our Investment Plans</div>
          <h2 className="text-[2.5rem] leading-tight font-bold mb-12 pb-4 text-center">We provide a wide range of<br />affordable plans</h2>

          <div className="flex justify-center flex-wrap">
            <div className="columns">
              <ul className="price">
                <li className="header">Basic</li>
                <li className="grey">$ 9.99 / year</li>
                <li>10GB Storage</li>
                <li>10 Emails</li>
                <li>10 Domains</li>
                <li>1GB Bandwidth</li>
                <li className="grey"><a href="/" className="button">Sign Up</a></li>
              </ul>
            </div>

            <div className="columns">
              <ul className="price">
                <li className="header" style={{ backgroundColor: "#04AA6D" }}>Pro</li>
                <li className="grey">$ 24.99 / year</li>
                <li>25GB Storage</li>
                <li>25 Emails</li>
                <li>25 Domains</li>
                <li>2GB Bandwidth</li>
                <li className="grey"><a href="/" className="button">Sign Up</a></li>
              </ul>
            </div>

            <div className="columns">
              <ul className="price">
                <li className="header">Premium</li>
                <li className="grey">$ 49.99 / year</li>
                <li>50GB Storage</li>
                <li>50 Emails</li>
                <li>50 Domains</li>
                <li>5GB Bandwidth</li>
                <li className="grey"><a href="/" className="button">Sign Up</a></li>
              </ul>
            </div>

            <div className="columns">
              <ul className="price">
                <li className="header">Premium</li>
                <li className="grey">$ 49.99 / year</li>
                <li>50GB Storage</li>
                <li>50 Emails</li>
                <li>50 Domains</li>
                <li>5GB Bandwidth</li>
                <li className="grey"><a href="/" className="button">Sign Up</a></li>
              </ul>
            </div>

            <div className="columns">
              <ul className="price">
                <li className="header">Premium</li>
                <li className="grey">$ 49.99 / year</li>
                <li>50GB Storage</li>
                <li>50 Emails</li>
                <li>50 Domains</li>
                <li>5GB Bandwidth</li>
                <li className="grey"><a href="/" className="button">Sign Up</a></li>
              </ul>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}

export default Landing;