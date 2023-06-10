import FeatureImg from '../assets/images/saving.png';
import { FaPiggyBank, FaMoneyCheckAlt } from 'react-icons/fa';
import { BiReceipt } from 'react-icons/bi';
import { HiSaveAs, HiOutlinePresentationChartLine, HiOutlineMail } from 'react-icons/hi';
import { BsFacebook, BsTwitter } from 'react-icons/bs';
import { GiTakeMyMoney, } from 'react-icons/gi';
import man from '../assets/images/team/man.jpg';
import woman from '../assets/images/team/woman.jpg';
import womann from '../assets/images/team/woman1.jpg';



const Home = () => {
    return (
<>
<div className="md:overflow-hidden h-full w-full" >
     <div className="flex flex-row  w-full h-[40rem] justify-center items-center space-x-4 bg-gradient-to-r from-cyan-500 to-cyan-900">
           <div className="grid w-1/2 justify-start items-start ml-10">
                <div className='w-[500px] text-3xl font-bold text-white'>
                <h1>Radio Nigeria Abuja Multi-Purpose Cooperative Socity</h1>
               
                </div> 
                <p className='my-8 text-white w-[480px]'>Welcome to Radio Nigeria Abuja Multi-Purpose Cooperative Socity, a responsive cooperative society dedicated in providing innovative welfare services for all members.</p>
                
                <div className="w-[120px] h-auto  justify-center items-center tex-center">
                                    <div className="flex bg-green-500 w-auto h-[40px] rounded-sm my-1 justify-center items-center text-center">
                                        <h1 className="flex text-center text-white ">Take A loan</h1>
                                    </div>

                </div>
             </div>
           <div className="flex justify-end items-end w-1/2">
           <img src={FeatureImg} className="w-[40rem] justify-end flex " alt="Windster Logo" />
            </div> 
     </div>
        <div className='mt-12 justify-between items-center text-center w-full '>
            <div className=" mt-4 justify-between items-center text-center w-full ">
                <div className="flex w-full justify-center items-center text-center ">
                <h1 className="flex text-center w-[500px] text-3xl font-bold text-cyan-600">Trusted by numerous Cooperative society members</h1> 
                </div>
                <div className="flex w-full justify-center items-center text-center mt-2 ">
                        <p className='text-md font-medium text-gray-500'>Access to a wide range of innovative welfare services</p>
                </div>
            </div>
            
        </div>
                    {/* Services */}
        <div className='w-full h-[700px]  mt-8'>
            <div className='w-auto h-full   mx-[100px]'>
                <div className='flex justify-center items-center space-x-1'>
                    <div className="flex w-1/2 h-[160px] rounded-md bg-green-500 mx-8 my-8 ">
                    <div className='flex w-full mx-8 my-8 space-x-4'>
                        <BiReceipt size='4rem' className='text-white'/>
                            <div className=''>
                                <h1 className='font-bold text-white text-lg mb-0'>We do Not</h1>
                                <h1 className='font-bold text-white text-lg mt-0'>Deposit on RNA Co-thrift is profitable</h1>
                                <p className='text-sm text-white'>Earn about 3% for a period of time and increase your spending capacity.</p>
                            </div>
                    </div>
                        
                    </div>
                    <div className="flex w-1/2 h-[160px] rounded-md ">
                        <div className='flex w-full mx-8 my-8 space-x-4'>
                            <HiSaveAs size='4rem' className='text-green-400'/>
                                <div className=''>
                                    <h1 className='font-bold text-cyan-800 text-lg mb-0'>We do Not</h1>
                                    <h1 className='font-bold text-cyan-800 text-lg mt-0'>Deposit on RNA Co-thrift is profitable</h1>
                                    <p className='text-sm text-gray-400'>Earn about 3% for a period of time and increase your spending capacity.</p>
                                </div>
                        </div>
                    </div>
                    

                </div>
                <div className='flex justify-center items-center space-x-1'>
                    <div className="flex w-1/2 h-[160px] rounded-md   mx-8 my-8 ">
                    <div className='flex w-full mx-8 my-8 space-x-4'>
                        <FaPiggyBank size='4rem' className='text-green-500'/>
                            <div className=''>
                                <h1 className='font-bold text-cyan-800 text-lg mb-0'>We do Not</h1>
                                <h1 className='font-bold text-cyan-800 text-lg mt-0'>Deposit on RNA Co-thrift is profitable</h1>
                                <p className='text-sm text-gray-400'>Earn about 3% for a period of time and increase your spending capacity.</p>
                            </div>
                    </div>
                        
                    </div>
                    <div className="flex w-1/2 h-[160px] rounded-md bg-cyan-400">
                        <div className='flex w-full mx-8 my-8 space-x-4'>
                            <HiOutlinePresentationChartLine size='4rem' className='text-white'/>
                                <div className=''>
                                    <h1 className='font-bold text-white text-lg mb-0'>We do Not</h1>
                                    <h1 className='font-bold text-white text-lg mt-0'>Deposit on RNA Co-thrift is profitable</h1>
                                    <p className='text-sm text-gray-100'>Earn about 3% for a period of time and increase your spending capacity.</p>
                                </div>
                        </div>
                    </div>
                    

                </div>
                <div className='flex justify-center items-center space-x-1'>
                    <div className="flex w-1/2 h-[160px] rounded-md bg-blue-900 mx-8 my-8 ">
                    <div className='flex w-full mx-8 my-8 space-x-4'>
                        <BiReceipt size='4rem' className='text-white'/>
                            <div className=''>
                                <h1 className='font-bold text-white text-lg mb-0'>We do Not</h1>
                                <h1 className='font-bold text-white text-lg mt-0'>Deposit on RNA Co-thrift is profitable</h1>
                                <p className='text-sm text-white'>Earn about 3% for a period of time and increase your spending capacity.</p>
                            </div>
                    </div>
                        
                    </div>
                    <div className="flex w-1/2 h-[160px] rounded-md ">
                        <div className='flex w-full mx-8 my-8 space-x-4'>
                            <HiSaveAs size='4rem' className='text-green-400'/>
                                <div className=''>
                                    <h1 className='font-bold text-cyan-800 text-lg mb-0'>We do Not</h1>
                                    <h1 className='font-bold text-cyan-800 text-lg mt-0'>Deposit on RNA Co-thrift is profitable</h1>
                                    <p className='text-sm text-gray-400'>Earn about 3% for a period of time and increase your spending capacity.</p>
                                </div>
                        </div>
                    </div>
                    

                </div>
            </div>
        </div>
                     {/* End Services */}
                          {/* Easy  Section */}
        <div className='mt-12 justify-center items-center text-center w-full '>
            <div className=" mt-4 justify-center items-center text-center w-full ">
                <div className="flex w-full justify-center items-center text-center ">
                <h1 className="flex text-center w-[400px] text-3xl font-bold text-cyan-600">Easy and Quick Loan Access </h1> 
                </div>
                <div className="flex w-full justify-center items-center text-center mt-2 ">
                        <p className='text-md   w-[500px]font-medium text-center text-gray-500'>Conveniently obtain a fast loan without leaving your current location.</p>
                </div>
            </div>
            
        </div>
                     {/* Loan Section */}
                     <div className='w-full h-auto mt-8'>
            <div className='w-auto h-full mx-[110px]'>
            <div className="px-3 md:lg:xl:px-40    py-20 bg-opacity-10 mb-8">
        <div className="grid grid-cols-1 md:lg:xl:grid-cols-3 group bg-white shadow-xl shadow-neutral-100  ">


            <div
                className="p-10 flex flex-col items-center text-center group  hover:bg-slate-50 cursor-pointer">
                    <FaMoneyCheckAlt size='2rem' className='text-green-400'/>
                <p className="text-xl font-medium text-slate-700 mt-3">Most Experienced Team</p>
                <p className="mt-2 text-sm text-slate-500">Team BrainEdge education is a bunch of highly focused, energetic
                    set of people.</p>
            </div>

            <div
                className="p-10 flex flex-col items-center text-center group  hover:bg-slate-50 cursor-pointer">
                    <GiTakeMyMoney size='2rem' className='text-green-400'/>
                <p className="text-xl font-medium text-slate-700 mt-3">Best
                    Test preparation</p>
                <p className="mt-2 text-sm text-slate-500">Know where you stand and what next to do to succeed .</p>
            </div>

            <div className="p-10 flex flex-col items-center text-center group   hover:bg-slate-50 cursor-pointer">
            <HiSaveAs size='2rem' className='text-green-400'/>
                <p className="text-xl font-medium text-slate-700 mt-3">Admission process Guidance</p>
                <p className="mt-2 text-sm text-slate-500">Professional Advice for higher education abroad and select the
                    top institutions worldwide.</p>
            </div>


            <div className="p-10 flex flex-col items-center text-center group    hover:bg-slate-50 cursor-pointer">
            <HiSaveAs size='2rem' className='text-green-400'/>
                <p className="text-xl font-medium text-slate-700 mt-3">Best
                    Track Record</p>
                <p className="mt-2 text-sm text-slate-500">Yet another year ! Yet another jewel in our crown!</p>
            </div>

            <div className="p-10 flex flex-col items-center text-center group     hover:bg-slate-50 cursor-pointer">
            <HiSaveAs size='2rem' className='text-green-400'/>
                <p className="text-xl font-medium text-slate-700 mt-3">Free
                    Mock Exams</p>
                <p className="mt-2 text-sm text-slate-500">Get Topic-Wise Tests, Section- Wise and mock tests for your
                    preparation.</p>
            </div>

            <div className="p-10 flex flex-col items-center text-center group     hover:bg-slate-50 cursor-pointer">
            <HiSaveAs size='2rem' className='text-green-400'/>
                <p className="text-xl font-medium text-slate-700 mt-3">Genuine
                    Visa Advice</p>
                <p className="mt-2 text-sm text-slate-500">Visa process by helping you create the necessary documentation
                </p>
            </div>




        </div>
        

        <div className="w-full   bg-indigo-600 shadow-xl shadow-indigo-200 py-10 px-20 flex justify-between items-center">
            <p className=" text-white"> <span className="text-4xl font-medium">Still Confused ?</span>  <span className="text-lg">Save your money Today ! </span></p>
            <button className="px-5 py-3  font-medium text-slate-700 shadow-xl  hover:bg-white duration-150  bg-yellow-400">Become a  MEMBER </button>
        </div>

    </div>

            </div>
        </div>
                    {/* End Loan Section */}
{/* Teams */}
<div className="py-20 bg-gray-50">
            <div className="container mx-auto px-6 md:px-12 xl:px-32">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-center text-2xl text-gray-900 font-bold md:text-4xl">RNA Co-Thrift Executive</h2>
                    <p className="text-gray-600 lg:w-8/12 lg:mx-auto">Tailus prides itself not only on award-winning technology, but also on the talent of its people of some of the brightest minds and most experienced executives in business.</p>
                </div>
                <div className="grid gap-12 items-center md:grid-cols-3">
                    <div className="space-y-4 text-center">
                    <img src={woman} className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64" 
                    alt="Windster Logo" loading="lazy" width="640" height="805"/>            
                        <div>
                            <h4 className="text-2xl">Hentoni Doe</h4>
                            <span className="block text-sm text-gray-500">CEO-Founder</span>
                        </div>
                    </div>
                    <div className="space-y-4 text-center">
                    <img src={man} className="w-64 h-64 mx-auto object-cover rounded-xl md:w-48 md:h-64 lg:w-64 lg:h-80" 
                    alt="Windster Logo" loading="lazy" width="1000" height="667"/> 
                        <div>
                            <h4 className="text-2xl">Jonathan Doe</h4>
                            <span className="block text-sm text-gray-500 font-bold">President</span>
                        </div>
                    </div>
                    <div className="space-y-4 text-center">
                    <img src={womann} className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64" 
                    alt="Windster Logo" loading="lazy" width="640" height="805"/> 
                        <div>
                            <h4 className="text-2xl">Anabelle Doe</h4>
                            <span className="block text-sm text-gray-500">Vice President</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                    {/* Footer Section */}
        <div className='w-full h-[200px] bg-gradient-to-r from-cyan-900 to-cyan-500  mt-8'>
            <div className='w-full h-full'>
                <div className='grid w-full justify-center items-center mt-14'>
                    <h1 className='text-white font-bold text-lg mt-12'>Contact Us and Get </h1> 
                
                </div>
                <div className='flex  w-full justify-center items-center'>
                    
                    <h1 className='text-white font-bold text-lg '>a 2% Discount on Your First Loan </h1>
                </div>
                <div className='flex  w-full justify-center items-center my-4 space-x-8'>
                <BsFacebook size='1.7rem' className='text-blue-600' />
                <BsTwitter size='2rem' className='text-blue-500' /> 
                <HiOutlineMail size='2rem' className='text-red-600'/>           
                </div>
               
            </div>
        </div>
                    {/* End Loan Section */}
</div>
</>
    );
  };
  
  export default Home;