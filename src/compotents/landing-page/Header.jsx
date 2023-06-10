// import React from "react";
// import { useState } from "react";
import { NavLink } from "react-router-dom";
import RNALogo from '../../assets/images/logoo1.png';
export const Header = () => {
//   const [navbar, setNavbar] = useState(false);
//   const [toggle, setToggle] = useState(false);
  return (
    <>
            <div className="flex w-full h-[70px] overflow-hidden">
                
                <div className="flex w-full justify-center items-center">
                    <div className="flex justify-center items-center w-full mx-[7px]  h-[50px]  bg-white">
                        <div className="flex flex-row justify-center items-center space-x-8 w-full mx-4">
                                <div className="flex items-center justify-center">
                                <img src={RNALogo} className="w-[50px] justify-start flex " alt="Windster Logo" />  
                                <h1 className=" text-center items-center justify-centertext-md font-bold">RNA Co-Thrift</h1>                                  
                                </div>
                                <div className="flex  ">
        <nav className="flex py-2 md:py-1 text-gray-500 bg-white ">
                        <ul className="md:flex w-[40rem] md:w-auto items-center lg:space-x-4 md:space-x-1.5 text-xs md:text-xs lg:text-sm font-bold">
                            <li className="py-1.5 px-2">
                            <NavLink
                                to="/"
                                className={({ isActive }) => {
                                return (
                                    "hover:text-green-800  py-1.5 px-2  " +
                                    (!isActive
                                    ? "cursor-pointer  transition-transform duration-300 ease-out rounded-sm"
                                    : "text-green-600")
                                );
                                }}
                            >
                                HOME
                            </NavLink>
                            </li>
                            <li className="py-1.5 px-2">
                            <NavLink
                                to="/about"
                                className={({ isActive }) => {
                                return (
                                    "hover:text-green-800  py-1.5 px-2 " +
                                    (!isActive
                                    ? "cursor-pointer  transition-transform duration-300 ease-out rounded-sm"
                                    : "text-green-600")
                                );
                                }}
                            >
                                ABOUT US
                            </NavLink>
                            </li>
                            <li className="py-1.5 px-2">
                            <NavLink
                                to="/speakers"
                                className={({ isActive }) => {
                                return (
                                    "hover:text-green-800  py-1.5 px-2 " +
                                    (!isActive
                                    ? "cursor-pointer  transition-transform duration-300 ease-out rounded-sm"
                                    : "text-green-600")
                                );
                                }}
                            >
                               SERVICES  
                            </NavLink>
                            </li>
                            <li className="py-1.5 px-2">
                            <NavLink
                                to="/planning"
                                className={({ isActive }) => {
                                return (
                                    "hover:text-green-800  py-1.5 px-2 " +
                                    (!isActive
                                    ? "cursor-pointer  transition-transform duration-300 ease-out rounded-sm"
                                    : "text-green-600")
                                );
                                }}
                            >
                            FAQs
                            </NavLink>
                            </li>
                            <li className="hover:text-green-800  p-2 cursor-pointer  transition-transform duration-300 ease-out rounded-sm px-2 ">
                            <NavLink
                                to="/registration"
                                className={({ isActive }) => {
                                return (
                                    "hover:text-green-800  py-1.5 px-2 " +
                                    (!isActive
                                    ? "cursor-pointer  transition-transform duration-300 ease-out rounded-sm"
                                    : "text-green-600")
                                );
                                }}
                            >
                                GALLARY
                            </NavLink>
                            </li>
                        
                            <li className="hover:text-green-800  py-2 px-2 cursor-pointer transition-transform duration-400 ease-out rounded-sm">
                            <NavLink
                                to="/contact"
                                className={({ isActive }) => {
                                return (
                                    "hover:text-green-800  py-1.5 px-2 " +
                                    (!isActive
                                    ? "cursor-pointer  transition-transform duration-300 ease-out rounded-sm"
                                    : "text-green-600")
                                );
                                }}
                            >
                                CONTACT
                            </NavLink>
                            </li>
                           
                        </ul>
        </nav>
                                 <div className="ml-8 w-[200px] h-auto  justify-center items-center tex-center">
                                    <div className="flex  w-auto h-[40px] rounded-sm my-1 justify-center items-center text-center">
                                        <h1 className="flex text-center text-black font-bold ">+234 705 6346 465</h1>
                                    </div>

                                </div>
                           
                                <div className="ml-8 w-[120px] h-auto  justify-center items-center tex-center">
                                <NavLink to="/register">
                                    <div className="flex bg-cyan-600 w-auto h-[40px] rounded-sm my-1 justify-center items-center text-center">
                                        <h1 className="flex text-center text-white ">
                                                Sign Up
                                        </h1>
                                    </div>
                                </NavLink>
                                </div>
                                </div>
                                
                                
                        </div>
                               

                    </div>
                </div>

            </div>
    </>
  );
};
