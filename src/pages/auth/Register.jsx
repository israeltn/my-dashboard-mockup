import { NavLink } from "react-router-dom";
import RNALogo from '../../assets/images/logoo1.png';
import login from '../../assets/images/login.svg';
const Register = () => {
  return (
    <>
   
     <div className="flex flex-wrap">
      <div className="md:w-1/2 w-auto flex h-screen justify-center items-center  ">
       
        <div className="pt-4 justify-center items-center mx-auto w-auto md:w-full h-full lg:max-w-md  md:max-w-md md:px-0 px-4">
          
          <NavLink
            to="/"
            className="text-xl font-bold justify-center flex items-center px-3 mt-1"
          >
          
             <img src={RNALogo} className="justify-center w-[120px] flex items-center mb-2"
            alt="Windster Logo" />
          
          </NavLink>

          <div className="justify-center uppercase mb-3 items-center text-gray-600 text-4xl text-center w-auto font-bold">
            <span className="text-black">RNA</span>  Co-Thrift
          </div>
          <div className="justify-center items-center text-xl text-center text-green-600 w-auto font-bold pb-4">
            Register as Member
          </div>
         
          <div className="bg-white shadow w-full rounded-md">
            <form>
              <div className="px-5 py-7 justify-center item-center">
                <div className="mb-5">
                  <label className="font-semibold text-sm text-gray-600 block">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstname"
                    
                    className="border rounded-lg px-3 py-2 mt-1 text-sm w-full"
                  />
                  <span className="pb-2 mb-2 text-xs text-red-600">
                    {/* {registerInput.error_list.firstname} */}
                  </span>
                </div>
                <div className="mb-5">
                  <label className="font-semibold text-sm text-gray-600  block">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    // onChange={handleInput}
                    // value={registerInput.lastname}
                    className="border rounded-lg px-3 py-2 mt-1 text-sm w-full"
                  />
                  <span className="pb-2 mb-2 text-xs text-red-600">
                    {/* {registerInput.error_list.lastname} */}
                  </span>
                </div>
                <label className="font-semibold text-sm text-gray-600 block">
                  E-mail
                </label>
                <input
                  type="text"
                  name="email"
                //   onChange={handleInput}
                //   value={registerInput.email}
                  className="border rounded-lg px-3 py-2 mt-1 text-sm w-full"
                />
                <span className="pb-2 mb-2 text-xs text-red-600">
                  {/* {registerInput.error_list.email} */}
                </span>
                <div className="mt-5 mb-5">
                  <label className="font-semibold text-sm text-gray-600 block">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    // onChange={handleInput}
                    // value={registerInput.password}
                    className="border rounded-lg px-3 py-2 mt-1 text-sm w-full"
                  />
                  <span className="pb-2 mb-2 text-xs text-red-600">
                    {/* {registerInput.error_list.password} */}
                  </span>
                </div>
                <div className="item-center justify-center flex">
                  <button
                    type="submit"
                    // disabled={isSubmitting}
                    className="transition w-full duration-200 bg-green-500 hover:bg-green-300   focus:ring-opacity-50 text-white py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
                  >
                    <span className="inline-block mr-2">
                      {/* {" "}
                      {isSubmitting ? "Submitting Data..." : "Register"} */}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-4 h-4 inline-block"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </form>
            <div className="text-center hover:text-red-700">
              <NavLink to="/login">Have an account sign in</NavLink>
            </div>
  
            <div className="py-2">
              <div className="grid grid-cols-2 gap-1">
                <div className="text-center sm:text-left whitespace-nowrap">
                  <button className="transition duration-200 mx-5 px-5 py-2 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-4 h-4 inline-block align-text-top"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="inline-block ml-1">Forgot Password</span>
                  </button>
                </div>
                <div className="text-center sm:text-right whitespace-nowrap">
                  <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-4 h-4 inline-block align-text-bottom	"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                    <span className="inline-block ml-1">Help</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-4">
            <div className="grid grid-cols-2 gap-1 mb-11">
              <div className="text-center sm:text-left">
                <button className="transition duration-200 mx-5 px-5 py-2 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-200 focus:outline-none  focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-4 h-4 inline-block align-text-top"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                  <NavLink
                        to="/"
                        className="inline-block text-blue-800 font-medium ml-1"
                      >
                        Back to Home
                      </NavLink>
                </button>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div className="justify-center items-center w-1/2 hidden md:flex h-screen bg-gradient-to-r from-cyan-500 to-cyan-900">
        <div className="items-center justify-center">
                <div className="">
                <p className="text-center text-2xl font-bold">We are more than just a Co-oporative</p>
                </div>
                <div className="flex py-8 ">
                <img src={login} className="justify-center flex items-center mb-2 h-[25rem]" alt="Windster Logo" /> 
                </div>
               
        </div>
      </div>
     </div>

  </>
);
};
   
  
  export default Register;